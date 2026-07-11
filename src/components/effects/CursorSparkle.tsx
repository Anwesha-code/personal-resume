"use client";

import { useEffect, useRef, useState } from "react";
import { PixelSparkle, PixelStar } from "@/components/ui/PixelIcons";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  star: boolean;
}

export default function CursorSparkle() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const nextId = useRef(0);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawn.current < 110) return;
      lastSpawn.current = now;

      const sparkle: Sparkle = {
        id: nextId.current++,
        x: e.clientX,
        y: e.clientY,
        star: Math.random() > 0.6,
      };

      setSparkles((prev) => [...prev.slice(-15), sparkle]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{ left: sparkle.x - 6, top: sparkle.y - 6 }}
          onAnimationEnd={() => setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id))}
        >
          {sparkle.star ? <PixelStar size={2} /> : <PixelSparkle size={2} />}
        </div>
      ))}
    </div>
  );
}
