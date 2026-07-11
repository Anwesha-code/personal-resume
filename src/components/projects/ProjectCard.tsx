import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-xl border-2 border-cocoa bg-cream p-5 shadow-pixel transition-transform hover:-translate-y-1 hover:shadow-pixel-lg">
      <div className="mb-2 flex items-start justify-between gap-2">
        <span className="text-3xl" aria-hidden="true">
          {project.icon}
        </span>
        <span className="rounded-full border border-cocoa/40 bg-mint px-2.5 py-0.5 font-chrome text-[9px] uppercase tracking-wide text-cocoa">
          {project.status}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-cocoa">{project.title}</h3>
      <p className="mt-1 font-body text-xs italic text-plum">{project.tagline}</p>
      <p className="mt-3 line-clamp-3 font-body text-sm leading-relaxed text-plum">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-cocoa/30 bg-lavender/50 px-2 py-0.5 font-body text-[11px] font-semibold text-cocoa"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onOpen}
          className="focus-ring rounded-lg border-2 border-cocoa bg-petal px-3 py-1.5 font-body text-xs font-semibold text-cream shadow-pixel transition-transform hover:-translate-y-0.5"
        >
          Open level ▸
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="focus-ring rounded-lg border-2 border-cocoa bg-cream p-1.5 text-cocoa hover:bg-blush"
          >
            <Github size={16} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="focus-ring rounded-lg border-2 border-cocoa bg-cream p-1.5 text-cocoa hover:bg-blush"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
