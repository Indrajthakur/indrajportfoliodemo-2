import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="pt-12">
      <SectionHeader sec="01" title="SOURCE_CODE" caption="// Everything shipped so far" />
      <ProjectGrid projects={projects} />
    </div>
  );
}
