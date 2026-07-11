import { Github, Linkedin, Code2, Mail, Folder, type LucideIcon } from "lucide-react";
import type { SocialIcon } from "@/types";

export const socialIconMap: Record<SocialIcon, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  mail: Mail,
  folder: Folder,
};
