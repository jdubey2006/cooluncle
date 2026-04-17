import { useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

const EMOJIS = ["🍦", "🍨", "🍧", "🍡", "🧁", "🍪", "🍩", "🍓", "🍒", "🥥"];

type Item = {
  left: number;
  top: number;
  emoji: string;
  size: number;
  speed: number;
  spin: number;
};

function FloatingTreat({ item, progress }: { item: Item; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, -item.speed * 4]);
  const r = useTransform(progress, [0, 1], [0, item.spin]);
  return (
    <motion.div
      style={{
        left: `${item.left}%`,
        top: `${item.top}%`,
        fontSize: item.size,
        y,
        rotate: r,
        opacity: 0.55,
        filter: "drop-shadow(0 4px 6px rgba(236,72,153,0.15))",
      }}
      className="absolute"
    >
      {item.emoji}
    </motion.div>
  );
}

/**
 * Scroll-driven decorative ice-cream layer:
 * - Top progress scoop
 * - Parallax floating emojis
 * - Melting drip that grows with scroll
 */
export default function ScrollFX() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const dripHeight = useTransform(progress, [0, 1], ["0vh", "60vh"]);
  const rotate = useTransform(progress, [0, 1], [0, 360]);
  const xTravel = useTransform(progress, [0, 1], ["0vw", "calc(100vw - 32px)"]);

  const items = useMemo<Item[]>(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: (i * 53) % 100,
        top: (i * 37) % 100,
        emoji: EMOJIS[i % EMOJIS.length],
        size: 22 + ((i * 7) % 28),
        speed: 80 + ((i * 41) % 220),
        spin: i % 2 === 0 ? 180 : -180,
      })),
    [],
  );

  return (
    <>
      {/* Top progress scoop */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[70] bg-gradient-to-r from-pink-400 via-amber-300 to-emerald-300"
      />
      <motion.div
        style={{ x: xTravel, rotate }}
        className="fixed top-[-10px] left-0 z-[71] text-2xl pointer-events-none"
      >
        🍦
      </motion.div>

      {/* Parallax floating treats */}
      <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
        {items.map((it, i) => (
          <FloatingTreat key={i} item={it} progress={progress} />
        ))}
      </div>

      {/* Melting drip from top */}
      <motion.div
        style={{ height: dripHeight }}
        className="fixed top-0 left-0 right-0 z-[4] pointer-events-none"
      >
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0 L1440,0 L1440,120 Q1380,180 1320,130 Q1260,80 1200,150 Q1140,200 1080,140 Q1020,90 960,160 Q900,210 840,140 Q780,80 720,150 Q660,210 600,140 Q540,80 480,150 Q420,210 360,140 Q300,80 240,150 Q180,210 120,140 Q60,80 0,140 Z"
            fill="url(#dripGrad)"
            opacity="0.55"
          />
          <defs>
            <linearGradient id="dripGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.95 0.06 350)" />
              <stop offset="100%" stopColor="oklch(0.97 0.04 350 / 0)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}
