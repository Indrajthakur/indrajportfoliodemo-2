export function SectionHeader({ sec, title, caption, id }: { sec: string; title: string; caption?: string; id?: string }) {
  const text = `// ${title} //`;
  return (
    <header className="mb-8">
      <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-dim">
        SYS.LOC // SEC_{sec} <span className="text-acid">◆</span>
      </p>
      <h2 id={id} className="glitch text-2xl font-bold uppercase tracking-wider text-bone sm:text-3xl" data-text={text}>
        {text}
      </h2>
      {caption && <p className="mt-2 text-xs text-dim">{caption}</p>}
    </header>
  );
}
