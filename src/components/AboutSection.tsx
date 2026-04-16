import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2009", label: "Founded" },
  { value: "300+", label: "Dealers" },
  { value: "30+", label: "Flavors" },
  { value: "2", label: "Cities" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.25 300 / 10%) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Story</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Born in <span className="text-gradient">Indore</span>,<br />
              Loved Across India
            </h2>
            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cool Uncle made its debut in the heart of Indore back in 2009. What started
                as a single store has blossomed into a beloved brand with 300+ dealers across
                Central India.
              </p>
              <p>
                Part of Parmeshwari Ice Cream Pvt. Ltd., we serve not just ice cream but a
                complete lounge experience — pizzas, burgers, sundaes, faloodas, kulfi, shakes,
                and much more.
              </p>
              <p>
                From prestigious hotels like Radisson Blu and Fortune Landmark to popular cafés
                across Indore and Dewas — Cool Uncle is everywhere joy is served.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="floating-card rounded-2xl p-6 text-center"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Also Serving */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="font-display text-2xl font-semibold mb-8">Beyond Ice Cream</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Pizza", "Burgers", "Sandwiches", "Nachos", "Maggi", "Coffee", "Shakes", "Falooda", "Matka Kulfi", "Mocktails", "Sundaes", "Juices"].map((item) => (
              <span
                key={item}
                className="glass-panel rounded-full px-5 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
