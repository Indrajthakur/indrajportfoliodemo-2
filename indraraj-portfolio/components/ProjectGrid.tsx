"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Category, Project } from "@/lib/data";
import { Reveal } from "./Reveal";

const FILTERS: ("All" | Category)[] = ["All", "Web App", "UI-UX", "Open Source"];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="mb-6 flex flex-wrap gap-2 text-xs uppercase tracking-widest">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`border px-3 py-1.5 transition-colors ${
              filter === f ? "border-acid bg-acid text-black" : "border-line text-dim hover:border-acid hover:text-acid"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} project{shown.length === 1 ? "" : "s"}
      </p>

      {shown.length === 0 ? (
        <p className="border border-dashed border-line p-8 text-center text-sm text-dim">
          No quests in this category yet. The dungeon is still being generated.
        </p>
      ) : (
        <ul className="grid gap-5 md:grid-cols-2">
          {shown.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={Math.min(i * 0.06, 0.3)} className="h-full">
                <article className="panel panel-hover flex h-full flex-col">
                  <div className="flex items-center gap-2 border-b border-line px-3 py-2 text-[11px] text-dim">
                    <span aria-hidden="true" className="flex gap-1">
                      <i className="block h-2 w-2 rounded-full bg-mag/80" />
                      <i className="block h-2 w-2 rounded-full bg-[#ffcf40]/80" />
                      <i className="block h-2 w-2 rounded-full bg-acid/80" />
                    </span>
                    <span className="min-w-0 flex-1 truncate border border-line bg-black/40 px-2 py-0.5">{p.domain}</span>
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name} live demo`} className="text-ice hover:text-acid">
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-[10px] uppercase tracking-widest text-mag">Soon</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-1 text-[10px] uppercase tracking-widest text-mag">{p.category}</p>
                    <h3 className="text-lg font-bold text-bone">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-bone/80">{p.pitch}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="border border-line px-2 py-0.5 text-[11px] text-dim">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/projects/${p.slug}`} className="mt-5 inline-block text-xs font-bold uppercase tracking-widest text-acid hover:underline">
                      View Details →
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
