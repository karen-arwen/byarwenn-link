import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Star = { id: number; top: string; left: string; size: number; delay: number; duration: number };

export function Sparkles({ count = 40, className = "" }: { count?: number; className?: string }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const arr: Star[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 4,
    }));
    setStars(arr);
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-lilac animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: "0 0 8px var(--lilac), 0 0 14px var(--glow)",
          }}
        />
      ))}
    </div>
  );
}

export function PixelHeart({ className = "" }: { className?: string }) {
  // 8x7 pixel heart grid
  const pattern = useMemo(
    () => [
      "01100110",
      "11111111",
      "11111111",
      "01111110",
      "00111100",
      "00011000",
    ],
    [],
  );
  return (
    <div className={`inline-grid grid-cols-8 gap-[2px] ${className}`} aria-hidden>
      {pattern.flatMap((row, ri) =>
        row.split("").map((c, ci) => (
          <span
            key={`${ri}-${ci}`}
            className={`h-[5px] w-[5px] ${c === "1" ? "bg-[var(--glow)]" : "bg-transparent"}`}
            style={c === "1" ? { boxShadow: "0 0 4px var(--glow)" } : undefined}
          />
        )),
      )}
    </div>
  );
}

export function SectionDivider({ label }: { label?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-4 py-4"
    >
      <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[var(--lilac)]/60" />
      <PixelHeart />
      {label && (
        <span className="font-script text-2xl text-[var(--lilac)]">{label}</span>
      )}
      <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[var(--lilac)]/60" />
    </motion.div>
  );
}
