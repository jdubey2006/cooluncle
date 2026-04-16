import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-bg.jpg";

const words = ["Every", "Scoop", "Tells", "a", "Sweet", "Story"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Dreamy background image */}
      <div className="absolute inset-0 z-[1]">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, oklch(0.98 0.005 20 / 60%), oklch(0.98 0.005 20 / 95%))" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-4"
        >
          <span className="scoop-badge text-sm">
            🍦 Est. 2009 · Indore & Dewas
          </span>
        </motion.div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.6 + i * 0.1,
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className={`inline-block mr-[0.2em] ${
                word === "Sweet" || word === "Story" ? "candy-text" : "text-foreground"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed"
        >
          Premium handcrafted ice creams, dreamy sundaes & café delights — 
          lovingly made in the heart of Central India since 2009 🍨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/flavors" className="candy-btn text-sm">
            🍦 Explore Flavors
          </Link>
          <Link to="/about" className="candy-btn-outline text-sm">
            Our Story →
          </Link>
        </motion.div>

        {/* Fun stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto"
        >
          {[
            { value: "300+", label: "Dealers" },
            { value: "30+", label: "Flavors" },
            { value: "15+", label: "Years" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-center"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold candy-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-muted-foreground">Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-primary text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
