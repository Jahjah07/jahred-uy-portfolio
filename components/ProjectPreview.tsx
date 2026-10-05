import Image from "next/image";
import { screenshots } from "@/app/portfolio/screenshots";
export default function ProjectPreview({ slug }: { slug: string }) {
  const images = screenshots[slug];
  if (!images?.length) return null;
  const portrait = slug === "cozy-pantry";
  return <div className="mb-6 flex aspect-[16/10] items-center justify-center gap-3 overflow-hidden border border-[var(--border)] bg-[var(--blueprint-light)] p-2">
    {(portrait ? images.slice(0, 2) : images.slice(0, 1)).map(({ image, caption }) => <div key={caption} className={`relative h-full ${portrait ? "w-1/2" : "w-full"}`}>
      <Image src={image} alt={caption} fill sizes={portrait ? "(max-width: 768px) 45vw, 260px" : "(max-width: 768px) 90vw, 560px"} className="object-contain" />
    </div>)}
  </div>;
}
