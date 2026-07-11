import socials from "@data/socials.json";
import profile from "@data/profile.json";
import { socialIconMap } from "@/components/ui/socialIconMap";
import { PixelHeart } from "@/components/ui/PixelIcons";
import type { SocialLink } from "@/types";

export default function Footer() {
  const links = (socials.items as SocialLink[]).filter((s) => s.id !== "certificates-drive" || true);

  return (
    <footer className="mt-16 px-3 pb-6">
      <div className="pixel-window mx-auto max-w-5xl px-6 py-6 text-center">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
          {links.map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <a
                key={social.id}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="focus-ring flex items-center gap-1.5 rounded-md border-2 border-cocoa bg-cream px-3 py-1.5 font-body text-xs font-semibold text-cocoa shadow-pixel transition-transform hover:-translate-y-0.5"
              >
                <Icon size={14} aria-hidden="true" />
                {social.label}
              </a>
            );
          })}
        </div>
        <p className="flex items-center justify-center gap-1.5 font-body text-xs text-plum">
           <PixelHeart size={2} /> 
        </p>
      </div>
    </footer>
  );
}
