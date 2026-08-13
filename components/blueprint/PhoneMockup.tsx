export default function PhoneMockup() {
  return (
    <div className="relative w-[155px] sm:w-[180px]">
      {/* Dimension - Top */}
      <div className="absolute -top-8 left-0 right-0 flex items-center gap-2">
        <div className="h-px flex-1 bg-[var(--blueprint-grid)]" />

        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--blueprint-blue)]">
          390px
        </span>

        <div className="h-px flex-1 bg-[var(--blueprint-grid)]" />
      </div>

      {/* Dimension - Right */}
      <div className="absolute -right-9 top-0 bottom-0 hidden items-center sm:flex">
        <div className="relative flex h-full items-center">
          <div className="h-full w-px bg-[var(--blueprint-grid)]" />

          <span className="absolute -right-8 rotate-90 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--blueprint-blue)]">
            844px
          </span>
        </div>
      </div>

      {/* Phone */}
      <div className="relative rounded-[28px] border-2 border-[var(--blueprint-blue)] bg-[var(--blueprint-light)] p-2 shadow-[0_20px_40px_rgba(11,31,58,0.14)]">
        {/* Screen */}
        <div className="relative aspect-[390/844] overflow-hidden rounded-[20px] border border-[var(--blueprint-grid)] bg-[var(--paper-white)]">
          {/* Camera / Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-4 w-14 -translate-x-1/2 rounded-full bg-[var(--blueprint)]" />

          {/* Blueprint Grid */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(rgba(74, 144, 217, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(74, 144, 217, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "18px 18px",
            }}
          />

          {/* Mock Portfolio */}
          <div className="relative flex h-full flex-col px-5 pb-5 pt-8">
            {/* Navigation */}
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <span className="font-mono text-[7px] font-bold tracking-widest text-[var(--blueprint)]">
                JU
              </span>

              <span className="font-mono text-[6px] uppercase tracking-widest text-[var(--muted)]">
                MENU
              </span>
            </div>

            {/* Hero */}
            <div className="flex flex-1 flex-col justify-center">
              <p className="mb-3 font-mono text-[6px] uppercase tracking-widest text-[var(--blueprint-blue)]">
                Full Stack Developer
              </p>

              <h3 className="font-sans text-[2.3rem] font-extrabold leading-[0.82] tracking-[-0.07em] text-[var(--blueprint)]">
                JAHRED
                <br />
                <span className="text-[var(--blueprint-blue)]">UY</span>
              </h3>

              <div className="mt-5 h-px w-12 bg-[var(--blueprint-blue)]" />

              <p className="mt-4 text-[7px] leading-relaxed text-[var(--muted)]">
                Building clean, practical, and scalable digital experiences.
              </p>

              {/* Mini CTA */}
              <div className="mt-5 flex gap-2">
                <div className="bg-[var(--blueprint)] px-2.5 py-1.5 font-mono text-[5px] uppercase tracking-wider text-white">
                  Work →
                </div>

                <div className="border border-[var(--border-strong)] px-2.5 py-1.5 font-mono text-[5px] uppercase tracking-wider text-[var(--blueprint)]">
                  Contact
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-dashed border-[var(--border)] pt-3">
              <div className="flex justify-between font-mono text-[5px] uppercase tracking-widest text-[var(--muted)]">
                <span>01 / 05</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Label */}
      <div className="mt-7 flex items-center justify-center gap-2">
        <span className="h-px w-6 bg-[var(--blueprint-grid)]" />

        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--muted)]">
          Mobile / Responsive
        </span>

        <span className="h-px w-6 bg-[var(--blueprint-grid)]" />
      </div>

      {/* Corner Markers */}
      <span className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-[var(--blueprint-blue)]" />
      <span className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-[var(--blueprint-blue)]" />
      <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-[var(--blueprint-blue)]" />
      <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-[var(--blueprint-blue)]" />
    </div>
  );
}