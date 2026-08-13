import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--blueprint)] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-3">
          {/* Identity */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-white/30 font-mono text-sm font-bold">
                JU
              </div>

              <div>
                <p className="font-semibold tracking-tight">JAHRED UY</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/60">
              Building clean, practical, and scalable digital experiences
              through thoughtful design and modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              Navigation
            </p>

            <nav className="grid grid-cols-2 gap-3">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="font-mono text-[9px] text-white/30">
                    0{index + 1}
                  </span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              Get In Touch
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:your@email.com"
                className="block text-white/70 transition-colors hover:text-white"
              >
                your@email.com
              </a>

              <p className="font-mono text-xs text-white/40">
                PHILIPPINES
              </p>
            </div>
          </div>
        </div>

        {/* Blueprint Divider */}
        <div className="border-t border-dashed border-white/20" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
            © {new Date().getFullYear()} Jahred Uy
          </p>

          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
            <span>Sheet 01 / 05</span>
            <span>Scale 1:1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}