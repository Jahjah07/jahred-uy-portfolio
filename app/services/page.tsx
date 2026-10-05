import Link from "next/link";
import type { Metadata } from "next";
import PageSheet from "@/components/layout/PageSheet";
export const metadata: Metadata = { title: "Services | Jahred Uy", description: "Full stack development, frontend engineering, backend APIs, and business automation." };
const services = [
  ["Full Stack Development", "Web applications from responsive interfaces to APIs, authentication, and databases.", "React · Next.js · TypeScript · NestJS"],
  ["Frontend Engineering", "Accessible, responsive, component-driven interfaces for web applications.", "React · TypeScript · Tailwind CSS"],
  ["Backend & Automation", "APIs, database integrations, and automated business workflows.", "NestJS · PostgreSQL · n8n · REST APIs"],
];
export default function ServicesPage() { return <PageSheet title="Services" sheet="004">
  <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">Development support for web applications and business workflows.</p>
  <div className="py-8">{services.map(([title, description, stack]) => <section key={title} className="border-b border-[var(--border)] py-8"><h2 className="text-2xl font-bold">{title}</h2><p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">{description}</p><p className="mt-4 font-mono text-xs leading-6 text-[var(--blueprint-blue)]">{stack}</p></section>)}</div>
  <Link href="/contact" className="mb-8 inline-block border border-[var(--blueprint-blue)] bg-[var(--blueprint-blue)] px-5 py-3 font-semibold text-white">Discuss an opportunity &rarr;</Link>
</PageSheet>; }
