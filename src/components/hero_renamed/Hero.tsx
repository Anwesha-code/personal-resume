"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profile from "@data/profile.json";
import socials from "@data/socials.json";
import settings from "@data/settings.json";
import ChibiCharacter from "./ChibiCharacter";
import { socialIconMap } from "@/components/ui/socialIconMap";
import { useIdle } from "@/hooks/useIdle";
import type { SocialLink } from "@/types";
import { PixelStar } from "@/components/ui/PixelIcons";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const isResting = useIdle(settings.idleChibiRestSeconds);
  const heroSocials = (socials.items as SocialLink[]).filter((s) => s.showInHero);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.rotatingRoles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="scroll-mt-24 px-3 pt-8 sm:pt-14">
      <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
        <div className="pixel-window px-6 py-8 sm:px-10 sm:py-10">
          <p className="mb-3 flex items-center gap-2 font-chrome text-[11px] uppercase tracking-[0.2em] text-plum">
            <PixelStar size={2} /> {profile.availability}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
            Hi, I&apos;m {profile.displayName.split(" ")[0]}
            <span aria-hidden="true"> ✨</span>
          </h1>

          <div className="mt-2 h-8">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="font-pixel text-lg text-petal-deep sm:text-xl"
            >
              {profile.rotatingRoles[roleIndex]}
            </motion.p>
          </div>

          <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-plum sm:text-base">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={profile.resumeUrl}
              download
              className="focus-ring flex items-center gap-2 rounded-lg border-2 border-cocoa bg-petal px-4 py-2 font-body text-sm font-semibold text-cream shadow-pixel transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} /> Resume
            </a>
            {heroSocials.map((social) => {
              const Icon = socialIconMap[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="focus-ring flex items-center gap-2 rounded-lg border-2 border-cocoa bg-cream px-4 py-2 font-body text-sm font-semibold text-cocoa shadow-pixel transition-transform hover:-translate-y-0.5"
                >
                  <Icon size={16} /> {social.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="pixel-window flex justify-center overflow-visible px-4 py-10">
          <ChibiCharacter resting={isResting} />
        </div>
      </div>
    </section>
  );
}
