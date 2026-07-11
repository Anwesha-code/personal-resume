"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PixelDuck } from "@/components/ui/PixelIcons";

export default function DuckCompanion() {
  const [isWaddling, setIsWaddling] = useState(false);

  return (
    <motion.button
      type="button"
      aria-label="A small pixel duck. Click it to watch it waddle across the screen."
      onClick={() => !isWaddling && setIsWaddling(true)}
      className="fixed bottom-4 left-4 z-50 cursor-pointer bg-transparent p-1"
      animate={isWaddling ? { x: ["0vw", "92vw"] } : { x: 0 }}
      transition={isWaddling ? { duration: 5, ease: "linear" } : { duration: 0 }}
      onAnimationComplete={() => setIsWaddling(false)}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className={isWaddling ? "animate-waddle" : ""}>
        <PixelDuck size={4} title="Pixel duck — click to make it waddle" />
      </div>
    </motion.button>
  );
}
