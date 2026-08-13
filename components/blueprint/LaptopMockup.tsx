export default function LaptopMockup() {
  return (
    <div className="relative w-full max-w-3xl">
      {/* Dimension - Top */}
      <div className="absolute -top-8 left-0 right-0 flex items-center gap-3">
        <div className="h-px flex-1 bg-[var(--blueprint-grid)]" />

        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--blueprint-blue)]">
          1440px
        </span>

        <div className="h-px flex-1 bg-[var(--blueprint-grid)]" />
      </div>

      {/* Dimension - Left */}
      <div className="absolute -left-8 top-0 bottom-12 hidden items-center md:flex">
        <div className="relative flex h-full items-center">
          <div className="h-full w-px bg-[var(--blueprint-grid)]" />

          <span className="absolute -left-7 rotate-[-90deg] whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--blueprint-blue)]">
            820px
          </span>
        </div>
      </div>

      {/* Laptop */}
      <div className="relative mx-auto w-[92%]">
        {/* Screen Frame */}
        <div className="relative rounded-t-lg border-2 border-[var(--blueprint-blue)] bg-[var(--blueprint-light)] p-2 shadow-[0_20px_50px_rgba(11,31,58,0.12)]">
          {/* Camera */}
          <div className="absolute left-1/2 top-2 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--blueprint-blue)]" />

          {/* Screen */}
          <div className="relative aspect-[16/10] overflow-hidden border border-[var(--blueprint-grid)] bg-[var(--paper-white)]">
            {/* Screen Blueprint Grid */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(74, 144, 217, 0.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(74, 144, 217, 0.12) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
              }}
            />

            {/* Mock Portfolio Content */}
            <div className="relative flex h-full flex-col p-[6%]">
              {/* Mini Navigation */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                <div className="font-mono text-[6px] font-bold tracking-widest text-[var(--blueprint)] sm:text-[8px]">
                  JU
                </div>

                <div className="flex gap-3 font-mono text-[5px] uppercase tracking-widest text-[var(--muted)] sm:text-[7px]">
                  <span>About</span>
                  <span>Work</span>
                  <span>Contact</span>
                </div>
              </div>

              {/* Mini Hero */}
              <div className="flex flex-1 items-center">
                <div>
                  <p className="mb-2 font-mono text-[5px] uppercase tracking-widest text-[var(--blueprint-blue)] sm:text-[7px]">
                    Full Stack Developer
                  </p>

                  <h3 className="font-sans text-[clamp(1.2rem,4vw,3.5rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-[var(--blueprint)]">
                    JAHRED
                    <br />
                    <span className="text-[var(--blueprint-blue)]">UY</span>
                  </h3>

                  <div className="mt-3 h-px w-16 bg-[var(--blueprint-blue)] sm:mt-5 sm:w-24" />

                  <p className="mt-2 max-w-[180px] font-sans text-[5px] leading-relaxed text-[var(--muted)] sm:text-[7px]">
                    Building clean, practical, and scalable digital
                    experiences.
                  </p>
                </div>
              </div>

              {/* Mini Footer */}
              <div className="flex justify-between border-t border-dashed border-[var(--border)] pt-2 font-mono text-[4px] uppercase tracking-widest text-[var(--muted)] sm:text-[6px]">
                <span>Sheet 01 / 05</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="relative mx-auto h-4 w-[106%] -translate-x-[3%] border-x-2 border-b-2 border-[var(--blueprint-blue)] bg-[var(--blueprint-light)]">
          {/* Hinge */}
          <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 bg-[var(--blueprint-blue)]/40" />
        </div>

        {/* Front Edge */}
        <div className="relative mx-auto h-2 w-[110%] -translate-x-[5%] rounded-b-[50%] border-b-2 border-[var(--blueprint-blue)] bg-[var(--blueprint-light)]" />
      </div>

      {/* Bottom Dimension */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-[var(--blueprint-grid)]" />

        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)]">
          Drawing: LAPTOP-01
        </span>

        <span className="h-px w-10 bg-[var(--blueprint-grid)]" />
      </div>

      {/* Corner Markers */}
      <span className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-[var(--blueprint-blue)]" />
      <span className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-[var(--blueprint-blue)]" />
      <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-[var(--blueprint-blue)]" />
      <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-[var(--blueprint-blue)]" />
    </div>
  );
}