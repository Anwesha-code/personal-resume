"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import certificatesData from "@data/certificates.json";
import socials from "@data/socials.json";
import type { Certificate, SocialLink } from "@/types";
import PixelWindow from "@/components/ui/PixelWindow";
import SectionHeading from "@/components/ui/SectionHeading";
import Modal from "@/components/ui/Modal";

export default function CertificatesSection() {
  const [category, setCategory] = useState<string>("all");
  const [selected, setSelected] = useState<Certificate | null>(null);

  const certificates = certificatesData.items as Certificate[];
  const driveLink = (socials.items as SocialLink[]).find((s) => s.id === "certificates-drive");

  const filtered = useMemo(
    () => (category === "all" ? certificates : certificates.filter((c) => c.category === category)),
    [category, certificates]
  );

  return (
    <section id="certificates" className="mt-14 scroll-mt-24 px-3">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Badges.exe"
          title="Certificate Collection"
          description="Sortable badges for everything I've completed. Tap one to see the issuer, or visit the drive for the original documents."
        />

        <PixelWindow appName="badge-case" icon="🏅">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`focus-ring rounded-full border-2 border-cocoa px-4 py-1.5 font-body text-xs font-semibold transition-colors ${
                category === "all" ? "bg-petal text-cream" : "bg-cream text-cocoa hover:bg-blush"
              }`}
            >
              ✨ All
            </button>
            {certificatesData.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`focus-ring rounded-full border-2 border-cocoa px-4 py-1.5 font-body text-xs font-semibold transition-colors ${
                  category === cat.id ? "bg-petal text-cream" : "bg-cream text-cocoa hover:bg-blush"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {filtered.map((cert) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => setSelected(cert)}
                className="focus-ring flex flex-col items-center gap-2 rounded-xl border-2 border-cocoa bg-gradient-to-b from-butter to-cream p-4 text-center shadow-pixel transition-transform hover:-translate-y-1 hover:shadow-pixel-lg"
              >
                <span className="text-3xl" aria-hidden="true">
                  {cert.icon}
                </span>
                <span className="font-body text-[11px] font-semibold leading-tight text-cocoa">{cert.title}</span>
              </button>
            ))}
          </div>

          {driveLink && (
            <div className="mt-6 text-center">
              <a
                href={driveLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 rounded-lg border-2 border-cocoa bg-cream px-4 py-2 font-body text-xs font-semibold text-cocoa hover:bg-blush"
              >
                <ExternalLink size={14} /> View verification documents
              </a>
            </div>
          )}
        </PixelWindow>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} titleId="cert-modal-title">
        {selected && (
          <div className="text-center">
            <span className="mb-2 block text-5xl" aria-hidden="true">
              {selected.icon}
            </span>
            <h3 id="cert-modal-title" className="font-display text-lg font-semibold text-cocoa">
              {selected.title}
            </h3>
            <p className="mt-1 font-body text-sm text-plum">Issued by {selected.issuer}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
