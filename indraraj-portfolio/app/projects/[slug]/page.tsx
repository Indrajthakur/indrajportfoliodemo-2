import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { Panel } from "@/components/Panel";
import { projects } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? p.name : "Project", description: p?.pitch };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article className="pt-12">
      <Link href="/projects" className="text-xs uppercase tracking-widest text-dim hover:text-acid">
        ← BACK_TO_PROJECTS
      </Link>
      <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-dim">
        SYS.LOC // {p.category} <span className="text-acid">◆</span>
      </p>
      <h1 className="glitch mt-2 text-3xl font-bold uppercase tracking-wider text-bone sm:text-5xl" data-text={p.name}>
        {p.name}
      </h1>
      <p className="mt-4 max-w-2xl text-base text-bone/90">{p.pitch}</p>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest">
        {p.live ? (
          <a href={p.live} target="_blank" rel="noopener noreferrer" className="glow-btn inline-flex items-center gap-2 bg-acid px-4 py-2.5 text-black">
            Live Demo <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : (
          <span className="border border-dashed border-mag px-4 py-2.5 text-mag">Live Demo // Coming Soon</span>
        )}
        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="border border-ice px-4 py-2.5 text-ice hover:bg-ice/10">
          Source Code
        </a>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Panel title="MISSION_BRIEF.md">
          <div className="space-y-4 p-6 text-sm leading-relaxed text-bone/90">
            {p.story.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </Panel>
        <div className="space-y-6">
          <Panel title="LOOT_DROPS">
            <ul className="space-y-2 p-5 text-sm text-bone/90">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-acid">◆</span>
                  {h}
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="TECH_STACK">
            <ul className="flex flex-wrap gap-2 p-5">
              {p.tags.map((t) => (
                <li key={t} className="border border-line px-2 py-0.5 text-xs text-dim">
                  {t}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </article>
  );
}
