import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[var(--border-strong)] bg-[var(--paper)]"
    >
      {/* Blueprint Grid */}
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

      {/* Decorative Crosshair */}
      <div className="pointer-events-none absolute right-10 top-16 hidden h-16 w-16 lg:block">
        <span className="absolute left-1/2 top-0 h-full w-px bg-[var(--blueprint-grid)]/40" />

        <span className="absolute left-0 top-1/2 h-px w-full bg-[var(--blueprint-grid)]/40" />

        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 border border-[var(--blueprint-blue)] bg-[var(--paper)]" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* ===================================================
            SHEET HEADER
        ==================================================== */}

        <div className="flex flex-col gap-4 border-b border-dashed border-[var(--border-strong)] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
              Sheet 02
            </p>

            <h2 className="font-sans text-4xl font-extrabold tracking-[-0.05em] text-[var(--blueprint)] sm:text-5xl lg:text-6xl">
              About Me
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">
            <span>JU-002</span>
            <span>Developer Profile</span>
            <span className="hidden sm:inline">Rev A</span>
          </div>
        </div>

        {/* ===================================================
            CONTENT
        ==================================================== */}

        <div className="grid gap-12 py-14 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:py-20">
          {/* LEFT — INTRODUCTION */}
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--blueprint-blue)]">
                02.01
              </span>

              <span className="h-px w-16 bg-[var(--border-strong)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                Introduction
              </span>
            </div>

            <h3 className="max-w-3xl font-sans text-3xl font-bold leading-tight tracking-[-0.045em] text-[var(--blueprint)] sm:text-4xl lg:text-5xl">
              I build scalable web applications with a focus on{" "}
              <span className="text-[var(--blueprint-blue)]">
                clean code, thoughtful interfaces, and practical solutions.
              </span>
            </h3>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              I&apos;m a Full Stack Developer with 2 years of professional
              experience building and maintaining responsive web applications.
              My work spans both frontend and backend development, from
              reusable interfaces to APIs, authentication, database
              integrations, and application features.
            </p>

            {/* CTA */}
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-4 border border-[var(--blueprint)] bg-transparent px-6 py-3.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--blueprint)] transition-all duration-200 hover:bg-[var(--blueprint)] hover:text-white"
            >
              <span>Read More About Me</span>

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* RIGHT — PROFILE SPECIFICATION */}
          <div className="relative">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                Profile Specification
              </span>

              <span className="font-mono text-[8px] text-[var(--blueprint-blue)]">
                FIG. 02-A
              </span>
            </div>

            <div className="relative border-2 border-[var(--blueprint-blue)] bg-[var(--paper-white)] p-6 sm:p-8">
              {/* Corner Markers */}
              <span className="absolute -left-1.5 -top-1.5 h-4 w-4 border-l-2 border-t-2 border-[var(--blueprint-blue)]" />

              <span className="absolute -right-1.5 -top-1.5 h-4 w-4 border-r-2 border-t-2 border-[var(--blueprint-blue)]" />

              <span className="absolute -bottom-1.5 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-[var(--blueprint-blue)]" />

              <span className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-b-2 border-r-2 border-[var(--blueprint-blue)]" />

              <div className="grid divide-y divide-dashed divide-[var(--border-strong)]">
                <ProfileRow
                  label="Role"
                  value="Full Stack Developer"
                />

                <ProfileRow
                  label="Experience"
                  value="2 Years Professional"
                />

                <ProfileRow
                  label="Education"
                  value="BS Computer Science"
                />

                <ProfileRow
                  label="Focus"
                  value="Web Applications"
                />

                <ProfileRow
                  label="Specialty"
                  value="Frontend + Backend"
                />
              </div>

              {/* Technical Marker */}
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-[var(--border-strong)] pt-5">
                <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[var(--muted)]">
                  Developer Profile
                </span>

                <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[var(--blueprint-blue)]">
                  JU-002
                </span>
              </div>
            </div>

            {/* Dimension Annotation */}
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-[var(--border-strong)]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]">
                Profile / 01
              </span>

              <span className="h-px flex-1 bg-[var(--border-strong)]" />
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM SHEET BAR
        ==================================================== */}

        <div className="flex flex-col gap-4 border-t border-dashed border-[var(--border-strong)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span className="text-[var(--blueprint-blue)]">02</span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />

            <span>About / Developer Profile</span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span>Drawing No. JU-002</span>
            <span>Revision A</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROFILE ROW
========================================================= */

function ProfileRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4 py-4 sm:grid-cols-[120px_1fr]">
      <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--muted)]">
        {label}
      </span>

      <span className="text-xs font-medium text-[var(--blueprint)] sm:text-sm">
        {value}
      </span>
    </div>
  );
}