"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function XPBar({ value, max, label, className = "" }: { value: number; max: number; label: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const pct = Math.min(100, (value / max) * 100);

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={`h-2 w-full border border-line bg-black/60 ${className}`}
    >
      <motion.div
        className="h-full bg-acid shadow-[0_0_10px_rgba(182,255,60,0.7)]"
        initial={{ width: reduce ? `${pct}%` : 0 }}
        animate={{ width: inView || reduce ? `${pct}%` : 0 }}
        transition={{ duration: reduce ? 0 : 1.2, ease: "easeOut" }}
      />
    </div>
  );
}
