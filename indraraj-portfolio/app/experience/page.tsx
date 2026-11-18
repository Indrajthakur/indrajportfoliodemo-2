import type { Metadata } from "next";
import { QuestLog } from "@/components/QuestLog";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return <QuestLog sec="01" standalone />;
}
