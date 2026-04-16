import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-bg.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Our Story | Cool Uncle Ice Cream" },
      { name: "description", content: "Born in Indore in 2009, Cool Uncle is Central India's favorite ice cream brand with 300+ dealers. Discover our journey." },
      { property: "og:title", content: "Our Story | Cool Uncle Ice Cream" },
      { property: "og:description", content: "From a single store in Indore to 300+ dealers — the Cool Uncle story." },
    ],
  }),
});

const timeline = [
  { year: "2009", title: "The First Scoop", desc: "Cool Uncle opens its first store in the heart of Indore, Madhya Pradesh." },
  { year: "2012", title: "Growing Sweetly", desc: "Expanded to Dewas and started dealer partnerships across Central India." },
  { year: "2015", title: "Hotel Partnerships", desc: "Partnered with Radisson Blu, Fortune Landmark, and The Grand Bhagwati." },
  { year: "2018", title: "Café Launch", desc: "Launched the Lounge & Cafe concept — pizza, burgers, shakes, sundaes and more." },
  { year: "2020", title: "300+ Dealers", desc: "Reached the 300-dealer milestone across Maharashtra, Rajasthan, Gujarat, and beyond." },
  { year: "2024", title: "Franchise Expansion", desc: "Opened franchise opportunities across 11+ states with zero royalty model." },
];

const partners = ["Radisson Blu", "Fortune Landmark", "The Grand Bhagwati", "Barista", "Café Coffee Day", "O2 Café"];

function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4 mb-16"
      >
        <span className="scoop-badge mb-4 inline-block">🏠 Our Story</span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold">
          The <span className="candy-text">Cool Uncle</span> Story
        </h1>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          From a dream in Indore to Central India's most loved ice cream brand
        </p>
      </motion.div>

      {/* Image + Intro */}
      <section className="px-4 max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-[0_16px_48px_oklch(0.72_0.17_350_/_15%)]"
          >
            <img src={aboutImg} alt="Cool Uncle Shop" className="w-full h-auto" loading="lazy" width={1200} height={800} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-5">
              A Family of <span className="candy-text">Happiness</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cool Uncle Ice Cream was born in 2009 in the vibrant city of Indore.
                A brand of <strong>Parmeshwari Ice Cream Pvt. Ltd.</strong>, it started with a simple
                belief — that ice cream should bring pure, unadulterated joy.
              </p>
              <p>
                Today, with over <strong>300 dealers</strong> across Central India, we serve not just
                ice cream but a complete lounge experience — from sundaes and faloodas to pizzas
                and burgers.
              </p>
              <p>
                Our sister brands include <strong>The Golden Scoop</strong>, and we proudly partner
                with India's top hotels and cafés 💕
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={ref} className="px-4 max-w-4xl mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="scoop-badge inline-block mb-4">📅 Our Journey</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            A <span className="candy-text">Sweet</span> Timeline
          </h2>
        </div>

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="candy-card p-5 flex gap-5 items-start"
            >
              <div className="font-display text-2xl font-bold candy-text shrink-0">{item.year}</div>
              <div>
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="px-4 max-w-4xl mx-auto bg-cream/50 rounded-3xl py-12 text-center">
        <span className="scoop-badge inline-block mb-4">🤝 Trusted By</span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
          Our <span className="candy-text">Partners</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p) => (
            <span key={p} className="scoop-badge">{p}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
