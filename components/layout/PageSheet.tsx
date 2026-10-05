import type { ReactNode } from "react";

export default function PageSheet({ title, sheet, children }: { title: string; sheet: string; children: ReactNode }) {
  return <div className="blueprint-sheet"><div className="relative mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:py-14">
    <header className="border-b border-dashed border-[var(--border-strong)] pb-8">
      <p className="mb-4 font-mono text-xs text-[var(--blueprint-blue)]">JU-{sheet} / SHEET {sheet}</p>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
    </header>{children}
  </div></div>;
}
