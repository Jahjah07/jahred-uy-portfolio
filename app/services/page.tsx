export default function ServicesPage() {
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
                Sheet 04 / 05
              </p>

              <h1 className="font-sans text-5xl font-extrabold tracking-[-0.06em] text-[var(--blueprint)] sm:text-6xl lg:text-7xl">
                Services
              </h1>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]">
              <span>Drawing JU-004</span>
              <span>Development Services</span>
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
                04.01
              </span>

              <span className="h-px w-16 bg-[var(--border-strong)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                What I Do
              </span>
            </div>

            <h2 className="max-w-4xl font-sans text-3xl font-bold leading-tight tracking-[-0.045em] text-[var(--blueprint)] sm:text-4xl lg:text-5xl">
              Turning ideas and requirements into{" "}
              <span className="text-[var(--blueprint-blue)]">
                functional, responsive, and maintainable applications.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              From frontend interfaces to backend systems, I can work across
              the development process to build practical digital solutions.
            </p>
          </div>

          {/* Service Count */}
          <div className="flex items-center gap-4 lg:pb-1">
            <div className="h-12 w-px bg-[var(--border-strong)]" />

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--muted)]">
                Service Areas
              </p>

              <p className="mt-1 font-mono text-sm font-bold text-[var(--blueprint)]">
                05 Categories
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================
            SERVICES INDEX
        ==================================================== */}

        <section className="py-14 lg:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                04.02
              </p>

              <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)]">
                Service Index
              </h2>
            </div>

            <p className="max-w-sm font-mono text-[8px] uppercase leading-5 tracking-[0.15em] text-[var(--muted)]">
              Development capabilities and areas of specialization.
            </p>
          </div>

          <div className="space-y-4">
            <ServiceCard
              number="01"
              title="Full Stack Web Development"
              description="End-to-end web application development covering frontend interfaces, backend logic, APIs, authentication, and database integration."
              technologies={[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
              ]}
            />

            <ServiceCard
              number="02"
              title="Frontend Development"
              description="Responsive and component-based interfaces designed to provide clear user experiences across desktop, tablet, and mobile devices."
              technologies={[
                "React",
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
              ]}
            />

            <ServiceCard
              number="03"
              title="Backend & API Development"
              description="Backend functionality, REST APIs, authentication, data handling, and integrations for web applications."
              technologies={[
                "Node.js",
                "PHP",
                "Laravel",
                "REST APIs",
              ]}
            />

            <ServiceCard
              number="04"
              title="Responsive UI Development"
              description="Converting designs and requirements into responsive interfaces with reusable components and consistent visual systems."
              technologies={[
                "React",
                "Tailwind CSS",
                "Responsive Design",
              ]}
            />

            <ServiceCard
              number="05"
              title="Maintenance & Optimization"
              description="Improving existing applications through troubleshooting, refactoring, performance optimization, updates, and ongoing support."
              technologies={[
                "Debugging",
                "Optimization",
                "Refactoring",
                "Git",
              ]}
            />
          </div>
        </section>

        {/* ===================================================
            DEVELOPMENT PROCESS
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-14 lg:py-20">
          <div className="mb-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
              04.03
            </p>

            <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)] sm:text-4xl">
              Development Process
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ProcessCard
              number="01"
              title="Understand"
              description="Review requirements, goals, and project constraints."
            />

            <ProcessCard
              number="02"
              title="Plan"
              description="Define the structure, technologies, and implementation approach."
            />

            <ProcessCard
              number="03"
              title="Build"
              description="Develop the interface, functionality, integrations, and core features."
            />

            <ProcessCard
              number="04"
              title="Refine"
              description="Test, troubleshoot, optimize, and prepare the application for deployment."
            />
          </div>
        </section>

        {/* ===================================================
            TECHNOLOGY STACK
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                04.04
              </p>

              <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)]">
                Technology Stack
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
                A selection of technologies and tools I work with across
                different projects.
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
                  "PHP",
                  "Laravel",
                  "MySQL",
                  "Firebase",
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
            CTA
        ==================================================== */}

        <section className="border-t border-dashed border-[var(--border-strong)] py-14 lg:py-20">
          <div className="relative overflow-hidden border-2 border-[var(--blueprint-blue)] bg-[var(--paper-white)] p-8 sm:p-10 lg:p-14">
            {/* Blueprint Crosshair */}
            <div className="pointer-events-none absolute right-8 top-8 hidden h-20 w-20 opacity-40 sm:block">
              <span className="absolute left-1/2 top-0 h-full w-px bg-[var(--blueprint-grid)]" />

              <span className="absolute left-0 top-1/2 h-px w-full bg-[var(--blueprint-grid)]" />

              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 border border-[var(--blueprint-blue)]" />
            </div>

            <div className="relative max-w-2xl">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)]">
                04.05 / Next Step
              </p>

              <h2 className="mt-4 font-sans text-3xl font-bold tracking-[-0.04em] text-[var(--blueprint)] sm:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                Let&apos;s discuss what you&apos;re building and how I can help
                turn the idea into a working solution.
              </p>

              <a
                href="/contact"
                className="group mt-7 inline-flex items-center gap-4 border border-[var(--blueprint)] px-6 py-3.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--blueprint)] transition-all duration-200 hover:bg-[var(--blueprint)] hover:text-white"
              >
                <span>Start a Conversation</span>

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================
            FOOTER SHEET BAR
        ==================================================== */}

        <footer className="flex flex-col gap-4 border-t border-dashed border-[var(--border-strong)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span className="text-[var(--blueprint-blue)]">04</span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />

            <span>Services / Development</span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span>Drawing No. JU-004</span>
            <span>Revision A</span>
            <span>End of Sheet</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  number,
  title,
  description,
  technologies,
}: {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}) {
  return (
    <article className="group relative border border-[var(--border-strong)] bg-white/30 p-5 transition-all duration-200 hover:border-[var(--blueprint-blue)] hover:bg-[var(--blueprint-light)] sm:p-7">
      {/* Corner Marks */}
      <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-[var(--blueprint-blue)] opacity-0 transition-opacity group-hover:opacity-100" />

      <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-[var(--blueprint-blue)] opacity-0 transition-opacity group-hover:opacity-100" />

      <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-[var(--blueprint-blue)] opacity-0 transition-opacity group-hover:opacity-100" />

      <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-[var(--blueprint-blue)] opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="grid gap-6 lg:grid-cols-[70px_1fr_auto] lg:items-center lg:gap-8">
        {/* Number */}
        <span className="font-mono text-2xl font-bold tracking-[-0.04em] text-[var(--blueprint-blue)]">
          {number}
        </span>

        {/* Content */}
        <div>
          <h3 className="font-sans text-xl font-bold tracking-[-0.03em] text-[var(--blueprint)] sm:text-2xl">
            {title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="border border-[var(--border-strong)] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.08em] text-[var(--muted)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Marker */}
        <div className="flex items-center gap-3 lg:flex-col lg:items-end">
          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[var(--muted)]">
            Service
          </span>

          <span className="h-px w-8 bg-[var(--border-strong)] lg:h-8 lg:w-px" />

          <span className="font-mono text-[8px] text-[var(--blueprint-blue)]">
            S-{number}
          </span>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessCard({
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

      <h3 className="mt-8 font-sans text-xl font-bold tracking-[-0.03em] text-[var(--blueprint)]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
        {description}
      </p>

      <div className="mt-6 h-px bg-[var(--border-strong)]" />
    </div>
  );
}