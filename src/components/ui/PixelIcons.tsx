import PixelGrid from "./PixelGrid";

interface IconProps {
  size?: number;
  className?: string;
  title?: string;
}

export function PixelTree({ size = 4, className, title = "Pixel tree" }: IconProps) {
  const pattern = [
    ".LLLLLL.",
    "LLLLLLLL",
    "LLmLLmLL",
    "LLLLLLLL",
    ".LmLLmL.",
    "..LLLL..",
    "...TT...",
    "...TT...",
    "...tt...",
  ];
  const palette = { L: "#BEE8CE", m: "#9BDBB9", T: "#C9A27C", t: "#A67C52" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelCloud({ size = 4, className, title = "Pixel cloud" }: IconProps) {
  const pattern = [
    "..CCCC......",
    ".CCCCCCCC...",
    "CCCCCCCCCCCC",
    "CCCCCCCCCCCC",
    ".CCCCCCCC...",
    "..CCCC......",
  ];
  const palette = { C: "#FFFFFF" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelHeart({ size = 4, className, title = "Pixel heart" }: IconProps) {
  const pattern = [".CC.CC.", "CCCCCCC", "CCCCCCC", ".CCCCC.", "..CCC..", "...C..."];
  const palette = { C: "#F5A9BC" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelStar({ size = 4, className, title = "Pixel star" }: IconProps) {
  const pattern = ["...C...", "..CCC..", ".CCCCC.", "CCCCCCC", ".CCCCC.", "..CCC..", "...C..."];
  const palette = { C: "#FBEBB5" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelSparkle({ size = 4, className, title = "Sparkle" }: IconProps) {
  const pattern = ["..C..", "..C..", "CCCCC", "..C..", "..C.."];
  const palette = { C: "#DCD6F7" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelCherry({ size = 4, className, title = "Pixel cherries" }: IconProps) {
  const pattern = ["..G.G..", "..G.G..", ".C...C.", "CC...CC", "CCC.CCC", ".CC.CC.", "..C..C."];
  const palette = { G: "#9BDBB9", C: "#E88AA3" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelBow({ size = 4, className, title = "Pixel bow" }: IconProps) {
  const pattern = ["C.....C", "CC...CC", "CCCoCCC", "CC...CC", "C.....C"];
  const palette = { C: "#F5A9BC", o: "#E88AA3" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelDuck({ size = 4, className, title = "Pixel duck" }: IconProps) {
  const pattern = [
    "...YYYY..",
    "..YYYYYY.",
    ".YYYYYYYY",
    ".YYYYYYYO",
    "YYYYYYYYO",
    "YYYYYYYY.",
    ".YYYYYY..",
    "..Y....Y.",
    ".OO....OO",
  ];
  const palette = { Y: "#FBEBB5", O: "#E8A860" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelFlower({ size = 4, className, title = "Pixel flower" }: IconProps) {
  const pattern = ["..P.P..", ".PPPPP.", "P.PYP.P", ".PPPPP.", "..P.P..", "...G...", "...G..."];
  const palette = { P: "#F6C7D6", Y: "#FBEBB5", G: "#9BDBB9" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelPetal({ size = 4, className, title = "Cherry blossom petal" }: IconProps) {
  const pattern = [".P.", "PPP", ".P."];
  const palette = { P: "#F6C7D6" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}

export function PixelPawPrint({ size = 4, className, title = "Paw print" }: IconProps) {
  const pattern = ["C.C.C.C", ".CCCCC.", "..CCC..", "..CCC.."];
  const palette = { C: "#C3B8F0" };
  return <PixelGrid pattern={pattern} palette={palette} pixelSize={size} className={className} title={title} />;
}
