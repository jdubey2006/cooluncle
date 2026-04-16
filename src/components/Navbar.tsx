import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Flavors", href: "#flavors" },
  { label: "Story", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < 100 || current < lastScroll);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
        >
          <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-6">
            <span className="text-gradient font-display text-lg font-bold tracking-tight">
              Cool Uncle
            </span>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              className="md:hidden text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass-panel rounded-2xl mt-2 p-4 md:hidden flex flex-col gap-2"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
