"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import projectsData from "@data/projects.json";
import type { Project } from "@/types";
import PixelWindow from "@/components/ui/PixelWindow";
import SectionHeading from "@/components/ui/SectionHeading";
import Modal from "@/components/ui/Modal";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const projects = projectsData.items as Project[];

  return (
    <section id="projects" className="mt-14 scroll-mt-24 px-3">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="SideQuests.exe"
          title="Projects"
          description="Open level to see the tech stack and learnings."
        />

        <PixelWindow appName="quest-log" icon="🗺️">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
            ))}
          </div>
        </PixelWindow>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} titleId="project-modal-title">
        {selected && (
          <>
            <div className="mb-1 flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">
                {selected.icon}
              </span>
              <h3 id="project-modal-title" className="font-display text-xl font-semibold text-cocoa">
                {selected.title}
              </h3>
            </div>
            <p className="mb-3 font-body text-xs italic text-plum">{selected.tagline}</p>
            <p className="mb-4 font-body text-sm leading-relaxed text-plum">{selected.description}</p>

            <h4 className="mb-1.5 font-chrome text-[11px] uppercase tracking-wide text-cocoa">Tech stack</h4>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {selected.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-cocoa/30 bg-lavender/50 px-2 py-0.5 font-body text-xs font-semibold text-cocoa"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="mb-1.5 font-chrome text-[11px] uppercase tracking-wide text-cocoa">Highlights</h4>
            <ul className="mb-4 list-inside list-disc space-y-1 font-body text-sm text-plum">
              {selected.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border-2 border-dashed border-plum/40 bg-blush/40 p-3">
                <h4 className="mb-1 font-chrome text-[10px] uppercase tracking-wide text-cocoa">Challenges</h4>
                <p className="font-body text-xs leading-relaxed text-plum">{selected.challenge}</p>
              </div>
              <div className="rounded-lg border-2 border-dashed border-plum/40 bg-mint/30 p-3">
                <h4 className="mb-1 font-chrome text-[10px] uppercase tracking-wide text-cocoa">Learnings</h4>
                <p className="font-body text-xs leading-relaxed text-plum">{selected.lesson}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-1.5 rounded-lg border-2 border-cocoa bg-cream px-3 py-1.5 font-body text-xs font-semibold text-cocoa hover:bg-blush"
                >
                  <Github size={14} /> View code
                </a>
              )}
              {selected.demo && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-1.5 rounded-lg border-2 border-cocoa bg-petal px-3 py-1.5 font-body text-xs font-semibold text-cream hover:-translate-y-0.5"
                >
                  <ExternalLink size={14} /> Website
                </a>
              )}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
