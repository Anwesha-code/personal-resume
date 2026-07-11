"use client";

import { useMemo, useState } from "react";
import skillsData from "@data/skills.json";
import type { Skill } from "@/types";
import PixelWindow from "@/components/ui/PixelWindow";
import SectionHeading from "@/components/ui/SectionHeading";
import Modal from "@/components/ui/Modal";

const levelDots: Record<Skill["level"], number> = { Beginner: 1, Intermediate: 2, Advanced: 3 };

export default function SkillsSection() {
  const [category, setCategory] = useState<string>("all");
  const [selected, setSelected] = useState<Skill | null>(null);

  const skills = skillsData.items as Skill[];
  const filtered = useMemo(
    () => (category === "all" ? skills : skills.filter((s) => s.category === category)),
    [category, skills]
  );

  return (
    <section id="skills" className="mt-14 scroll-mt-24 px-3">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Inventory.exe"
          title="Skills"
          description="Click icons to inspect."
        />

        <PixelWindow appName="inventory" icon="🎒">
          <div className="mb-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter skills by category">
            <button
              type="button"
              role="tab"
              aria-selected={category === "all"}
              onClick={() => setCategory("all")}
              className={`focus-ring rounded-full border-2 border-cocoa px-4 py-1.5 font-body text-xs font-semibold transition-colors ${
                category === "all" ? "bg-petal text-cream" : "bg-cream text-cocoa hover:bg-blush"
              }`}
            >
              ✨ All
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={category === cat.id}
                onClick={() => setCategory(cat.id)}
                className={`focus-ring rounded-full border-2 border-cocoa px-4 py-1.5 font-body text-xs font-semibold transition-colors ${
                  category === cat.id ? "bg-petal text-cream" : "bg-cream text-cocoa hover:bg-blush"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {filtered.map((skill) => (
              <button
                key={skill.id}
                type="button"
                onClick={() => setSelected(skill)}
                className="focus-ring group flex flex-col items-center gap-1.5 rounded-xl border-2 border-cocoa bg-cream px-3 py-4 shadow-pixel transition-transform hover:-translate-y-1 hover:shadow-pixel-lg"
              >
                <span className="text-3xl transition-transform group-hover:scale-110" aria-hidden="true">
                  {skill.icon}
                </span>
                <span className="text-center font-body text-xs font-semibold text-cocoa">{skill.name}</span>
              </button>
            ))}
          </div>
        </PixelWindow>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} titleId="skill-modal-title">
        {selected && (
          <>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-4xl" aria-hidden="true">
                {selected.icon}
              </span>
              <div>
                <h3 id="skill-modal-title" className="font-display text-xl font-semibold text-cocoa">
                  {selected.name}
                </h3>
                <div className="mt-1 flex gap-1" aria-label={`Proficiency: ${selected.level}`}>
                  {[1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className={`h-2.5 w-2.5 rounded-full border border-cocoa ${
                        dot <= levelDots[selected.level] ? "bg-petal" : "bg-cream"
                      }`}
                    />
                  ))}
                  <span className="ml-1 font-chrome text-[10px] uppercase text-plum">{selected.level}</span>
                </div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-plum">{selected.description}</p>
          </>
        )}
      </Modal>
    </section>
  );
}
