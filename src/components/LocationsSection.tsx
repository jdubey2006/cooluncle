import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const locations = [
  {
    city: "Indore",
    address: "G-1 Ankur Palace, Opposite Pind Baluchi, Scheme No.54, Vijay Nagar",
    rating: "4.3",
    reviews: "999+",
    highlights: ["Lounge & Cafe", "Dine-in", "Delivery"],
    hours: "12:30 PM – 11:00 PM",
  },
  {
    city: "Indore",
    address: "33-34, Main 56 Dukan Street, Near 56 Dukan",
    rating: "4.0",
    reviews: "54",
    highlights: ["Ice Cream", "Waffles", "Pancakes", "Fast Food"],
    hours: "All Day",
  },
  {
    city: "Dewas",
    address: "50, Shivshakti Nagar, Near Beema Hospital, Dewas Locality",
    rating: "3.9",
    reviews: "413",
    highlights: ["Desserts", "Café", "Delivery"],
    hours: "11:00 AM – 11:00 PM",
  },
];

export default function LocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locations" ref={ref} className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Find Us</span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mt-4">
            Visit <span className="text-gradient">Cool Uncle</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="floating-card rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{loc.city}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="text-primary">★</span> {loc.rating} · {loc.reviews} reviews
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{loc.address}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {loc.highlights.map((h) => (
                  <span key={h} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {h}
                  </span>
                ))}
              </div>

              <div className="text-xs text-muted-foreground border-t border-border pt-3">
                🕐 {loc.hours}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Franchise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-panel inline-block rounded-2xl px-8 py-6">
            <h3 className="font-display text-xl font-semibold mb-2">Franchise Opportunities</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Expanding across Maharashtra, Rajasthan, MP, Gujarat & more. Investment starts at ₹5 Lac.
            </p>
            <span className="neon-border rounded-full px-6 py-2 text-sm text-foreground inline-block">
              Lifetime Agreement · No Royalty
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
