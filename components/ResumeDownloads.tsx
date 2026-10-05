export default function ResumeDownloads() {
  return <div className="mt-6 flex flex-wrap gap-4">
    <a href="/documents/Jahred-Uy-Resume.pdf" download className="inline-flex border border-[var(--blueprint-blue)] bg-[var(--blueprint-blue)] px-5 py-3 text-sm font-semibold text-white">Download résumé (PDF)</a>
    <a href="/documents/Jahred-Uy-CV.pdf" download className="inline-flex border border-[var(--blueprint-blue)] px-5 py-3 text-sm font-semibold text-[var(--blueprint-blue)]">Download CV (PDF)</a>
  </div>;
}
