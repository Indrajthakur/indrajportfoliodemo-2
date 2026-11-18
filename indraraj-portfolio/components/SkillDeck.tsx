import { rarityOf, skills, type Rarity } from "@/lib/data";
import { Panel } from "./Panel";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const RARITY_STYLE: Record<Rarity, { text: string; border: string; seg: string }> = {
  GOLD: { text: "text-[#ffcf40]", border: "border-[#ffcf40]/60", seg: "bg-[#ffcf40]" },
  SILVER: { text: "text-[#c9d1d9]", border: "border-[#c9d1d9]/60", seg: "bg-[#c9d1d9]" },
  BRONZE: { text: "text-[#d98b4a]", border: "border-[#d98b4a]/60", seg: "bg-[#d98b4a]" },
};

export function SkillDeck() {
  const sorted = [...skills].sort((a, b) => b.pwr - a.pwr);
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-32 pt-24">
      <SectionHeader sec="01" title="SKILL_DECK" id="skills-title" caption="// Hover to reveal pixel glow" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((s, i) => {
          const rarity = rarityOf(s.pwr);
          const st = RARITY_STYLE[rarity];
          const filled = Math.round(s.pwr / 10);
          return (
            <li key={s.name}>
              <Reveal delay={Math.min(i * 0.05, 0.4)}>
                <Panel hover className="h-full">
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-bold uppercase tracking-wider text-bone">{s.name}</h3>
                      <span className={`border px-1.5 py-0.5 text-[10px] font-bold tracking-widest ${st.text} ${st.border}`}>{rarity}</span>
                    </div>
                    <p className="mb-2 text-[11px] uppercase tracking-widest text-dim">PWR [{s.pwr}]/100</p>
                    <div className="mb-3 flex gap-1" role="img" aria-label={`Power ${s.pwr} out of 100`}>
                      {Array.from({ length: 10 }, (_, k) => (
                        <span key={k} className={`h-2 flex-1 ${k < filled ? st.seg : "bg-line"}`} />
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-bone/80">{s.blurb}</p>
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
