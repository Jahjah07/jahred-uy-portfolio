export default function AboutPage() {
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
          PAGE
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        {/* ===================================================
            SHEET HEADER
        ==================================================== */}

        <header className="border-b border-dashed border-[var(--border-strong)] pb-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                Sheet 02 / 05
              </p>

              <h1 className="font-sans text-5xl font-extrabold tracking-[-0.06em] text-[var(--blueprint)] sm:text-6xl lg:text-7xl">
                About Me
              </h1>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]">
              <span>Drawing JU-002</span>
              <span>Profile</span>
              <span>Rev A</span>
              <span>2026</span>
            </div>
          </div>
        </header>

        {/* ===================================================
            PROFILE INTRO
        ==================================================== */}

        <section className="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-20">
          {/* Profile Identity */}
          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-sm border-2 border-[var(--blueprint-blue)] bg-[var(--paper-white)] p-6">
              {/* Corner Marks */}
              <span className="absolute -left-1.5 -top-1.5 h-5 w-5 border-l-2 border-t-2 border-[var(--blueprint-blue)]" />
              <span className="absolute -right-1.5 -top-1.5 h-5 w-5 border-r-2 border-t-2 border-[var(--blueprint-blue)]" />
              <span className="absolute -bottom-1.5 -left-1.5 h-5 w-5 border-b-2 border-l-2 border-[var(--blueprint-blue)]" />
              <span className="absolute -bottom-1.5 -right-1.5 h-5 w-5 border-b-2 border-r-2 border-[var(--blueprint-blue)]" />

              {/* Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <span className="absolute h-full w-px bg-[var(--blueprint-grid)]" />
                <span className="absolute w-full h-px bg-[var(--blueprint-grid)]" />

                <span className="h-24 w-24 rounded-full border border-dashed border-[var(--blueprint-grid)]" />
              </div>

              {/* Identity */}
              <div className="relative flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-24 w-24 items-center justify-center border border-[var(--blueprint-blue)] font-mono text-3xl font-bold text-[var(--blueprint-blue)]">
                  JU
                </div>

                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Developer Profile
                </p>

                <h2 className="mt-2 font-sans text-2xl font-bold tracking-[-0.04em] text-[var(--blueprint)]">
                  Jahred Uy
                </h2>

                <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--blueprint-blue)]">
                  Full Stack Developer
                </p>
              </div>

              {/* Drawing Label */}
              <span className="absolute bottom-4 left-4 font-mono text-[7px] uppercase tracking-[0.15em] text-[var(--muted)]">
                FIG. 02-A
              </span>

              <span className="absolute right-4 top-4 font-mono text-[7px] uppercase tracking-[0.15em] text-[var(--muted)]">
                SCALE 1:1
              </span>
            </div>
          </div>

          {/* Introduction */}
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

            <h2 className="max-w-3xl font-sans text-3xl font-bold leading-tight tracking-[-0.045em] text-[var(--blueprint)] sm:text-4xl lg:text-5xl">
              I build scalable web applications with a focus on{" "}
              <span className="text-[var(--blueprint-blue)]">
                clean code, thoughtful interfaces, and practical solutions.
              </span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              <p>
                I&apos;m a Full Stack Developer with 2 years of professional
                experience building and maintaining responsive web
                applications.
              </p>

              <p>
                My work spans both frontend and backend development, from
                creating reusable interfaces with React and Next.js to
                developing APIs, authentication systems, database
                integrations, and application features using TypeScript,
                Node.js, PHP, and Laravel.
              </p>

              <p>
                I enjoy working through the full development process—from
                understanding requirements and building features to deployment,
                troubleshooting, and post-launch support.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================
            PROFESSIONAL APPROACH
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-16 lg:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                02.02
              </p>

              <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)] sm:text-4xl">
                Development Approach
              </h2>
            </div>

            <p className="max-w-md font-mono text-[8px] uppercase leading-5 tracking-[0.15em] text-[var(--muted)]">
              Principles applied throughout the development process.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <ApproachCard
              number="01"
              title="Clean"
              description="I aim for clear, maintainable code and reusable components that make applications easier to develop and maintain."
            />

            <ApproachCard
              number="02"
              title="Practical"
              description="I focus on solving the actual problem first, building useful features without adding unnecessary complexity."
            />

            <ApproachCard
              number="03"
              title="Continuous"
              description="I continuously improve my skills, explore new technologies, and look for better ways to build reliable applications."
            />
          </div>
        </section>

        {/* ===================================================
            EXPERIENCE SNAPSHOT
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Heading */}
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                02.03
              </p>

              <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)] sm:text-4xl">
                Experience
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
                Professional experience spanning frontend, backend, and
                full-stack web development.
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-0">
              <ExperienceRow
                year="2025 — Present"
                company="Kalipto Constructions"
                role="Full Stack Developer"
              />

              <ExperienceRow
                year="2024 — 2025"
                company="Bluebeans System Inc."
                role="Full Stack Developer"
              />
            </div>
          </div>
        </section>

        {/* ===================================================
            EDUCATION
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                02.04
              </p>

              <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)] sm:text-4xl">
                Education
              </h2>
            </div>

            <div className="border border-[var(--border-strong)] bg-white/40 p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--blueprint-blue)]">
                    Bachelor&apos;s Degree
                  </p>

                  <h3 className="mt-2 font-sans text-xl font-bold tracking-[-0.03em] text-[var(--blueprint)]">
                    Bachelor of Science in Computer Science
                  </h3>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Negros Oriental State University
                  </p>
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  2021 — 2025
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            PROFILE SPECIFICATION
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                02.05
              </p>

              <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)] sm:text-4xl">
                Profile Specification
              </h2>
            </div>

            <div className="border-2 border-[var(--blueprint-blue)] bg-[var(--paper-white)] p-6 sm:p-8">
              <div className="grid divide-y divide-dashed divide-[var(--border-strong)]">
                <SpecificationRow
                  label="Name"
                  value="Jahred Uy"
                />

                <SpecificationRow
                  label="Role"
                  value="Full Stack Developer"
                />

                <SpecificationRow
                  label="Experience"
                  value="2 Years Professional"
                />

                <SpecificationRow
                  label="Focus"
                  value="Web Applications"
                />

                <SpecificationRow
                  label="Specialty"
                  value="Frontend + Backend"
                />

                <SpecificationRow
                  label="Education"
                  value="BS Computer Science"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            FOOTER SHEET BAR
        ==================================================== */}

        <footer className="flex flex-col gap-4 border-t border-dashed border-[var(--border-strong)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span className="text-[var(--blueprint-blue)]">02</span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />

            <span>About / Developer Profile</span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span>Drawing No. JU-002</span>
            <span>Revision A</span>
            <span>End of Sheet</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* =========================================================
   APPROACH CARD
========================================================= */

function ApproachCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group border border-[var(--border-strong)] bg-white/40 p-6 transition-colors hover:border-[var(--blueprint-blue)] hover:bg-[var(--blueprint-light)] sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--blueprint-blue)]">
          {number}
        </span>

        <span className="h-px w-10 bg-[var(--border-strong)] transition-all group-hover:w-16 group-hover:bg-[var(--blueprint-blue)]" />
      </div>

      <h3 className="mt-8 font-sans text-xl font-bold tracking-[-0.03em] text-[var(--blueprint)]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   EXPERIENCE ROW
========================================================= */

function ExperienceRow({
  year,
  company,
  role,
}: {
  year: string;
  company: string;
  role: string;
}) {
  return (
    <div className="grid gap-3 border-b border-dashed border-[var(--border-strong)] py-6 sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-6">
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">
        {year}
      </span>

      <div>
        <h3 className="font-sans text-lg font-semibold tracking-[-0.02em] text-[var(--blueprint)]">
          {company}
        </h3>

        <p className="mt-1 text-sm text-[var(--muted)]">
          {role}
        </p>
      </div>

      <span className="hidden font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--blueprint-blue)] sm:block">
        Experience
      </span>
    </div>
  );
}

/* =========================================================
   SPECIFICATION ROW
========================================================= */

function SpecificationRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-5 py-4 sm:grid-cols-[160px_1fr]">
      <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--muted)]">
        {label}
      </span>

      <span className="text-sm font-medium text-[var(--blueprint)]">
        {value}
      </span>
    </div>
  );
}