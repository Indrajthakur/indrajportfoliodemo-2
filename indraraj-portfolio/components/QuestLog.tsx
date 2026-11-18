import { quests } from "@/lib/data";
import { Panel } from "./Panel";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function QuestLog({ sec = "02", standalone = false }: { sec?: string; standalone?: boolean }) {
  return (
    <section id="experience" aria-labelledby="quest-title" className={`scroll-mt-32 ${standalone ? "pt-12" : "pt-24"}`}>
      <SectionHeader sec={sec} title="QUEST_LOG" id="quest-title" caption="// Experience, as a level-up timeline" />
      <ol className="relative ml-2 border-l border-line pl-6 sm:pl-8">
        {quests.map((q, i) => (
          <li key={`${q.role}-${q.dates}`} className="relative pb-8">
            <span
              aria-hidden="true"
              className={`absolute -left-[31px] top-5 h-3 w-3 rotate-45 border sm:-left-[39px] ${
                q.state === "ACTIVE" ? "border-acid bg-acid shadow-[0_0_10px_#b6ff3c]" : "border-ice bg-ink"
              }`}
            />
            <Reveal delay={i * 0.06}>
              <Panel hover>
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-widest">
                    <span className={q.state === "ACTIVE" ? "text-acid" : "text-ice"}>
                      {q.state === "ACTIVE" ? "●" : "✓"} {q.state} +{q.xp} XP
                    </span>
                    <span className="text-dim">{q.dates}</span>
                  </div>
                  <h3 className="text-lg font-bold text-bone">{q.role}</h3>
                  <p className="mb-3 text-sm text-mag">@ {q.company}</p>
                  <ul className="mb-4 space-y-1.5 text-sm text-bone/85">
                    {q.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span aria-hidden="true" className="text-acid">
                          &gt;
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2">
                    {q.tags.map((t) => (
                      <li key={t} className="border border-line px-2 py-0.5 text-[11px] text-dim">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Panel>
            </Reveal>
          </li>
        ))}

        <li className="relative">
          <span aria-hidden="true" className="absolute -left-[31px] top-5 h-3 w-3 rotate-45 border border-dashed border-mag bg-ink sm:-left-[39px]" />
          <Reveal>
            <Panel className="border-dashed">
              <div className="p-5">
                <p className="mb-2 text-xs uppercase tracking-widest text-acid">● ACTIVE ??? XP</p>
                <h3 className="text-lg font-bold text-bone">Future</h3>
                <p className="text-sm text-dim">Next Adventure @ Coming Soon</p>
              </div>
            </Panel>
          </Reveal>
        </li>
      </ol>
    </section>
  );
}
