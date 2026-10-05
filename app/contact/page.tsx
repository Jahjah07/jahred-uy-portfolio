export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--paper)]">
      {/* =====================================================
          BLUEPRINT GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74, 144, 217, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 144, 217, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74, 144, 217, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 144, 217, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "160px 160px",
        }}
      />

      {/* =====================================================
          DECORATIVE CROSSHAIRS
      ====================================================== */}

      <div className="pointer-events-none absolute right-10 top-20 hidden h-16 w-16 lg:block">
        <span className="absolute left-1/2 top-0 h-full w-px bg-[var(--blueprint-grid)]/40" />

        <span className="absolute left-0 top-1/2 h-px w-full bg-[var(--blueprint-grid)]/40" />

        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 border border-[var(--blueprint-blue)] bg-[var(--paper)]" />
      </div>

      <div className="pointer-events-none absolute bottom-32 left-10 hidden h-12 w-12 lg:block">
        <span className="absolute left-1/2 top-0 h-full w-px bg-[var(--blueprint-grid)]/30" />

        <span className="absolute left-0 top-1/2 h-px w-full bg-[var(--blueprint-grid)]/30" />
      </div>

      {/* =====================================================
          PAGE CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        {/* ===================================================
            SHEET HEADER
        ==================================================== */}

        <header className="border-b border-dashed border-[var(--border-strong)] pb-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                Sheet 05 / 05
              </p>

              <h1 className="font-sans text-5xl font-extrabold tracking-[-0.06em] text-[var(--blueprint)] sm:text-6xl lg:text-7xl">
                Contact
              </h1>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]">
              <span>Drawing JU-005</span>
              <span>Contact Information</span>
              <span>Rev A</span>
              <span>2026</span>
            </div>
          </div>
        </header>

        {/* ===================================================
            INTRODUCTION
        ==================================================== */}

        <section className="border-b border-dashed border-[var(--border-strong)] py-14 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--blueprint-blue)]">
                05.01
              </span>

              <span className="h-px w-16 bg-[var(--border-strong)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                Start a Conversation
              </span>
            </div>

            <h2 className="font-sans text-4xl font-bold leading-tight tracking-[-0.05em] text-[var(--blueprint)] sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-[var(--blueprint-blue)]">
                useful.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              Have a project, idea, or opportunity you&apos;d like to discuss?
              Send me a message and I&apos;ll get back to you.
            </p>
          </div>
        </section>

        {/* ===================================================
            CONTACT AREA
        ==================================================== */}

        <section className="grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:py-20">
          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <div>
            <div className="mb-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                05.02
              </p>

              <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)]">
                Contact Information
              </h2>
            </div>

            <div className="space-y-4">
              <ContactDetail
                label="Email"
                value="khikho107@gmail.com"
                href="mailto:khikho107@gmail.com"
              />

              <ContactDetail
                label="GitHub"
                value="github.com/Jahjah07"
                href="https://github.com/Jahjah07"
              />

              <ContactDetail
                label="WhatsApp"
                value="0955 281 1786"
                href="https://wa.me/639552811786"
              />
            </div>

            <div className="mt-4">
              <ContactDetail label="Phone" value="0955 281 1786" href="tel:+639552811786" />
            </div>
            {/* Availability */}
            <div className="mt-8 border border-[var(--border-strong)] bg-white/30 p-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--blueprint-blue)]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--blueprint)]">
                  Available for opportunities
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                Open to discussing freelance projects, development work, and
                suitable remote opportunities.
              </p>
            </div>
          </div>

          {/* =================================================
              CONTACT FORM
          ================================================== */}

          <div>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                  05.03
                </p>

                <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)]">
                  Send a Message
                </h2>
              </div>

              <span className="hidden font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--muted)] sm:block">
                Form 001
              </span>
            </div>

            <form className="border-2 border-[var(--blueprint-blue)] bg-[var(--paper-white)] p-6 sm:p-8">
              {/* Corner Markers */}
              <span className="absolute" />

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    01 / Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border-b border-[var(--border-strong)] bg-transparent px-0 py-3 text-sm text-[var(--blueprint)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--blueprint-blue)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    02 / Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border-b border-[var(--border-strong)] bg-transparent px-0 py-3 text-sm text-[var(--blueprint)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--blueprint-blue)]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    03 / Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="w-full border-b border-[var(--border-strong)] bg-transparent px-0 py-3 text-sm text-[var(--blueprint)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--blueprint-blue)]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    04 / Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me a little about your project..."
                    className="w-full resize-none border border-[var(--border-strong)] bg-transparent p-3 text-sm text-[var(--blueprint)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--blueprint-blue)]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 border border-[var(--blueprint)] px-6 py-3.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--blueprint)] transition-all duration-200 hover:bg-[var(--blueprint)] hover:text-white"
                >
                  <span>Send Message</span>

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ===================================================
            RESPONSE NOTE
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-14">
          <div className="grid gap-8 md:grid-cols-3">
            <ContactNote
              number="01"
              title="Send"
              description="Submit your project details through the contact form."
            />

            <ContactNote
              number="02"
              title="Review"
              description="I&apos;ll review your message and requirements."
            />

            <ContactNote
              number="03"
              title="Connect"
              description="We can discuss the project, timeline, and next steps."
            />
          </div>
        </section>

        {/* ===================================================
            FOOTER SHEET BAR
        ==================================================== */}

        <footer className="flex flex-col gap-4 border-t border-dashed border-[var(--border-strong)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span className="text-[var(--blueprint-blue)]">05</span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />

            <span>Contact / Communication</span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span>Drawing No. JU-005</span>
            <span>Revision A</span>
            <span>End of Document</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* =========================================================
   CONTACT DETAIL
========================================================= */

function ContactDetail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group block border border-[var(--border-strong)] bg-white/30 p-5 transition-colors duration-200 hover:border-[var(--blueprint-blue)] hover:bg-[var(--blueprint-light)]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]">
          {label}
        </span>

        <span className="font-mono text-[9px] text-[var(--blueprint-blue)] transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>

      <p className="mt-3 break-all text-sm font-medium text-[var(--blueprint)]">
        {value}
      </p>
    </a>
  );
}

/* =========================================================
   CONTACT NOTE
========================================================= */

function ContactNote({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-[var(--border-strong)] bg-white/30 p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--blueprint-blue)]">
          Step {number}
        </span>

        <span className="font-mono text-[8px] text-[var(--muted)]">
          0{number}
        </span>
      </div>

      <h3 className="mt-7 font-sans text-xl font-bold tracking-[-0.03em] text-[var(--blueprint)]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
        {description}
      </p>

      <div className="mt-6 h-px bg-[var(--border-strong)]" />
    </div>
  );
}