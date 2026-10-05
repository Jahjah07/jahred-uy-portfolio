import ResumeDownloads from "@/components/ResumeDownloads";
import type { Metadata } from "next";
import PageSheet from "@/components/layout/PageSheet";
export const metadata: Metadata = { title: "About | Jahred Uy", description: "Experience and technical capabilities of Jahred Uy, Full Stack Developer." };
const capabilities = [
  ["Frontend", "React · Next.js · TypeScript · Tailwind CSS"],
  ["Backend", "Node.js · NestJS · Laravel · REST APIs"],
  ["Data", "PostgreSQL · MySQL · Supabase · Prisma"],
  ["Automation", "n8n · Webhooks · Google integrations"],
  ["Mobile & tools", "React Native · Expo · SQLite · Git · Docker"],
];
export default function AboutPage() { return <PageSheet title="About me" sheet="002">
  <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">I&apos;m a Full Stack Developer with 2 years of professional experience building responsive applications, APIs, integrations, and business systems. I work from requirements and implementation through deployment and support.</p>
  <ResumeDownloads />
  <div className="grid gap-12 py-12 md:grid-cols-2">
    <section><h2 className="text-2xl font-bold">Experience</h2>
      <div className="mt-6 space-y-8">
        <article><p className="font-mono text-xs text-[var(--blueprint-blue)]">2025 to 2026</p><h3 className="mt-2 text-xl font-semibold">Kalipto Construction</h3><p className="mt-2 text-sm text-[var(--muted)]">Full Stack Developer</p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[var(--muted)]">
            <li>Developed and maintained 5+ responsive web applications with Next.js, React, TypeScript, and Tailwind CSS.</li>
            <li>Integrated authentication, REST APIs, and cookie-based session management.</li>
            <li>Built n8n workflows for lead management, follow-ups, data synchronization, email notifications, and Google Sheets integrations.</li>
            <li>Configured PWA support and supported projects from requirements through deployment and production troubleshooting.</li>
          </ul>
        </article>
        <article><p className="font-mono text-xs text-[var(--blueprint-blue)]">2024 to 2025</p><h3 className="mt-2 text-xl font-semibold">Bluebeans System Inc.</h3><p className="mt-2 text-sm text-[var(--muted)]">Full Stack Developer</p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[var(--muted)]">
            <li>Developed and maintained two responsive applications with React and Tailwind CSS in a six-person team.</li>
            <li>Reduced page load time by 30% through optimization and debugging.</li>
            <li>Implemented reusable components, improving development speed by 25%.</li>
            <li>Contributed to feature development, planning, and sprint reviews.</li>
          </ul>
        </article>
      </div>
    </section>
    <section><h2 className="text-2xl font-bold">Capabilities</h2><dl className="mt-6 space-y-5">{capabilities.map(([label, value]) => <div key={label}><dt className="font-semibold">{label}</dt><dd className="mt-1 text-sm leading-6 text-[var(--muted)]">{value}</dd></div>)}</dl></section>
  </div>
  <section className="border-t border-dashed border-[var(--border-strong)] py-10"><h2 className="text-2xl font-bold">Education</h2><p className="mt-4 font-semibold">Bachelor of Science in Computer Science</p><p className="mt-2 text-sm text-[var(--muted)]">Negros Oriental State University · 2021 to 2025</p></section>
</PageSheet>; }
