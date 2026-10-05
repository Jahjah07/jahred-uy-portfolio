import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";
const compiled = ts.transpileModule(readFileSync(new URL("../app/api/contact/route.ts", import.meta.url), "utf8"), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
const valid = { name: "Example Visitor", email: "visitor@example.com", subject: "Project inquiry", message: "A sufficiently detailed project inquiry." };
const request = (data, origin = "https://portfolio.example") => new Request("https://portfolio.example/api/contact", { method: "POST", headers: { Origin: origin, "Content-Type": "application/json" }, body: JSON.stringify(data) });
test("contact validation, configuration, provider success and failure", async () => {
  const previousFetch = globalThis.fetch;
  const previousKey = process.env.RESEND_API_KEY;
  const previousSender = process.env.CONTACT_FROM_EMAIL;
  try {
    globalThis.fetch = async () => { throw new Error("Unexpected provider call"); };
    assert.equal((await POST(request(valid, "https://other.example"))).status, 403);
    for (const data of [null, [], {}, { ...valid, email: "bad" }, { ...valid, message: "short" }, { ...valid, subject: "header\ninjection" }, { ...valid, website: "bot" }]) assert.equal((await POST(request(data))).status, 400);
    delete process.env.RESEND_API_KEY; delete process.env.CONTACT_FROM_EMAIL;
    assert.equal((await POST(request(valid))).status, 503);
    process.env.RESEND_API_KEY = "test-key"; process.env.CONTACT_FROM_EMAIL = "sender@example.com";
    globalThis.fetch = async (url, options) => {
      assert.equal(url, "https://api.resend.com/emails");
      const payload = JSON.parse(options.body);
      assert.deepEqual(payload.to, ["khikho107@gmail.com"]);
      assert.equal(payload.reply_to, valid.email);
      assert.ok(payload.text.includes(valid.message));
      return Response.json({ id: "test-delivery" });
    };
    assert.equal((await POST(request(valid))).status, 200);
    globalThis.fetch = async () => Response.json({ error: "private-provider-error" }, { status: 429 });
    const failure = await POST(request(valid));
    assert.equal(failure.status, 502);
    assert.ok(!(await failure.text()).includes("private-provider-error"));
    globalThis.fetch = async () => { throw new Error("private-network-error"); };
    assert.equal((await POST(request(valid))).status, 502);
  } finally {
    globalThis.fetch = previousFetch;
    if (previousKey === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = previousKey;
    if (previousSender === undefined) delete process.env.CONTACT_FROM_EMAIL; else process.env.CONTACT_FROM_EMAIL = previousSender;
  }
});
