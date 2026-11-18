import Link from "next/link";
import { achievements } from "@/lib/data";
import { Panel } from "./Panel";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="ach-title" className="scroll-mt-32 pt-24">
      <SectionHeader sec="04" title="ACHIEVEMENTS_UNLOCKED" id="ach-title" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => {
          const external = a.href.startsWith("http");
          const linkClass = "text-xs font-bold uppercase tracking-widest text-acid hover:underline";
          return (
            <li key={a.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <Panel hover className="h-full">
                  <div className="flex h-full flex-col p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="border border-ice px-2 py-0.5 text-xs font-bold text-ice">{a.badge}</span>
                      <span aria-hidden="true" className="text-lg">
                        🏆
                      </span>
                    </div>
                    <h3 className="font-bold uppercase tracking-wider text-bone">{a.title}</h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-bone/80">{a.line}</p>
                    <div className="mt-4 flex flex-col items-start gap-1 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">
                      {external ? (
                        <a href={a.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {a.link}
                        </a>
                      ) : (
                        <Link href={a.href} className={linkClass}>
                          {a.link}
                        </Link>
                      )}
                      <span className="text-[11px] text-dim">{a.year}</span>
                    </div>
                  </div>
                </Panel>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
