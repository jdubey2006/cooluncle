import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const flavors = [
  { name: "Belgian Chocolate", emoji: "🍫", description: "Rich, velvety dark chocolate crafted with premium Belgian cocoa", color: "oklch(0.4 0.1 50)" },
  { name: "Zafrani Pista", emoji: "🌰", description: "Royal saffron-infused pistachio with crushed nuts", color: "oklch(0.6 0.15 140)" },
  { name: "Strawberry Farm", emoji: "🍓", description: "Fresh farm strawberries blended into creamy perfection", color: "oklch(0.65 0.22 10)" },
  { name: "Butterscotch Praline", emoji: "🍯", description: "Caramelized butterscotch with crunchy praline bits", color: "oklch(0.7 0.15 80)" },
  { name: "Mango Real", emoji: "🥭", description: "Alphonso mangoes churned into tropical bliss", color: "oklch(0.8 0.18 90)" },
  { name: "Red Velvet", emoji: "🎂", description: "Luxurious red velvet cake swirled into ice cream", color: "oklch(0.55 0.2 20)" },
  { name: "American Nuts", emoji: "🥜", description: "Roasted almonds, cashews & walnuts in creamy base", color: "oklch(0.5 0.08 70)" },
  { name: "Paan Ice Cream", emoji: "🍃", description: "Traditional betel leaf flavor with a refreshing twist", color: "oklch(0.55 0.15 150)" },
  { name: "Rose Petal", emoji: "🌹", description: "Delicate Gulkand rose petals in velvety cream", color: "oklch(0.7 0.18 350)" },
];

const sundaes = [
  { name: "Chocolate Love", emoji: "❤️" },
  { name: "Brazil Chocolate", emoji: "🇧🇷" },
  { name: "Strawberry Swirl", emoji: "🌀" },
  { name: "Birthday Special", emoji: "🎉" },
  { name: "Fruit Magic", emoji: "✨" },
  { name: "Oreo Sundae", emoji: "🖤" },
];

export default function FlavorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="flavors" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Signature</span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mt-4">
            <span className="text-gradient">Legendary</span> Flavors
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            30+ handcrafted flavors made with love in Indore, served across Central India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flavors.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="floating-card rounded-2xl p-6 cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {flavor.emoji}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{flavor.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{flavor.description}</p>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${flavor.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Sundaes row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-center font-display text-2xl font-semibold mb-8 text-foreground">
            Signature Sundaes
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {sundaes.map((s) => (
              <div
                key={s.name}
                className="glass-panel rounded-full px-5 py-2.5 flex items-center gap-2 hover:neon-glow transition-shadow duration-500 cursor-pointer"
              >
                <span>{s.emoji}</span>
                <span className="text-sm text-foreground">{s.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
