import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Custom ice-cream-cone cursor.
 * - Hides on touch devices.
 * - Shrinks/disappears briefly when CoolUncleMascot "eats" it (listens to "uncle:eat" event).
 */
export default function IceCreamCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 22, stiffness: 320, mass: 0.4 });
  const sy = useSpring(y, { damping: 22, stiffness: 320, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [eaten, setEaten] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [role='button'], input, textarea, select, .candy-card"));
    };
    const onEat = () => {
      setEaten(true);
      setTimeout(() => setEaten(false), 700);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("uncle:eat", onEat as EventListener);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("uncle:eat", onEat as EventListener);
      document.body.style.cursor = "";
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      <AnimatePresence>
        {!eaten && (
          <motion.div
            initial={{ scale: 0, rotate: -20, opacity: 0 }}
            animate={{ scale: hovering ? 1.25 : 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, rotate: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ translateX: "-50%", translateY: "-50%" }}
          >
            <svg width="44" height="56" viewBox="0 0 44 56" fill="none" style={{ filter: "drop-shadow(0 4px 8px rgba(236,72,153,0.35))" }}>
              {/* Scoop */}
              <circle cx="22" cy="18" r="14" fill="url(#scoopGrad)" />
              <circle cx="17" cy="14" r="3" fill="white" opacity="0.55" />
              {/* Drip */}
              <path d="M14 26 Q14 32 18 31 Q19 28 14 26 Z" fill="url(#scoopGrad)" />
              <path d="M30 26 Q30 30 27 29 Q26 27 30 26 Z" fill="url(#scoopGrad)" />
              {/* Cone */}
              <path d="M8 28 L36 28 L22 54 Z" fill="url(#coneGrad)" stroke="#a06a3a" strokeWidth="0.8" />
              <path d="M12 32 L32 32 M14 36 L30 36 M16 40 L28 40 M18 44 L26 44" stroke="#a06a3a" strokeWidth="0.6" opacity="0.6" />
              {/* Sprinkles */}
              <circle cx="20" cy="10" r="1.3" fill="#fbbf24" />
              <circle cx="26" cy="13" r="1.3" fill="#34d399" />
              <circle cx="14" cy="17" r="1.3" fill="#60a5fa" />
              <defs>
                <linearGradient id="scoopGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fbcfe8" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
                <linearGradient id="coneGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f4c481" />
                  <stop offset="100%" stopColor="#c98a4b" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
