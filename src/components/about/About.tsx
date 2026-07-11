"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutObjects from "@data/about.json";
import profile from "@data/profile.json";
import PixelWindow from "@/components/ui/PixelWindow";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const [activeId, setActiveId] = useState<string>(aboutObjects.items[0].id);
  const active = aboutObjects.items.find((item) => item.id === activeId) ?? aboutObjects.items[0];

  return (
    <section className="mt-14 px-3">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Room.exe"
          title="About Me"
          description="Click around on my desk, everything on it means something."
        />

        <PixelWindow appName="my-room" icon="🛋️">
          <p className="mx-auto mb-6 max-w-2xl text-center font-body text-sm leading-relaxed text-plum sm:text-base">
            {profile.summary}
          </p>

          <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
            <div
              className="grid grid-cols-3 gap-3 sm:grid-cols-2"
              role="group"
              aria-label="Clickable objects on Anwesha's desk"
            >
              {aboutObjects.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={activeId === item.id}
                  className={`focus-ring flex flex-col items-center gap-1 rounded-xl border-2 px-3 py-3 font-body text-xs font-semibold transition-transform hover:-translate-y-1 ${
                    activeId === item.id
                      ? "border-cocoa bg-petal text-cream shadow-pixel"
                      : "border-cocoa/40 bg-cream text-cocoa hover:border-cocoa"
                  }`}
                >
                  <span className="text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>

            <div className="min-h-[160px] rounded-xl border-2 border-dashed border-plum/40 bg-blush/40 p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="mb-2 font-display text-lg font-semibold text-cocoa">
                    {active.icon} {active.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-plum">{active.content}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </PixelWindow>
      </div>
    </section>
  );
}
