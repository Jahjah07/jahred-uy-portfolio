import ProjectPreview from "@/components/ProjectPreview";
import Link from "next/link";
import PageSheet from "@/components/layout/PageSheet";
import { projects } from "./projects";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects | Jahred Uy", description: "Selected business systems, automation, GIS, and mobile projects by Jahred Uy." };

export default function ProjectsPage() {
  const featured = [projects[0], projects[2], projects[1], projects[3]];
  return <PageSheet title="Selected work" sheet="003">
    <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">Business systems, automation, and mobile applications built around practical problems.</p>
    <section aria-label="Featured projects" className="grid gap-x-12 gap-y-10 py-12 md:grid-cols-2">
      {featured.map((project) => <article key={project.slug} className="border-t border-[var(--border-strong)] pt-6">
        <ProjectPreview slug={project.slug} />
        <p className="text-sm text-[var(--blueprint-blue)]">{project.category}</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">{project.description}</p>
        <p className="mt-4 font-mono text-xs leading-6 text-[var(--blueprint-blue)]">{project.stack.split(" · ").filter((_, index) => index < 4).join(" · ")}</p>
        <Link href={`/portfolio/${project.slug}`} className="mt-6 inline-block font-semibold text-[var(--blueprint-blue)] underline underline-offset-4">View project &rarr;</Link>
      </article>)}
    </section>
    <section className="border-t border-dashed border-[var(--border-strong)] py-10">
      <h2 className="text-2xl font-bold">More work</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">{projects.slice(4).map((project) => <article key={project.slug}>
        <ProjectPreview slug={project.slug} />
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.category}</p>
        <Link href={`/portfolio/${project.slug}`} className="mt-4 inline-block text-sm font-semibold text-[var(--blueprint-blue)] underline underline-offset-4">View project &rarr;</Link>
        {"liveUrl" in project && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ml-4 inline-block text-sm text-[var(--blueprint-blue)] underline underline-offset-4">Live site &rarr;</a>}
      </article>)}</div>
    </section>
  </PageSheet>;
}
