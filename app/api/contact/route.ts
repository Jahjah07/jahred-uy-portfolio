export async function POST(request: Request) {
  const fail = (error: string, status: number) => Response.json({ error }, { status });
  if (request.headers.get("origin") !== new URL(request.url).origin) return fail("This request is not allowed.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return fail("Use a JSON request.", 415);
  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return fail("Message is too long.", 413);
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return fail("Invalid message.", 400);
    data = value as Record<string, unknown>;
  } catch { return fail("Invalid message.", 400); }
  if (data.website) return fail("Unable to submit this message.", 400);
  const fields = ["name", "email", "subject", "message"] as const;
  if (fields.some((key) => typeof data[key] !== "string")) return fail("Complete all fields.", 400);
  const [name, email, subject, message] = fields.map((key) => (data[key] as string).trim());
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !subject || subject.length > 150 || /[\r\n]/.test(subject + email + name) || message.length < 10 || message.length > 5000) return fail("Check your name, email, subject, and message length.", 400);
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) return fail("The form is temporarily unavailable. Please email khikho107@gmail.com directly.", 503);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: ["khikho107@gmail.com"], reply_to: email, subject: `Portfolio: ${subject}`, text: `From: ${name} <${email}>\n\n${message}` }), signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return fail("Unable to send right now. Please email me directly.", 502);
    return Response.json({ success: true });
  } catch { return fail("Unable to send right now. Please email me directly.", 502); }
}
