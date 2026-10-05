export default function Footer() {
  return <footer className="border-t border-[var(--border-strong)] bg-[var(--paper)]">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="font-bold tracking-tight">JAHRED UY</p><p className="mt-1 text-sm text-[var(--muted)]">Full Stack Developer</p></div>
      <nav aria-label="Social links" className="flex flex-wrap gap-6 text-sm text-[var(--blueprint-blue)]">
        <a href="https://github.com/Jahjah07" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jahred-uy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:khikho107@gmail.com">Email</a>
      </nav>
      <p className="text-xs text-[var(--muted)]">Philippines · © {new Date().getFullYear()} Jahred Uy</p>
    </div>
  </footer>;
}
