import ProjectGallery from "@/components/ProjectGallery";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CrmCaseStudy from "@/components/CrmCaseStudy";
import PageSheet from "@/components/layout/PageSheet";
import { projects } from "../projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.title} | Jahred Uy` : "Project not found", description: project?.description };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <PageSheet title={project.title} sheet="003">
    <Link href="/portfolio" className="mt-6 inline-block text-sm text-[var(--blueprint-blue)] underline underline-offset-4">&larr; All projects</Link>
    <p className="mt-8 text-sm text-[var(--blueprint-blue)]">{project.category}</p>
    <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">{project.description}</p>
    <p className="mt-5 max-w-3xl text-sm leading-6 text-[var(--muted)]">{project.status}</p>
    <ProjectGallery slug={project.slug} />
    {project.slug === "sme-operations-crm" && <CrmCaseStudy />}
    <section className="py-10"><h2 className="text-2xl font-bold">Capabilities</h2><p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{project.features}</p></section>
    <section className="border-t border-dashed border-[var(--border-strong)] py-10"><h2 className="text-2xl font-bold">{project.flowTitle}</h2>
      <ol className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">{project.flow.map((step, index) => <li key={step} className="flex items-center gap-3">{index > 0 && <span aria-hidden="true">&rarr;</span>}<span className="border border-[var(--border-strong)] bg-white px-4 py-3 text-sm">{step}</span></li>)}</ol>
    </section>
    <section className="border-t border-dashed border-[var(--border-strong)] py-10"><h2 className="text-2xl font-bold">Technologies</h2><p className="mt-4 font-mono text-sm leading-7 text-[var(--blueprint-blue)]">{project.stack}</p>
      {"liveUrl" in project && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-semibold text-[var(--blueprint-blue)] underline underline-offset-4">View live website &rarr;</a>}
    </section>
  </PageSheet>;
}
