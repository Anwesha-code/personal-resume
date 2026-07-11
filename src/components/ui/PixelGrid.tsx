export interface PixelGridProps {
  pattern: string[];
  palette: Record<string, string>;
  pixelSize?: number;
  className?: string;
  title?: string;
}

/**
 * Renders a small hand-authored pixel-art icon from a text pattern.
 * Each character in `pattern` maps to a color in `palette`; use "." for
 * transparent cells. This keeps every decorative sprite in the codebase
 * as plain, easy-to-tweak data instead of image assets.
 */
export default function PixelGrid({
  pattern,
  palette,
  pixelSize = 4,
  className,
  title,
}: PixelGridProps) {
  const rows = pattern.length;
  const cols = Math.max(...pattern.map((row) => row.length));
  const width = cols * pixelSize;
  const height = rows * pixelSize;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      shapeRendering="crispEdges"
    >
      {title ? <title>{title}</title> : null}
      {pattern.map((row, y) =>
        row.split("").map((char, x) => {
          if (char === "." || !palette[char]) return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x * pixelSize}
              y={y * pixelSize}
              width={pixelSize}
              height={pixelSize}
              fill={palette[char]}
            />
          );
        })
      )}
    </svg>
  );
}
