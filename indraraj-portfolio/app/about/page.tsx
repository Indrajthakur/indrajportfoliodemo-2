import type { Metadata } from "next";
import { Panel } from "@/components/Panel";
import { PixelAvatar } from "@/components/PixelAvatar";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillDeck } from "@/components/SkillDeck";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

const attributes = [
  { k: "CLASS", v: profile.classTitle },
  { k: "LEVEL", v: String(profile.level) },
  { k: "HOME_BASE", v: "The terminal" },
  { k: "MAIN_QUEST", v: "Frontend mastery" },
];

const sideQuests = [
  "Taking JavaScript from decent to dangerous.",
  "Levelling Supabase up from 20 to something I'd brag about.",
  "Making Cravora look even tastier.",
  "Keeping that GitHub streak alive.",
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-12">
        <SectionHeader sec="01" title="CHARACTER_SHEET" caption="// About the player" />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <Panel title="PLAYER_CARD // 001">
              <div className="flex flex-col items-center gap-4 p-6">
                <div className="border border-line bg-black/50 p-3">
                  <PixelAvatar className="h-40 w-[8.5rem]" />
                </div>
                <p className="text-lg font-bold uppercase tracking-wider text-bone">{profile.name}</p>
                <dl className="w-full space-y-2 text-xs">
                  {attributes.map((a) => (
                    <div key={a.k} className="flex justify-between gap-4 border-b border-line pb-1.5">
                      <dt className="uppercase tracking-widest text-dim">{a.k}</dt>
                      <dd className="text-right text-acid">{a.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.08}>
            <Panel title="LORE.txt">
              <div className="space-y-4 p-6 text-sm leading-relaxed text-bone/90">
                <p>
                  I&apos;m Indraraj. I build web apps with HTML, CSS and JavaScript, and I&apos;m weirdly happy about the parts everyone else
                  skips, like responsive layouts that actually hold up on a phone.
                </p>
                <p>
                  About seven months in, I&apos;ve shipped a task manager wired to Supabase, a food discovery site, and a portfolio or two. Each
                  one taught me something the tutorials didn&apos;t.
                </p>
                <p>I learn by building, breaking, and then fixing things in public. The GitHub history is honest about that.</p>
                <p className="border-l-2 border-acid pl-4 text-bone">{profile.mission}</p>
              </div>
            </Panel>
          </Reveal>
        </div>
      </div>

      <section aria-labelledby="side-title" className="pt-24">
        <SectionHeader sec="02" title="SIDE_QUESTS" id="side-title" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {sideQuests.map((q, i) => (
            <li key={q}>
              <Reveal delay={i * 0.05} className="h-full">
                <Panel hover className="h-full">
                  <p className="p-5 text-sm text-bone/90">
                    <span className="mr-2 text-acid">◆</span>
                    {q}
                  </p>
                </Panel>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <SkillDeck />
    </>
  );
}
