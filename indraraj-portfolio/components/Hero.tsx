import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { Counter } from "./Counter";
import { PixelAvatar } from "./PixelAvatar";
import { Panel } from "./Panel";
import { Reveal } from "./Reveal";
import { TypeText } from "./TypeText";
import { XPBar } from "./XPBar";

export function Hero() {
  const s = profile.stats;
  const stats = [
    { label: "Total Experience", value: s.months, suffix: " months" },
    { label: "Projects", value: s.projects, suffix: "+" },
    { label: "XP Earned", value: s.xp },
    { label: "Internships", value: s.internships },
    { label: "GitHub Streak", value: s.streak, suffix: " days" },
  ];

  return (
    <section aria-labelledby="hero-title" className="grid gap-10 pt-12 lg:grid-cols-[1.3fr_1fr] lg:pt-20">
      <div>
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-acid">
          <TypeText text="// SYSTEM_BOOT :: PORTFOLIO_v3.0 :: READY" />
        </p>
        <h1 id="hero-title" className="glitch text-4xl font-bold tracking-tight text-bone sm:text-6xl" data-text="Hi, I'm Indraraj!">
          Hi, I&apos;m Indraraj!
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/90 sm:text-lg">{profile.heroLine}</p>

        <Reveal delay={0.1}>
          <Panel title="CURRENT_MISSION" className="mt-8 max-w-xl">
            <div className="p-4 text-sm leading-relaxed">
              <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-ice">Current_Mission</p>
              <p className="text-bone/90">{profile.mission}</p>
            </div>
          </Panel>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-widest">
          <Link href="/projects" className="glow-btn inline-flex items-center gap-2 bg-acid px-5 py-3 text-black transition-transform hover:-translate-y-0.5">
            VIEW_WORK
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-ice px-5 py-3 text-ice transition-colors hover:bg-ice/10"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            DOWNLOAD_CV
          </a>
          <a href="#contact" className="inline-flex items-center gap-1 px-2 py-3 text-bone transition-colors hover:text-acid">
            Let&apos;s Connect <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <Reveal delay={0.15}>
        <Panel title="PLAYER_CARD // 001" className="w-full">
          <div className="p-5">
            <div className="flex items-center gap-4">
              <div className="border border-line bg-black/50 p-2">
                <PixelAvatar className="h-24 w-20" />
              </div>
              <div>
                <p className="text-lg font-bold uppercase tracking-wider text-bone">{profile.name}</p>
                <p className="mt-1 text-xs text-acid">LVL.{profile.level}</p>
                <p className="text-xs uppercase tracking-widest text-mag">{profile.classTitle}</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-1 flex justify-between text-[10px] uppercase tracking-widest text-dim">
                <span>XP</span>
                <span>
                  {profile.xp}/{profile.xpMax}
                </span>
              </div>
              <XPBar value={profile.xp} max={profile.xpMax} label="Character XP" />
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-px border border-line bg-line text-xs">
              {stats.map((st, i) => (
                <div key={st.label} className={`bg-panel p-3 ${i === stats.length - 1 ? "col-span-2" : ""}`}>
                  <dt className="text-[10px] uppercase tracking-widest text-dim">{st.label}</dt>
                  <dd className="mt-1 text-lg font-bold text-acid">
                    <Counter to={st.value} suffix={st.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Panel>
      </Reveal>
    </section>
  );
}
