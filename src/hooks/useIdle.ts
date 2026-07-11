"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns `true` once the user has had no mouse, touch, or keyboard
 * activity for `seconds` seconds. Resets the moment any activity happens.
 */
export function useIdle(seconds: number) {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      setIsIdle(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsIdle(true), seconds * 1000);
    };

    const events: Array<keyof WindowEventMap> = [
      "mousemove",
      "mousedown",
      "keydown",
      "touchstart",
      "scroll",
    ];

    events.forEach((event) => window.addEventListener(event, resetTimer, { passive: true }));
    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [seconds]);

  return isIdle;
}
