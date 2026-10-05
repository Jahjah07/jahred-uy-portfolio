import Image from "next/image";
import { screenshots } from "@/app/portfolio/screenshots";
export default function ProjectGallery({ slug }: { slug: string }) {
  const images = screenshots[slug];
  if (!images?.length) return null;
  const portrait = slug === "cozy-pantry";
  return <section className="py-10" aria-labelledby="project-screenshots">
    <h2 id="project-screenshots" className="text-2xl font-bold">Screenshots</h2>
    <p className="mt-3 text-sm text-[var(--muted)]">Select a screenshot to view it at full size.</p>
    <div className={`mt-6 grid gap-6 ${portrait ? "grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2"}`}>
      {images.map(({ image, caption }) => <figure key={caption}>
        <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size screenshot: ${caption}`} className="block border border-[var(--border)] bg-white">
          <Image src={image} alt={caption} sizes={portrait ? "(max-width: 1024px) 45vw, 270px" : "(max-width: 768px) 90vw, 560px"} className="h-auto w-full" />
        </a>
        <figcaption className="mt-3 text-sm leading-6 text-[var(--muted)]">{caption}</figcaption>
      </figure>)}
    </div>
  </section>;
}
