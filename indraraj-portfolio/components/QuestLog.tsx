import { coreQuest, quests } from "@/lib/data";
import { Panel } from "./Panel";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function CoreQuest() {
  return (
    <Reveal className="mb-10">
      <section aria-labelledby="core-quest-title" className="panel panel-hover overflow-hidden border-mag/50">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-mag/30 bg-mag/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-mag">
          <span>★ CORE_QUEST</span>
          <span>+{coreQuest.xp} XP</span>
        </div>
        <div className="p-5 sm:p-6">
          <h3 id="core-quest-title" className="text-xl font-bold uppercase tracking-wider text-bone sm:text-2xl">
            {coreQuest.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-bone/85">{coreQuest.summary}</p>

          <ul className="mt-5 flex flex-col gap-3 md:flex-row">
            {coreQuest.branches.map((b, i) => (
              <li key={b.name} className="min-w-0 flex-1 border border-line bg-black/30 p-4">
                <p className="mb-1 text-[10px] uppercase tracking-widest text-dim">BRANCH_0{i + 1}</p>
                <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-acid">{b.name}</h4>
                <p className="text-xs leading-relaxed text-bone/85">{b.text}</p>
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2">
            {coreQuest.tags.map((t) => (
              <li key={t} className="border border-mag/50 px-2 py-0.5 text-[11px] text-mag">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Reveal>
  );
}

export function QuestLog({ sec = "02", standalone = false }: { sec?: string; standalone?: boolean }) {
  return (
    <section id="experience" aria-labelledby="quest-title" className={`scroll-mt-32 ${standalone ? "pt-12" : "pt-24"}`}>
      <SectionHeader sec={sec} title="QUEST_LOG" id="quest-title" caption="// Experience, as a level-up timeline" />

      <CoreQuest />

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
                        <span className="min-w-0">{b}</span>
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
