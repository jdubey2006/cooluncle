import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-bg.jpg";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_48px_oklch(0.72_0.17_350_/_15%)]">
              <img
                src={aboutImg}
                alt="Cool Uncle Ice Cream Shop"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="scoop-badge mb-4 inline-block">🏠 Since 2009</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Born in <span className="candy-text">Indore</span>,<br />
              Loved Everywhere
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              What began as a single scoop shop in the heart of Indore has grown into Central India's
              most beloved ice cream brand — with 300+ dealers and partnerships with Radisson Blu,
              Fortune Landmark, Barista, and Café Coffee Day.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We're not just ice cream — we're sundaes, faloodas, shakes, pizzas, burgers, and
              a whole lot of happiness 💕
            </p>
            <Link to="/about" className="candy-btn text-sm inline-block mt-6">
              Read Our Story →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
