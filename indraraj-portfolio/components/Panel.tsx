import type { ReactNode } from "react";

export function Panel({
  title,
  children,
  className = "",
  hover = false,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`panel ${hover ? "panel-hover" : ""} ${className}`}>
      {title && (
        <div className="flex items-center gap-2 border-b border-line px-3 py-1.5 text-[10px] uppercase tracking-widest text-dim">
          <span aria-hidden="true" className="flex gap-1">
            <i className="block h-1.5 w-1.5 bg-mag" />
            <i className="block h-1.5 w-1.5 bg-ice" />
            <i className="block h-1.5 w-1.5 bg-acid" />
          </span>
          <span className="truncate">{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}
