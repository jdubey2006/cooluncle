import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Floating Cool Uncle face that tracks the cursor with its eyes.
 * When the cursor gets very close OR a click/hover-on-interactive happens,
 * the mouth opens wide and "eats" the cursor — then chews until the page is opened (always).
 */
export default function CoolUncleMascot() {
  const faceRef = useRef<HTMLDivElement>(null);
  const pupilX = useMotionValue(0);
  const pupilY = useMotionValue(0);
  const spX = useSpring(pupilX, { stiffness: 180, damping: 18 });
  const spY = useSpring(pupilY, { stiffness: 180, damping: 18 });
  const [chewing] = useState(true); // always chewing while page open
  const [biting, setBiting] = useState(false);
  const lastBite = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onMove = (e: MouseEvent) => {
      const el = faceRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const max = 4; // pupil travel
      const ang = Math.atan2(dy, dx);
      pupilX.set(Math.cos(ang) * Math.min(max, dist / 30));
      pupilY.set(Math.sin(ang) * Math.min(max, dist / 30));

      // Bite if cursor enters the face area
      if (dist < r.width / 2 + 8 && Date.now() - lastBite.current > 800) {
        lastBite.current = Date.now();
        window.dispatchEvent(new CustomEvent("uncle:eat"));
        setBiting(true);
        setTimeout(() => setBiting(false), 600);
      }
    };

    const onClick = () => {
      if (Date.now() - lastBite.current < 400) return;
      lastBite.current = Date.now();
      window.dispatchEvent(new CustomEvent("uncle:eat"));
      setBiting(true);
      setTimeout(() => setBiting(false), 600);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, [pupilX, pupilY]);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
      className="fixed bottom-6 right-6 z-[60] cursor-grab active:cursor-grabbing select-none"
      aria-hidden="true"
    >
      <div ref={faceRef} className="relative">
        {/* subtle floating idle */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="92" height="100" viewBox="0 0 92 100">
            {/* Hat / hair tuft */}
            <path d="M18 38 Q46 4 74 38 Z" fill="#7dd3fc" />
            <circle cx="46" cy="14" r="6" fill="#fbbf24" />
            {/* Face */}
            <ellipse cx="46" cy="56" rx="34" ry="36" fill="#ffd9b8" stroke="#e8a472" strokeWidth="1.5" />
            {/* Cheeks */}
            <circle cx="22" cy="64" r="6" fill="#fb7185" opacity="0.55" />
            <circle cx="70" cy="64" r="6" fill="#fb7185" opacity="0.55" />
            {/* Sunglasses bar */}
            <rect x="14" y="46" width="64" height="3" fill="#1f2937" rx="1.5" />
            {/* Eyes (sunglasses lenses) */}
            <g>
              <ellipse cx="32" cy="52" rx="10" ry="8" fill="#1f2937" />
              <ellipse cx="60" cy="52" rx="10" ry="8" fill="#1f2937" />
              {/* Reflective pupils that follow cursor */}
              <motion.circle cx="32" cy="52" r="2.6" fill="#fef3c7" style={{ x: spX, y: spY }} />
              <motion.circle cx="60" cy="52" r="2.6" fill="#fef3c7" style={{ x: spX, y: spY }} />
              <circle cx="29" cy="49" r="1" fill="white" opacity="0.9" />
              <circle cx="57" cy="49" r="1" fill="white" opacity="0.9" />
            </g>
            {/* Mustache */}
            <path d="M30 70 Q38 76 46 72 Q54 76 62 70 Q56 74 46 74 Q36 74 30 70 Z" fill="#3f2d20" />
            {/* Mouth — animates between chewing and biting */}
            <motion.ellipse
              cx="46"
              cy={biting ? 84 : 80}
              rx={biting ? 11 : 7}
              ry={biting ? 9 : chewing ? 3 : 2}
              fill="#7c2d3a"
              animate={
                biting
                  ? { rx: [7, 13, 7], ry: [3, 10, 3] }
                  : { ry: [2, 3.5, 2], rx: [6, 7.5, 6] }
              }
              transition={{
                duration: biting ? 0.6 : 0.5,
                repeat: biting ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Tongue when biting */}
            {biting && (
              <motion.ellipse
                cx="46"
                cy="86"
                rx="5"
                ry="3"
                fill="#fb7185"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </svg>
        </motion.div>

        {/* Speech bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: biting ? 1 : 0, scale: biting ? 1 : 0.6 }}
          transition={{ duration: 0.25 }}
          className="absolute -top-7 -left-10 bg-white text-xs font-display font-bold text-primary px-3 py-1 rounded-full shadow-md pointer-events-none whitespace-nowrap"
        >
          Yum! 🍦
        </motion.div>
      </div>
    </motion.div>
  );
}
