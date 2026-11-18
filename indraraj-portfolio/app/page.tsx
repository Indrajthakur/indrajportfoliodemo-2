import Link from "next/link";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { QuestLog } from "@/components/QuestLog";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillDeck } from "@/components/SkillDeck";
import { SourceCode } from "@/components/SourceCode";
import { projects } from "@/lib/data";

export default function Home() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <Hero />
      <SkillDeck />
      <QuestLog />
      <section id="projects" aria-labelledby="proj-title" className="scroll-mt-32 pt-24">
        <SectionHeader sec="03" title="FEATURED_PROJECTS" id="proj-title" />
        <ProjectGrid projects={rest.slice(0, 4)} featured={featured} />
        <p className="mt-6 text-xs uppercase tracking-widest">
          <Link href="/projects" className="text-acid hover:underline">
            Browse all projects →
          </Link>
        </p>
      </section>
      <Achievements />
      <SourceCode />
      <Contact />
    </>
  );
}
