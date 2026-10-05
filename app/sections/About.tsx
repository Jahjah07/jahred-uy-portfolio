import ResumeDownloads from "@/components/ResumeDownloads";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" aria-labelledby="home-about" className="blueprint-sheet border-t border-[var(--border-strong)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--blueprint-blue)]">02 / About</p>
          <h2 id="home-about" className="text-3xl font-bold tracking-tight sm:text-4xl">From requirements to working software.</h2>
        </div>
        <div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
            I&apos;m a Full Stack Developer based in the Philippines, with two years of
            professional experience building web applications, APIs, and business automations.
            My work covers implementation, deployment, and ongoing support.
          </p>
          <ResumeDownloads />
          <Link href="/about" className="mt-6 inline-block font-semibold text-[var(--blueprint-blue)] underline underline-offset-4">
            View experience and capabilities &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
