import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F3",
        "cream-deep": "#FBEEE4",
        blush: "#FADCE4",
        "blush-deep": "#F6C7D6",
        petal: "#F5A9BC",
        "petal-deep": "#E88AA3",
        lavender: "#DCD6F7",
        "lavender-deep": "#C3B8F0",
        mint: "#C9EDE0",
        "mint-deep": "#A9DFCC",
        cocoa: "#6B4A3E",
        plum: "#8B6F8E",
        butter: "#FBEBB5",
      },
      fontFamily: {
        display: ["var(--font-fredoka)"],
        pixel: ["var(--font-pixelify)"],
        chrome: ["var(--font-silkscreen)"],
        body: ["var(--font-quicksand)"],
      },
      boxShadow: {
        pixel: "3px 3px 0 rgba(107, 74, 62, 0.25)",
        "pixel-lg": "5px 5px 0 rgba(107, 74, 62, 0.22)",
        "pixel-inset": "inset 2px 2px 0 rgba(255,255,255,0.6), inset -2px -2px 0 rgba(107,74,62,0.15)",
      },
      borderRadius: {
        window: "14px",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "translateY(0) scaleY(1)" },
          "50%": { transform: "translateY(-2px) scaleY(1.015)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "94%, 98%": { transform: "scaleY(0.1)" },
        },
        drift: {
          "0%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(6px,-10px) rotate(3deg)" },
          "100%": { transform: "translate(0,0) rotate(0deg)" },
        },
        "fall-sway": {
          "0%": { transform: "translate(0, -10vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "50%": { transform: "translate(30px, 50vh) rotate(180deg)" },
          "100%": { transform: "translate(-10px, 110vh) rotate(360deg)", opacity: "0" },
        },
        waddle: {
          "0%, 100%": { transform: "translateY(0) rotate(-4deg)" },
          "50%": { transform: "translateY(-3px) rotate(4deg)" },
        },
        "cloud-drift": {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(110%)" },
        },
        sparkle: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "scale(1) rotate(90deg)", opacity: "0" },
        },
        "pop-in": {
          "0%": { transform: "scale(0.85)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wag: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        breathe: "breathe 4.2s ease-in-out infinite",
        blink: "blink 5.5s ease-in-out infinite",
        drift: "drift 3.6s ease-in-out infinite",
        "fall-sway": "fall-sway linear forwards",
        waddle: "waddle 0.35s ease-in-out infinite",
        "cloud-drift": "cloud-drift linear infinite",
        sparkle: "sparkle 0.7s ease-out forwards",
        "pop-in": "pop-in 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards",
        wag: "wag 0.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
