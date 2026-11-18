"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function TypeText({ text, speed = 28, className }: { text: string; speed?: number; className?: string }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduce) {
      setN(text.length);
      return;
    }
    setN(0);
    const id = setInterval(() => {
      setN((v) => {
        if (v >= text.length) {
          clearInterval(id);
          return v;
        }
        return v + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, reduce]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{text.slice(0, n)}</span>
      <span aria-hidden="true" className="blink text-acid">
        ▌
      </span>
    </span>
  );
}
