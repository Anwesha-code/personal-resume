import type { TimelineEntry } from "@/types";
import educationData from "@data/education.json";
import experienceData from "@data/experience.json";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Merge education + experience into a single chronological "journey" timeline.
 * Sorting is driven entirely by the numeric `order` field in the data files,
 * so adding a new education or experience entry just means picking the right
 * order number — no code changes required.
 */
export function getTimeline(): TimelineEntry[] {
  const education: TimelineEntry[] = educationData.items.map((item) => ({
    kind: "education",
    ...item,
  }));
  const experience: TimelineEntry[] = experienceData.items.map((item) => ({
    kind: "experience",
    ...item,
  }));

  return [...education, ...experience].sort((a, b) => a.order - b.order);
}

export function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
