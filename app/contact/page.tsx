import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageSheet from "@/components/layout/PageSheet";
export const metadata: Metadata = { title: "Contact | Jahred Uy", description: "Contact Jahred Uy about software development projects and job opportunities." };
export default function ContactPage() {
  const formAvailable = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL);
  return <PageSheet title="Let’s build something useful." sheet="005">
  <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">Have a project or opportunity in mind? I&apos;m open to development work, freelance projects, and remote opportunities.</p>
  <div className="grid gap-8 py-12 sm:grid-cols-2">
    <section><h2 className="text-xl font-semibold">Email</h2><a className="mt-3 inline-block break-all text-lg text-[var(--blueprint-blue)] underline underline-offset-4" href="mailto:khikho107@gmail.com">khikho107@gmail.com</a><p className="mt-3 text-sm text-[var(--muted)]">Include your project details or the role you have in mind.</p></section>
    <section><h2 className="text-xl font-semibold">Phone & WhatsApp</h2><a href="tel:+639552811786" className="mt-3 inline-block text-lg text-[var(--blueprint-blue)] underline underline-offset-4">0955 281 1786</a><a href="https://wa.me/639552811786" target="_blank" rel="noopener noreferrer" className="mt-4 block w-fit text-sm font-semibold text-[var(--blueprint-blue)] underline underline-offset-4">Message on WhatsApp &rarr;</a></section>
  </div>
  <nav aria-label="Social links" className="mb-10 flex flex-wrap gap-x-8 gap-y-4 font-semibold text-[var(--blueprint-blue)]">
    <a href="https://github.com/Jahjah07" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">GitHub / Jahjah07 &rarr;</a>
    <a href="https://www.linkedin.com/in/jahred-uy/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">LinkedIn / Jahred Uy &rarr;</a>
  </nav>
  {formAvailable ? <ContactForm /> : (
    <section aria-labelledby="contact-form-status" className="mb-12 max-w-2xl border border-[var(--border-strong)] bg-[var(--blueprint-light)] p-6">
      <h2 id="contact-form-status" className="text-lg font-semibold">Please contact me directly</h2>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">The contact form is currently unavailable. You can reach me by email, WhatsApp, or phone using the links above.</p>
    </section>
  )}
</PageSheet>; }
