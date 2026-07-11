"use client";

import { useEffect, useRef, useState } from "react";
import { useIdle } from "@/hooks/useIdle";
import { PixelPetal } from "@/components/ui/PixelIcons";
import { randomBetween } from "@/lib/utils";

interface Petal {
  id: number;
  left: number;
  duration: number;
  size: number;
  delay: number;
}

export default function CherryBlossoms({ idleSeconds = 8 }: { idleSeconds?: number }) {
  const isIdle = useIdle(idleSeconds);
  const [petals, setPetals] = useState<Petal[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    if (!isIdle) return;

    const spawn = () => {
      setPetals((prev) => {
        const next: Petal = {
          id: nextId.current++,
          left: randomBetween(2, 96),
          duration: randomBetween(6, 11),
          size: Math.round(randomBetween(2, 4)),
          delay: 0,
        };
        // Cap concurrent petals so idle mode stays gentle, not a blizzard.
        const trimmed = prev.length > 24 ? prev.slice(prev.length - 24) : prev;
        return [...trimmed, next];
      });
    };

    spawn();
    const interval = setInterval(spawn, 700);
    return () => clearInterval(interval);
  }, [isIdle]);

  useEffect(() => {
    if (isIdle) return;
    setPetals([]);
  }, [isIdle]);

  if (!isIdle && petals.length === 0) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-0 animate-fall-sway"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
          }}
          onAnimationEnd={() => setPetals((prev) => prev.filter((p) => p.id !== petal.id))}
        >
          <PixelPetal size={petal.size} />
        </div>
      ))}
    </div>
  );
}
