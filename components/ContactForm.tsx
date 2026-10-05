"use client";
import { useState, type FormEvent } from "react";
export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (state === "sending") return;
    const form = event.currentTarget; const data = Object.fromEntries(new FormData(form));
    setState("sending"); setMessage("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), signal: AbortSignal.timeout(20000) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send. Please email me directly.");
      setState("success"); setMessage("Your message was submitted. Thank you for getting in touch."); form.reset();
    } catch (error) { setState("error"); setMessage(error instanceof Error ? error.message : "Unable to send. Please email me directly."); }
  }
  return <form onSubmit={submit} className="mb-12 max-w-2xl border-t border-[var(--border)] pt-8">
    <h2 className="text-2xl font-bold">Send a message</h2>
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold">Name<input name="name" autoComplete="name" required maxLength={100} className="mt-2 block w-full border border-[var(--border-strong)] bg-white p-3 font-normal" /></label>
      <label className="text-sm font-semibold">Email<input name="email" type="email" autoComplete="email" required maxLength={254} className="mt-2 block w-full border border-[var(--border-strong)] bg-white p-3 font-normal" /></label>
    </div>
    <label className="mt-5 block text-sm font-semibold">Subject<input name="subject" required maxLength={150} className="mt-2 block w-full border border-[var(--border-strong)] bg-white p-3 font-normal" /></label>
    <label className="mt-5 block text-sm font-semibold">Message<textarea name="message" required minLength={10} maxLength={5000} rows={5} className="mt-2 block w-full border border-[var(--border-strong)] bg-white p-3 font-normal" /></label>
    <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button disabled={state === "sending"} type="submit" className="mt-5 bg-[var(--blueprint-blue)] px-5 py-3 font-semibold text-white disabled:opacity-60">{state === "sending" ? "Sending…" : "Send message"}</button>
    <p role={state === "error" ? "alert" : "status"} aria-live="polite" className="mt-4 text-sm leading-6">{message}</p>
  </form>;
}
