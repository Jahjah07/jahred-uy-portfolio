import Link from "next/link";
import LaptopMockup from "@/components/blueprint/LaptopMockup";
import PhoneMockup from "@/components/blueprint/PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[var(--paper)]">
      {/* =====================================================
          BLUEPRINT BACKGROUND
      ====================================================== */}

      {/* Fine Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74, 144, 217, 0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 144, 217, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Major Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74, 144, 217, 0.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 144, 217, 0.13) 1px, transparent 1px)
          `,
          backgroundSize: "160px 160px",
        }}
      />

      {/* =====================================================
          BLUEPRINT DECORATION
      ====================================================== */}

      {/* Top Right Crosshair */}
      <div className="pointer-events-none absolute right-8 top-10 hidden h-20 w-20 md:block">
        <span className="absolute left-1/2 top-0 h-full w-px bg-[var(--blueprint-grid)]/40" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-[var(--blueprint-grid)]/40" />

        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--blueprint-blue)] bg-[var(--paper)]" />
      </div>

      {/* Bottom Left Crosshair */}
      <div className="pointer-events-none absolute bottom-20 left-8 hidden h-12 w-12 lg:block">
        <span className="absolute left-1/2 top-0 h-full w-px bg-[var(--blueprint-grid)]/30" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-[var(--blueprint-grid)]/30" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        {/* ===================================================
            TECHNICAL HEADER
        ==================================================== */}

        <div className="flex flex-col gap-4 border-b border-dashed border-[var(--border-strong)] pb-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Left Metadata */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-[10px]">
            <span>
              Project{" "}
              <span className="text-[var(--blueprint)]">/ JAHRED UY</span>
            </span>

            <span className="hidden h-3 w-px bg-[var(--border-strong)] sm:block" />

            <span>
              Discipline{" "}
              <span className="text-[var(--blueprint)]">
                / Software Development
              </span>
            </span>
          </div>

          {/* Right Metadata */}
          <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-[10px]">
            <span>JU-001</span>
            <span>Sheet 01 / 05</span>
            <span>Scale 1:1</span>
          </div>
        </div>

        {/* ===================================================
            HERO CONTENT
        ==================================================== */}

        <div className="flex flex-1 items-center py-14 sm:py-16 lg:py-10">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="relative z-10">
              {/* Status */}
              <div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--blueprint-blue)] sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                Available for opportunities
              </div>

              {/* Eyebrow */}
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
                Full Stack Developer
              </p>

              {/* Name */}
              <h1 className="font-sans text-[clamp(4.5rem,10vw,8.5rem)] font-extrabold leading-[0.78] tracking-[-0.075em] text-[var(--blueprint)]">
                JAHRED
                <br />
                <span className="text-[var(--blueprint-blue)]">UY</span>
              </h1>

              {/* Construction Line */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-16 bg-[var(--blueprint-blue)]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Developer / Engineer
                </span>
              </div>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                I build modern web applications that are clean, responsive,
                and designed to solve real problems.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center justify-center gap-4 border border-[var(--blueprint)] bg-[var(--blueprint)] px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition-all duration-200 hover:border-[var(--blueprint-blue)] hover:bg-[var(--blueprint-blue)]"
                >
                  <span>View Projects</span>

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-[var(--border-strong)] bg-white/50 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--blueprint)] backdrop-blur-sm transition-all duration-200 hover:border-[var(--blueprint)] hover:bg-[var(--blueprint-light)]"
                >
                  Contact Me
                </Link>
              </div>

              {/* Technical Coordinates */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]">
                <span>Grid A-01</span>
                <span>Web / Mobile</span>
                <span>2026</span>
              </div>
            </div>

            {/* =================================================
                RIGHT DEVICE COMPOSITION
            ================================================== */}

            <div className="relative flex min-h-[400px] items-center justify-center sm:min-h-[440px] lg:min-h-[480px]">
              {/* Drawing Label */}
              <div className="absolute left-0 top-0 hidden font-mono text-[8px] uppercase leading-5 tracking-[0.16em] text-[var(--muted)] xl:block">
                <span className="text-[var(--blueprint-blue)]">
                  Drawing 01
                </span>
                <br />
                Interface / Responsive
              </div>

              {/* Laptop */}
              <div className="relative z-10 w-full max-w-xl">
                <LaptopMockup />
              </div>

              {/* Phone */}
              <div className="absolute bottom-[-30px] right-[3%] z-20 sm:right-[7%] lg:bottom-[-40px]">
                <PhoneMockup />
              </div>

              {/* Device Crosshair */}
              <div className="pointer-events-none absolute right-[18%] top-[12%] hidden h-20 w-20 lg:block">
                <span className="absolute left-1/2 top-0 h-full w-px bg-[var(--blueprint-grid)]/30" />

                <span className="absolute left-0 top-1/2 h-px w-full bg-[var(--blueprint-grid)]/30" />

                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 border border-[var(--blueprint-blue)]" />
              </div>

              {/* Vertical Technical Line */}
              <div className="pointer-events-none absolute bottom-0 right-0 hidden h-32 w-px bg-[var(--blueprint-grid)]/40 lg:block">
                <span className="absolute -right-2 top-0 h-1 w-1 bg-[var(--blueprint-blue)]" />
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            SCROLL INDICATOR
        ==================================================== */}

        <Link
          href="#about"
          className="group absolute bottom-20 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--blueprint-blue)] sm:flex"
        >
          {/* Arrow */}
          <span className="text-sm transition-transform duration-200 group-hover:translate-y-1">
            ↓
          </span>

          {/* Label */}
          <span>Scroll to explore</span>

          {/* Blueprint Line */}
          <span className="h-px w-16 bg-[var(--border-strong)] transition-all duration-200 group-hover:w-24 group-hover:bg-[var(--blueprint-blue)]" />
        </Link>

        {/* ===================================================
            BOTTOM TECHNICAL BAR
        ==================================================== */}

        <div className="flex flex-col gap-4 border-t border-dashed border-[var(--border-strong)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Section Indicator */}
          <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span className="text-[var(--blueprint-blue)]">01</span>

            <span className="h-px w-10 bg-[var(--border-strong)]" />

            <span>Introduction</span>
          </div>

          {/* Drawing Information */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[9px]">
            <span>Drawing No. JU-001</span>
            <span>Revision A</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}