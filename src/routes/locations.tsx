import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Our Locations | Cool Uncle Ice Cream" },
      { name: "description", content: "Find Cool Uncle Ice Cream in Indore and Dewas. Visit our stores or explore franchise opportunities." },
      { property: "og:title", content: "Our Locations | Cool Uncle Ice Cream" },
      { property: "og:description", content: "Visit Cool Uncle in Indore and Dewas. Franchise opportunities across 11+ states." },
    ],
  }),
});

const locations = [
  {
    city: "Indore",
    name: "Cool Uncle Lounge & Cafe",
    address: "G-1 Ankur Palace, Opposite Pind Baluchi, Scheme No.54, Vijay Nagar, Indore, MP 452010",
    rating: "4.3",
    reviews: "999+",
    highlights: ["Lounge & Cafe", "Dine-in", "Delivery"],
    hours: "12:30 PM – 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Cool+Uncle+Ice+Cream+Vijay+Nagar+Indore",
    emoji: "🏪",
  },
  {
    city: "Indore",
    name: "Cool Uncle 56 Dukan",
    address: "33-34, Main 56 Dukan Street, Near 56 Dukan, Indore, MP 452001",
    rating: "4.0",
    reviews: "54",
    highlights: ["Ice Cream", "Waffles", "Pancakes", "Fast Food"],
    hours: "All Day",
    mapUrl: "https://maps.google.com/?q=Cool+Uncle+56+Dukan+Indore",
    emoji: "🍦",
  },
  {
    city: "Dewas",
    name: "Cool Uncle Icecream",
    address: "50, Shivshakti Nagar, Near Beema Hospital, Dewas Locality, Dewas, MP",
    rating: "3.9",
    reviews: "413",
    highlights: ["Desserts", "Café", "Delivery"],
    hours: "11:00 AM – 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Cool+Uncle+Icecream+Dewas",
    emoji: "🍨",
  },
];

const expansionStates = [
  "Maharashtra", "Rajasthan", "Madhya Pradesh", "Haryana", "Chhattisgarh",
  "Daman & Diu", "Andhra Pradesh", "Goa", "Punjab", "Uttar Pradesh", "Gujarat",
];

function LocationsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4 mb-16"
      >
        <span className="scoop-badge mb-4 inline-block">📍 Find Us</span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold">
          Visit <span className="candy-text">Cool Uncle</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Come say hi! We're waiting with your favorite scoop 🍦
        </p>
      </motion.div>

      {/* Location Cards */}
      <section ref={ref} className="px-4 max-w-5xl mx-auto mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              className="candy-card p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{loc.emoji}</span>
                <div>
                  <h3 className="font-display text-lg font-bold">{loc.city}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="text-amber-400">★</span> {loc.rating} · {loc.reviews} reviews
                  </div>
                </div>
              </div>

              <p className="text-sm font-semibold mb-1">{loc.name}</p>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed flex-1">{loc.address}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {loc.highlights.map((h) => (
                  <span key={h} className="scoop-badge text-xs">{h}</span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                <span>🕐 {loc.hours}</span>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Directions →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Franchise */}
      <section className="px-4 max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="candy-card p-8 sm:p-10 text-center"
        >
          <span className="text-4xl mb-4 block">🏗️</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            <span className="candy-text">Franchise</span> Opportunities
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Join the Cool Uncle family! Investment starting at ₹5 Lac.
            Lifetime agreement. Zero royalty fees.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {expansionStates.map((s) => (
              <span key={s} className="scoop-badge text-xs">{s}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✅ No Royalty</span>
            <span>✅ Training Provided</span>
            <span>✅ Marketing Support</span>
            <span>✅ 300-1000 sq ft</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
