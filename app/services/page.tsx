import Link from "next/link";
import type { Metadata } from "next";
import PageSheet from "@/components/layout/PageSheet";

export const metadata: Metadata = {
  title: "Services | Jahred Uy",
  description: "Business websites, custom web applications, and workflow automation by Jahred Uy. Explore deliverables and related projects.",
};

const services = [
  {
    title: "Business websites",
    description: "Give potential clients a clear picture of your business, your work, and how to reach you. I build responsive websites for professionals and service businesses.",
    deliverables: [
      "Pages for your services, experience, and portfolio",
      "Responsive layouts and accessible navigation",
      "Contact options, page metadata, and deployment setup",
    ],
    stack: "Next.js · React · TypeScript · Tailwind CSS",
    project: "April Rose Alpha Portfolio",
    href: "/portfolio/april-rose-alpha",
    example: "A website presenting virtual assistance services and creative work.",
  },
  {
    title: "Custom web applications",
    description: "Bring your team's records and everyday work into one application. I develop interfaces, APIs, and databases around the way your business operates.",
    deliverables: [
      "Dashboards, forms, and tools for managing business records",
      "Authentication and role-based access",
      "APIs, database integration, and activity tracking",
    ],
    stack: "Next.js · NestJS · PostgreSQL · Prisma",
    project: "SME Operations CRM",
    href: "/portfolio/sme-operations-crm",
    example: "A platform connecting customer records, sales pipelines, and business workflows.",
  },
  {
    title: "Workflow automation",
    description: "Connect the tools you already use and reduce repetitive data entry. I build workflows for booking requests, approvals, scheduling, and follow-up communication.",
    deliverables: [
      "n8n workflows and webhook integrations",
      "Google Calendar, Sheets, and email connections",
      "Validation, duplicate checks, and approval steps",
    ],
    stack: "n8n · Webhooks · JavaScript · Google integrations",
    project: "DentalFlow",
    href: "/portfolio/dentalflow",
    example: "A clinic appointment automation prototype demonstrating booking and approval workflows.",
  },
];

export default function ServicesPage() {
  return (
    <PageSheet title="Services" sheet="004">
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        Websites that present your business, applications that support your team,
        and automations that connect your everyday tools.
      </p>
      <div className="py-8">
        {services.map((service) => (
          <section key={service.title} className="grid gap-8 border-b border-[var(--border)] py-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{service.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">{service.description}</p>
              <h3 className="mt-6 font-semibold">What I can deliver</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--muted)]">
                {service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
              </ul>
              <p className="mt-6 text-sm leading-6 text-[var(--muted)]">Tools: {service.stack}</p>
            </div>
            <div className="border-l border-[var(--border-strong)] pl-6 md:self-start">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Related project</h3>
              <Link href={service.href} className="mt-4 inline-block text-lg font-semibold text-[var(--blueprint-blue)] underline underline-offset-4">
                {service.project} &rarr;
              </Link>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.example}</p>
            </div>
          </section>
        ))}
      </div>
      <section className="pb-8 pt-4">
        <h2 className="text-2xl font-bold">Have a project in mind?</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
          Tell me what you need, who will use it, and the tools you currently work with.
          We can discuss the scope and a practical starting point.
        </p>
        <Link href="/contact" className="mt-6 inline-block border border-[var(--blueprint-blue)] bg-[var(--blueprint-blue)] px-5 py-3 font-semibold text-white transition-colors hover:bg-[var(--blueprint)]">
          Discuss your project &rarr;
        </Link>
      </section>
    </PageSheet>
  );
}
