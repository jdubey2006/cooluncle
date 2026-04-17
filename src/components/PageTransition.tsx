import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import { ReactNode } from "react";

/**
 * Wraps page content with an ice-cream-themed enter/exit animation
 * keyed by the current pathname.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, scale: 0.98, filter: "blur(6px)" }}
        transition={{ duration: 0.55, ease: [0.34, 1.2, 0.64, 1] }}
      >
        {children}
        {/* Sweep overlay */}
        <motion.div
          className="fixed inset-0 z-[80] pointer-events-none"
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, oklch(0.97 0.04 350 / 0.85) 45%, oklch(0.95 0.06 90 / 0.85) 55%, transparent 100%)",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
