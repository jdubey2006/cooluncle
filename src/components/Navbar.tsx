import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Flavors", to: "/flavors" as const },
  { label: "Our Story", to: "/about" as const },
  { label: "Locations", to: "/locations" as const },
  { label: "Contact", to: "/contact" as const },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-card/90 backdrop-blur-xl shadow-[0_4px_24px_oklch(0.72_0.17_350_/_12%)]"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoImg} alt="Cool Uncle" className="w-9 h-9 group-hover:scale-110 transition-transform" />
            <span className="font-display text-lg font-bold candy-text">Cool Uncle</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                activeProps={{ className: "!text-primary !bg-primary/10" }}
                activeOptions={{ exact: link.to === "/" }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-all duration-300 hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              animate={menuOpen ? "open" : "closed"}
            >
              <motion.path
                d="M3 5h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M3 5h12" },
                  open: { d: "M4 4l10 10" },
                }}
              />
              <motion.path
                d="M3 9h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.path
                d="M3 13h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M3 13h12" },
                  open: { d: "M4 14L14 4" },
                }}
              />
            </motion.svg>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-card/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_oklch(0_0_0_/_10%)] p-3 border border-border"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    activeProps={{ className: "!text-primary !bg-primary/10" }}
                    activeOptions={{ exact: link.to === "/" }}
                    className="block px-4 py-3 text-sm font-medium text-foreground rounded-xl hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
