const ROWS = [
  "....kkkk....",
  "...kggggk...",
  "..kggggggk..",
  "..kgssssgk..",
  "..kgsesegk..",
  "..kgssssgk..",
  "...kgmmgk...",
  ".kkgggggggk.",
  "kgggcggcgggk",
  "kgsgggggggsk",
  "kgggggggggk.",
  ".kggggggggk.",
  ".kgggkkgggk.",
  "..kkk..kkk..",
];

const PALETTE: Record<string, string> = {
  k: "#0a0a0f",
  g: "#166b3f",
  s: "#f2c9a0",
  e: "#22e3ff",
  m: "#ff2bd6",
  c: "#b6ff3c",
};

export function PixelAvatar({ className = "" }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Pixel-art avatar of a hooded mage with glowing cyan eyes"
      viewBox="0 0 12 14"
      shapeRendering="crispEdges"
      className={className}
    >
      {ROWS.flatMap((row, y) =>
        row.split("").map((ch, x) =>
          ch === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={PALETTE[ch]} />
        )
      )}
    </svg>
  );
}
