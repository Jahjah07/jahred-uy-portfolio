"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuOpen = openPath === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--paper)]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Jahred Uy - Home"
        >
          <div className="flex h-10 w-10 items-center justify-center border border-[var(--blueprint-blue)] bg-[var(--blueprint-light)] font-mono text-sm font-bold text-[var(--blueprint)] transition-colors group-hover:bg-[var(--blueprint-blue)] group-hover:text-white">
            JU
          </div>

          <div className="hidden sm:block">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--muted)]">
              DEVELOPER
            </p>
            <p className="font-semibold tracking-tight text-[var(--blueprint)]">
              JAHRED UY
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
                  isActive
                    ? "text-[var(--blueprint-blue)]"
                    : "text-[var(--muted)] hover:text-[var(--blueprint)]"
                }`}
              >
                <span className="text-xs text-[var(--border-strong)]">
                  0{index + 1}
                </span>

                {item.name}

                <span
                  className={`absolute -bottom-2 left-0 h-px bg-[var(--blueprint-blue)] transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Status */}
        <div className="hidden items-center gap-2 lg:flex">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
            Available
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-[var(--border)] md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          ref={menuButton}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setOpenPath(menuOpen ? null : pathname)}
        >
          <span className="h-px w-5 bg-[var(--blueprint)]" />
          <span className="h-px w-5 bg-[var(--blueprint)]" />
          <span className="h-px w-3 self-end bg-[var(--blueprint)]" />
        </button>
      </div>
      {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" onKeyDown={(event) => { if (event.key === "Escape") { setOpenPath(null); menuButton.current?.focus(); } }} className="border-t border-[var(--border)] px-6 py-4 md:hidden">
        {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpenPath(null)} aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined} className="block py-3 text-sm font-semibold text-[var(--blueprint-blue)]">{item.name}</Link>)}
      </nav>}
    </header>
  );
}