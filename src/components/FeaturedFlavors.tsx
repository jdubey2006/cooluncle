import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";

const featuredFlavors = [
  { name: "Belgian Chocolate", emoji: "🍫", color: "oklch(0.5 0.1 50)" },
  { name: "Strawberry Farm", emoji: "🍓", color: "oklch(0.65 0.2 10)" },
  { name: "Mango Real", emoji: "🥭", color: "oklch(0.8 0.18 90)" },
  { name: "Zafrani Pista", emoji: "🌰", color: "oklch(0.6 0.15 140)" },
  { name: "Rose Petal", emoji: "🌹", color: "oklch(0.7 0.18 350)" },
  { name: "Butterscotch", emoji: "🍯", color: "oklch(0.7 0.15 80)" },
];

export default function FeaturedFlavors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="scoop-badge mb-4 inline-block">✨ Fan Favorites</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-4">
            Our <span className="candy-text">Signature</span> Scoops
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Handcrafted with love, each flavor is a little adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {featuredFlavors.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="candy-card p-5 sm:p-6 text-center cursor-pointer group"
            >
              <motion.span
                className="text-4xl sm:text-5xl block mb-3"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {flavor.emoji}
              </motion.span>
              <h3 className="font-display text-sm sm:text-base font-semibold text-foreground">
                {flavor.name}
              </h3>
              <div
                className="mt-3 mx-auto w-8 h-1 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"
                style={{ background: flavor.color }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link to="/flavors" className="candy-btn-outline text-sm inline-block">
            View All 30+ Flavors →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
