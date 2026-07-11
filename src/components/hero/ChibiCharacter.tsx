"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reactions = [
  "Hehe~ hi there!",
  "Ooh, hello!",
  "*waves* Welcome!",
  "Thanks for stopping by!",
  "Chapter 47 was SO good.",
];

interface ChibiCharacterProps {
  resting: boolean;
}

export default function ChibiCharacter({ resting }: ChibiCharacterProps) {
  const [reaction, setReaction] = useState<string | null>(null);
  const [bounceKey, setBounceKey] = useState(0);

  useEffect(() => {
    if (!reaction) return;
    const timeout = setTimeout(() => setReaction(null), 2000);
    return () => clearTimeout(timeout);
  }, [reaction]);

  const handleClick = () => {
    setReaction(reactions[Math.floor(Math.random() * reactions.length)]);
    setBounceKey((k) => k + 1);
  };

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {reaction && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.9 }}
            className="pixel-window absolute -top-4 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap px-3 py-1.5"
          >
            <p className="font-body text-xs font-semibold text-cocoa">{reaction}</p>
          </motion.div>
        )}
        {resting && !reaction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -4, 0] }}
            transition={{ y: { repeat: Infinity, duration: 2.4 } }}
            exit={{ opacity: 0 }}
            className="absolute -top-2 right-6 z-10 font-pixel text-lg text-plum"
          >
            z Z z
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label="Anwesha's chibi avatar. Click for a little greeting."
        onClick={handleClick}
        key={bounceKey}
        initial={{ y: 0 }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="cursor-pointer bg-transparent focus-ring rounded-full"
      >
        <div className="animate-breathe">
          <svg width="280" height="270" viewBox="0 0 280 270" aria-hidden="true">
            {/* ground shadow */}
            <ellipse cx="140" cy="248" rx="95" ry="12" fill="#6B4A3E" opacity="0.12" />

            {/* chihuahua companion */}
            <g transform="translate(206,178)">
              <ellipse cx="0" cy="30" rx="30" ry="20" fill="#F3D9BB" stroke="#6B4A3E" strokeWidth="2.5" />
              <path d="M -18 8 L -28 -14 L -6 4 Z" fill="#F3D9BB" stroke="#6B4A3E" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 18 8 L 28 -14 L 6 4 Z" fill="#F3D9BB" stroke="#6B4A3E" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="0" cy="10" r="17" fill="#F9E7D0" stroke="#6B4A3E" strokeWidth="2.5" />
              <circle cx="-6" cy="8" r="2" fill="#6B4A3E" />
              <circle cx="6" cy="8" r="2" fill="#6B4A3E" />
              <ellipse cx="0" cy="15" rx="3" ry="2" fill="#6B4A3E" />
              <path d="M 4 18 Q 8 22 12 18" stroke="#E88AA3" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>

            {/* little desk */}
            <rect x="60" y="205" width="150" height="14" rx="4" fill="#D9B896" stroke="#6B4A3E" strokeWidth="2.5" />
            <rect x="66" y="219" width="10" height="24" fill="#C9A27C" stroke="#6B4A3E" strokeWidth="2" />
            <rect x="196" y="219" width="10" height="24" fill="#C9A27C" stroke="#6B4A3E" strokeWidth="2" />

            {/* laptop */}
            <g transform="translate(95,163)">
              <rect x="0" y="34" width="70" height="8" rx="2" fill="#DCD6F7" stroke="#6B4A3E" strokeWidth="2.5" />
              <rect x="4" y="0" width="62" height="36" rx="3" fill="#8B6F8E" stroke="#6B4A3E" strokeWidth="2.5" />
              <rect x="9" y="5" width="52" height="26" rx="2" fill="#C9EDE0" />
              <rect x="14" y="10" width="20" height="3" fill="#8B6F8E" opacity="0.6" />
              <rect x="14" y="16" width="30" height="3" fill="#F5A9BC" opacity="0.7" />
              <rect x="14" y="22" width="14" height="3" fill="#8B6F8E" opacity="0.6" />
            </g>

            {/* girl: dress/body */}
            <path
              d="M 95 160 Q 140 140 185 160 L 195 235 Q 140 250 85 235 Z"
              fill="#F6C7D6"
              stroke="#6B4A3E"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M 85 235 Q 140 250 195 235 L 193 240 Q 140 254 87 240 Z"
              fill="#E88AA3"
              stroke="#6B4A3E"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* bow at collar */}
            <g transform="translate(140,155)">
              <path d="M -3 0 L -14 -7 L -14 7 Z" fill="#E88AA3" stroke="#6B4A3E" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 3 0 L 14 -7 L 14 7 Z" fill="#E88AA3" stroke="#6B4A3E" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="0" cy="0" r="4" fill="#F5A9BC" stroke="#6B4A3E" strokeWidth="2" />
            </g>

            {/* arms resting on laptop */}
            <ellipse cx="103" cy="192" rx="11" ry="9" fill="#FFE1C8" stroke="#6B4A3E" strokeWidth="2.5" />
            <ellipse cx="177" cy="192" rx="11" ry="9" fill="#FFE1C8" stroke="#6B4A3E" strokeWidth="2.5" />

            {/* head */}
            <circle cx="140" cy="105" r="58" fill="#FFE1C8" stroke="#6B4A3E" strokeWidth="3" />

            {/* ears */}
            <circle cx="82" cy="110" r="8" fill="#FFE1C8" stroke="#6B4A3E" strokeWidth="2.5" />
            <circle cx="198" cy="110" r="8" fill="#FFE1C8" stroke="#6B4A3E" strokeWidth="2.5" />

            {/* back hair */}
            <path
              d="M 80 100 Q 70 175 95 205 Q 90 140 100 108 Z"
              fill="#5B3A29"
              stroke="#6B4A3E"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M 200 100 Q 210 175 185 205 Q 190 140 180 108 Z"
              fill="#5B3A29"
              stroke="#6B4A3E"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* front hair / bangs */}
            <path
              d="M 82 95 Q 78 40 140 38 Q 202 40 198 95 Q 190 60 140 62 Q 90 60 82 95 Z"
              fill="#5B3A29"
              stroke="#6B4A3E"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M 108 62 Q 112 84 104 98" stroke="#6B4A3E" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
            <path d="M 172 62 Q 168 84 176 98" stroke="#6B4A3E" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />

            {/* hair clip */}
            <g transform="translate(112,58)">
              <path d="M -3 0 L -10 -5 L -10 5 Z" fill="#F5A9BC" stroke="#6B4A3E" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M 3 0 L 10 -5 L 10 5 Z" fill="#F5A9BC" stroke="#6B4A3E" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="0" cy="0" r="3" fill="#E88AA3" />
            </g>

            {/* blush */}
            <ellipse cx="112" cy="122" rx="9" ry="5" fill="#F5A9BC" opacity="0.7" />
            <ellipse cx="168" cy="122" rx="9" ry="5" fill="#F5A9BC" opacity="0.7" />

            {/* eyes */}
            {resting ? (
              <g stroke="#6B4A3E" strokeWidth="3" strokeLinecap="round" fill="none">
                <path d="M 116 108 Q 122 112 128 108" />
                <path d="M 152 108 Q 158 112 164 108" />
              </g>
            ) : (
              <g style={{ transformBox: "fill-box", transformOrigin: "center" }} className="animate-blink">
                <ellipse cx="121" cy="107" rx="6.5" ry="8.5" fill="#6B4A3E" />
                <ellipse cx="159" cy="107" rx="6.5" ry="8.5" fill="#6B4A3E" />
                <circle cx="123.5" cy="103" r="2.2" fill="#FFF8F3" />
                <circle cx="161.5" cy="103" r="2.2" fill="#FFF8F3" />
              </g>
            )}

            {/* glasses */}
            <g stroke="#6B4A3E" strokeWidth="2.5" fill="none">
              <rect x="105" y="97" width="30" height="22" rx="9" />
              <rect x="145" y="97" width="30" height="22" rx="9" />
              <path d="M 135 106 Q 140 102 145 106" />
              <path d="M 105 106 L 92 102" strokeLinecap="round" />
              <path d="M 175 106 L 188 102" strokeLinecap="round" />
            </g>

            {/* mouth */}
            <path d="M 133 131 Q 140 136 147 131" stroke="#6B4A3E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </motion.button>
    </div>
  );
}
