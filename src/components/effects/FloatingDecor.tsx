import { PixelCloud, PixelTree, PixelFlower, PixelSparkle } from "@/components/ui/PixelIcons";

const clouds = [
  { top: "6%", size: 5, duration: "70s", delay: "0s", opacity: 0.9 },
  { top: "14%", size: 3, duration: "95s", delay: "-20s", opacity: 0.7 },
  { top: "24%", size: 6, duration: "110s", delay: "-55s", opacity: 0.85 },
  { top: "9%", size: 4, duration: "130s", delay: "-80s", opacity: 0.6 },
];

const groundTrees = [
  { left: "2%", size: 5 },
  { left: "10%", size: 3 },
  { left: "88%", size: 4 },
  { left: "95%", size: 6 },
];

const flowers = [
  { left: "20%", size: 3 },
  { left: "40%", size: 2 },
  { left: "65%", size: 3 },
  { left: "80%", size: 2 },
];

const sparklePositions = [
  { top: "18%", left: "12%", size: 3, delay: "0s" },
  { top: "35%", left: "85%", size: 2, delay: "1.1s" },
  { top: "60%", left: "6%", size: 2, delay: "2.4s" },
  { top: "75%", left: "92%", size: 3, delay: "0.6s" },
];

export default function FloatingDecor() {
  return (
    <>
      {clouds.map((cloud, i) => (
        <div
          key={`cloud-${i}`}
          className="absolute animate-cloud-drift"
          style={{
            top: cloud.top,
            left: 0,
            opacity: cloud.opacity,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        >
          <PixelCloud size={cloud.size} />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between opacity-90">
        {groundTrees.map((tree, i) => (
          <div key={`tree-${i}`} className="animate-drift" style={{ marginLeft: tree.left, animationDelay: `${i * 0.4}s` }}>
            <PixelTree size={tree.size} />
          </div>
        ))}
      </div>

      {flowers.map((flower, i) => (
        <div
          key={`flower-${i}`}
          className="absolute bottom-2 animate-drift"
          style={{ left: flower.left, animationDelay: `${i * 0.5}s` }}
        >
          <PixelFlower size={flower.size} />
        </div>
      ))}

      {sparklePositions.map((sparkle, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-pulse"
          style={{ top: sparkle.top, left: sparkle.left, animationDelay: sparkle.delay, animationDuration: "3s" }}
        >
          <PixelSparkle size={sparkle.size} />
        </div>
      ))}
    </>
  );
}
