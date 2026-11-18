function Rail({ side, items }: { side: "left" | "right"; items: string[] }) {
  return (
    <aside
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 bottom-0 z-30 hidden w-10 flex-col items-center justify-between border-line py-24 text-[10px] uppercase tracking-[0.3em] text-dim lg:flex ${
        side === "left" ? "left-0 border-r" : "right-0 border-l"
      }`}
    >
      {items.map((t, i) => (
        <div key={t} className="flex flex-col items-center gap-6">
          <span className="text-acid">◆</span>
          <span style={{ writingMode: "vertical-rl" }} className={side === "left" ? "rotate-180" : ""}>
            {t}
          </span>
          {i === items.length - 1 && <span className="text-acid">◆</span>}
        </div>
      ))}
    </aside>
  );
}

export function Rails() {
  return (
    <>
      <Rail side="left" items={["MEM.SYS // 24.1%", "NET.LINK // STABLE"]} />
      <Rail side="right" items={["CPU.LOAD // 12.7%", "BUILD // PORTFOLIO_v3.0"]} />
    </>
  );
}
