import { projects } from "./projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-[var(--paper)]">
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

      <div className="pointer-events-none absolute bottom-24 left-10 hidden h-12 w-12 lg:block">
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
                Sheet 03 / 05
              </p>

              <h1 className="font-sans text-5xl font-extrabold tracking-[-0.06em] text-[var(--blueprint)] sm:text-6xl lg:text-7xl">
                Projects
              </h1>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]">
              <span>Drawing JU-003</span>
              <span>Project Archive</span>
              <span>Rev A</span>
              <span>2026</span>
            </div>
          </div>
        </header>

        {/* ===================================================
            INTRODUCTION
        ==================================================== */}

        <section className="grid gap-10 border-b border-dashed border-[var(--border-strong)] py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:py-16">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--blueprint-blue)]">
                03.01
              </span>

              <span className="h-px w-16 bg-[var(--border-strong)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                Selected Work
              </span>
            </div>

            <h2 className="max-w-3xl font-sans text-3xl font-bold leading-tight tracking-[-0.045em] text-[var(--blueprint)] sm:text-4xl lg:text-5xl">
              A collection of{" "}
              <span className="text-[var(--blueprint-blue)]">
                applications, systems, and digital experiences
              </span>{" "}
              I&apos;ve worked on.
            </h2>
          </div>

          <div className="flex items-center gap-4 lg:pb-1">
            <div className="h-12 w-px bg-[var(--border-strong)]" />

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--muted)]">
                Archive
              </p>

              <p className="mt-1 font-mono text-sm font-bold text-[var(--blueprint)]">
                {String(projects.length).padStart(2, "0")} Projects
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================
            PROJECT INDEX
        ==================================================== */}

        <section className="py-14 lg:py-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                03.02
              </p>

              <h2 className="mt-2 font-sans text-2xl font-bold tracking-[-0.03em] text-[var(--blueprint)] sm:text-3xl">
                Project Index
              </h2>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--muted)]">
              Selected Projects
            </span>
          </div>

          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <ProjectEntry key={project.title} number={String(index + 1).padStart(2, "0")} {...project} />
            ))}
          </div>
        </section>

        {/* ===================================================
            PROJECT TYPES
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-14 lg:py-20">
          <div className="mb-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
              03.03
            </p>

            <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)]">
              Project Categories
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard
              number="01"
              title="Web Applications"
            />

            <CategoryCard
              number="02"
              title="Full Stack Systems"
            />

            <CategoryCard
              number="03"
              title="Mobile Applications"
            />

            <CategoryCard
              number="04"
              title="Automation & AI"
            />
          </div>
        </section>

        {/* ===================================================
            TECHNICAL STACK
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                03.04
              </p>

              <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)]">
                Technologies
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
                Technologies and tools used across selected projects.
              </p>
            </div>

            <div className="border border-[var(--border-strong)] bg-white/40 p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                  "Node.js",
                  "NestJS",
                  "PostgreSQL / PostGIS",
                  "Prisma",
                  "Docker",
                  "n8n",
                  "Supabase",
                  "React Native",
                  "Expo",
                  "SQLite",
                  "MongoDB",
                  "Blockchain",
                  "Qwen",
                  "Git",
                  "GitHub",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="border border-[var(--border-strong)] bg-[var(--blueprint-light)] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.08em] text-[var(--blueprint)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            FOOTER SHEET BAR
        ==================================================== */}

        <footer className="flex flex-col gap-4 border-t border-dashed border-[var(--border-strong)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span className="text-[var(--blueprint-blue)]">03</span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />

            <span>Projects / Archive</span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span>Drawing No. JU-003</span>
            <span>Revision A</span>
            <span>End of Sheet</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* =========================================================
   PROJECT ENTRY
========================================================= */

function ProjectEntry({
  number,
  category,
  title,
  description,
  stack,
  features,
  flowTitle,
  flow,
  liveUrl,
}: {
  number: string;
  category: string;
  title: string;
  description: string;
  stack: string;
  features: string;
  flowTitle: string;
  flow: string[];
  liveUrl?: string;
}) {
  return (
    <article className="group relative border border-[var(--border-strong)] bg-white/30 p-5 transition-colors duration-200 hover:border-[var(--blueprint-blue)] hover:bg-[var(--blueprint-light)] sm:p-6 lg:p-7">
      {/* Corner Marks */}
      <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-[var(--blueprint-blue)] opacity-0 transition-opacity group-hover:opacity-100" />

      <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-[var(--blueprint-blue)] opacity-0 transition-opacity group-hover:opacity-100" />

      <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-[var(--blueprint-blue)] opacity-0 transition-opacity group-hover:opacity-100" />

      <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-[var(--blueprint-blue)] opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="grid gap-5 lg:grid-cols-[70px_1fr_auto] lg:items-center lg:gap-8">
        {/* Number */}
        <div>
          <span className="font-mono text-2xl font-bold tracking-[-0.04em] text-[var(--blueprint-blue)]">
            {number}
          </span>
        </div>

        {/* Content */}
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {category}
          </p>

          <h3 className="mt-2 font-sans text-xl font-bold tracking-[-0.03em] text-[var(--blueprint)] sm:text-2xl">
            {title}
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            {description}
          </p>
          <p className="mt-4 text-sm font-medium leading-6 text-[var(--blueprint-blue)]">{stack}</p>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-[var(--blueprint-blue)] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">
              View live website &rarr;
            </a>
          )}
          <details className="mt-5" open={number === "01"}>
            <summary className="cursor-pointer text-sm font-semibold text-[var(--blueprint-blue)] focus-visible:outline-2 focus-visible:outline-offset-4">Explore {title}</summary>
            <h4 className="mt-5 text-sm font-semibold">Key capabilities</h4>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)]">{features}</p>
            <figure className="mt-5 border border-[var(--border-strong)] bg-[var(--blueprint-light)] p-4">
              <figcaption className="mb-3 text-sm font-semibold">{flowTitle}</figcaption>
              <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                {flow.map((step, index) => (
                  <li key={step} className="flex items-center gap-3 text-sm">
                    {index > 0 && <span aria-hidden="true">&rarr;</span>}
                    <span className="border border-[var(--border-strong)] bg-[var(--paper-white)] px-3 py-2">{step}</span>
                  </li>
                ))}
              </ol>
            </figure>
          </details>
        </div>

        {/* Technical Marker */}
        <div className="flex items-center gap-3 lg:flex-col lg:items-end">
          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[var(--muted)]">
            Project
          </span>

          <span className="h-px w-8 bg-[var(--border-strong)] lg:h-8 lg:w-px" />

          <span className="font-mono text-[8px] text-[var(--blueprint-blue)]">
            JU-{number}
          </span>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   CATEGORY CARD
========================================================= */

function CategoryCard({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="border border-[var(--border-strong)] bg-white/30 p-6">
      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--blueprint-blue)]">
        {number}
      </span>

      <h3 className="mt-8 font-sans text-lg font-bold tracking-[-0.03em] text-[var(--blueprint)]">
        {title}
      </h3>

      <div className="mt-6 h-px w-full bg-[var(--border-strong)]" />
    </div>
  );
}
