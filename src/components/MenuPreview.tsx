import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";

const menuCategories = [
  { name: "Ice Cream", emoji: "🍦", count: "30+ flavors", color: "bg-strawberry/10" },
  { name: "Sundaes", emoji: "🍨", count: "15+ varieties", color: "bg-peach/10" },
  { name: "Shakes & Drinks", emoji: "🥤", count: "Fresh & creamy", color: "bg-blueberry/10" },
  { name: "Pizza & More", emoji: "🍕", count: "Cafe favorites", color: "bg-mint/10" },
];

export default function MenuPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 bg-cream/50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="scoop-badge mb-4 inline-block">🍴 Our Menu</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-4">
            More Than Just <span className="candy-text">Ice Cream</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="candy-card p-6 text-center"
            >
              <motion.span
                className="text-4xl block mb-3"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                {cat.emoji}
              </motion.span>
              <h3 className="font-display text-sm font-semibold">{cat.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{cat.count}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10"
        >
          <Link to="/flavors" className="candy-btn text-sm inline-block">
            See Full Menu 🍰
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
