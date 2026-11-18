import { githubUser, projects } from "@/lib/data";
import { Panel } from "./Panel";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function SourceCode() {
  return (
    <section id="source" aria-labelledby="source-title" className="scroll-mt-32 pt-24">
      <SectionHeader sec="05" title="SOURCE_CODE" id="source-title" caption="// Live contribution graph from GitHub" />
      <Reveal>
        <Panel title={`CONTRIBUTIONS // ${githubUser}`}>
          <div className="overflow-x-auto p-5">
            <a href={`https://github.com/${githubUser}`} target="_blank" rel="noopener noreferrer" className="block min-w-[640px] bg-white/95 p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://ghchart.rshah.org/2f8f2f/${githubUser}`}
                alt={`GitHub contribution chart for ${githubUser}`}
                loading="lazy"
                className="w-full"
              />
            </a>
          </div>
        </Panel>
      </Reveal>

      <Reveal delay={0.08}>
        <Panel title="REPOSITORIES" className="mt-5">
          <ul className="divide-y divide-line text-xs">
            {projects.map((p) => (
              <li key={p.slug} className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3">
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="font-bold text-ice hover:text-acid">
                  {p.name}
                </a>
                <span className="min-w-0 flex-1 text-bone/80">{p.tags.join(" · ")}</span>
                <span className="text-mag">{p.category}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </Reveal>
    </section>
  );
}
