export interface Profile {
  name: string;
  displayName: string;
  pronouns?: string;
  role: string;
  rotatingRoles: string[];
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone?: string;
  resumeUrl: string;
  availability?: string;
  avatarAlt: string;
}

export type SocialIcon = "github" | "linkedin" | "code" | "mail" | "folder";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: SocialIcon;
  showInHero: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  challenge: string;
  lesson: string;
  github: string | null;
  demo: string | null;
  status: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  icon: string;
  points: string[];
  certificateNote?: string;
  order: number;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  detail: string;
  highlight?: string;
  icon: string;
  order: number;
}

export interface CertificateCategory {
  id: string;
  label: string;
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface AboutObject {
  id: string;
  icon: string;
  label: string;
  title: string;
  content: string;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  idleCherryBlossomSeconds: number;
  idleChibiRestSeconds: number;
  cursorSparkles: boolean;
  showDuckEasterEgg: boolean;
  showLoader: boolean;
  loaderMinDurationMs: number;
}

export type TimelineEntry =
  | ({ kind: "education" } & EducationItem)
  | ({ kind: "experience" } & ExperienceItem);
