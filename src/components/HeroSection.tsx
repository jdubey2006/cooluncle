import { motion } from "framer-motion";

const words = ["Cool", "Uncle", "—", "Where", "Every", "Scoop", "Tells", "a", "Story"];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 80%, oklch(0.15 0.08 300 / 40%) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-body">
            Est. 2009 · Indore & Dewas
          </span>
        </motion.div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.8 + i * 0.12,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`inline-block mr-[0.25em] ${
                word === "Cool" || word === "Uncle" ? "text-gradient" : "text-foreground"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-body"
        >
          Premium ice creams, sundaes & café delights crafted in the heart of Central India.
          Over 300+ dealers strong, serving joy since 2009.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a
            href="#flavors"
            className="neon-border rounded-full px-8 py-3 text-sm font-medium text-foreground hover:shadow-[0_0_30px_oklch(0.75_0.25_340_/_30%)] transition-shadow duration-500"
          >
            Explore Flavors
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll to Enter</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
