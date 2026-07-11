"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PixelCloud, PixelTree, PixelHeart } from "@/components/ui/PixelIcons";
import settings from "@data/settings.json";
import quotes from "@data/quotes.json";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(6);
  const [tip] = useState(() => quotes.items[Math.floor(Math.random() * quotes.items.length)]);

  useEffect(() => {
    const start = Date.now();
    const duration = settings.loaderMinDurationMs;

    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(Math.max(pct, 6));
      if (pct >= 100) {
        clearInterval(tick);
        setTimeout(() => setVisible(false), 250);
      }
    }, 60);

    return () => clearInterval(tick);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-cream"
          role="status"
          aria-live="polite"
        >
          <div className="relative flex h-24 w-40 items-end justify-center overflow-hidden">
            <div className="absolute left-2 top-0 animate-cloud-drift [animation-duration:8s]">
              <PixelCloud size={3} />
            </div>
            <div className="absolute right-3 top-3 animate-cloud-drift [animation-duration:11s]">
              <PixelCloud size={2} />
            </div>
            <motion.div
              animate={{ x: [-6, 6, -6] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <PixelHeart size={3} />
              <PixelTree size={4} />
            </motion.div>
          </div>

          <p className="font-pixel text-lg text-cocoa">loading Anwesha&apos;s world</p>

          <div className="h-4 w-56 overflow-hidden rounded-full border-2 border-cocoa bg-blush">
            <motion.div
              className="h-full bg-petal"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <p className="max-w-xs px-4 text-center font-body text-sm text-plum">{tip}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
