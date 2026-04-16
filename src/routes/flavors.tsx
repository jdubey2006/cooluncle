import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const iceCreamFlavors = [
  { name: "Vanilla", emoji: "🍦", desc: "Classic creamy vanilla bean" },
  { name: "Strawberry Farm", emoji: "🍓", desc: "Fresh farm strawberries" },
  { name: "Rich Chocolate", emoji: "🍫", desc: "Deep dark chocolate" },
  { name: "Tutti Frutti", emoji: "🍬", desc: "Colorful fruity bits" },
  { name: "Butterscotch Praline", emoji: "🍯", desc: "Caramelized with praline" },
  { name: "Pina Lemon", emoji: "🍋", desc: "Tangy tropical blend" },
  { name: "Chocolate Chips", emoji: "🍪", desc: "Choco chip loaded" },
  { name: "Mellow Jello", emoji: "🟡", desc: "Soft jelly swirls" },
  { name: "Fruit Punch", emoji: "🍹", desc: "Tropical fruit mix" },
  { name: "Kaju Anjeer", emoji: "🥜", desc: "Cashew fig delight" },
  { name: "Black Currant", emoji: "🫐", desc: "Berry-rich and vibrant" },
  { name: "Zafrani Pista", emoji: "🌰", desc: "Royal saffron pistachio" },
  { name: "Mango Real", emoji: "🥭", desc: "Alphonso mango bliss" },
  { name: "Raj Bhog", emoji: "🟠", desc: "Traditional Indian sweet" },
  { name: "Choco Crums", emoji: "🍩", desc: "Chocolate cookie crumbs" },
  { name: "American Nuts", emoji: "🥜", desc: "Roasted mixed nuts" },
  { name: "Paan", emoji: "🍃", desc: "Refreshing betel leaf" },
  { name: "Rose Petal", emoji: "🌹", desc: "Delicate gulkand rose" },
  { name: "Kaju Kishmish", emoji: "🍇", desc: "Cashew raisin combo" },
  { name: "Belgian Chocolate", emoji: "🍫", desc: "Premium Belgian cocoa" },
  { name: "Chocolate Fruit & Nut", emoji: "🌰", desc: "Fruity nutty chocolate" },
  { name: "Fruit Cocktail", emoji: "🍒", desc: "Mixed fruit medley" },
  { name: "Sitafal Fresh", emoji: "🍈", desc: "Custard apple special" },
  { name: "Cream N Cookies", emoji: "🍪", desc: "Cookies and cream" },
  { name: "Mud Chocolate", emoji: "🟤", desc: "Intensely rich mud" },
  { name: "Chocolate Milestone", emoji: "🏆", desc: "Our signature chocolate" },
  { name: "Thandai Badam", emoji: "🥛", desc: "Festive almond thandai" },
  { name: "Red Velvet", emoji: "🎂", desc: "Luxurious red velvet" },
  { name: "American Blue", emoji: "💙", desc: "Bubblegum blue blast" },
  { name: "Badam Kulfi", emoji: "🍡", desc: "Traditional almond kulfi" },
];

const sundaes = [
  { name: "Chocolate Love", emoji: "❤️" },
  { name: "Brazil Chocolate", emoji: "🇧🇷" },
  { name: "Chocolate Tower", emoji: "🗼" },
  { name: "Choco N Brownie", emoji: "🍫" },
  { name: "Strawberry Swirl", emoji: "🌀" },
  { name: "Nutty Nut", emoji: "🥜" },
  { name: "Valentine 2K", emoji: "💕" },
  { name: "Birthday Special", emoji: "🎉" },
  { name: "Chocolate Mani", emoji: "🍬" },
  { name: "Joker G", emoji: "🃏" },
  { name: "Fruit Magic", emoji: "✨" },
  { name: "Rose Ice Mountain", emoji: "🏔️" },
  { name: "Top 3", emoji: "🏅" },
  { name: "Bada Gems", emoji: "💎" },
  { name: "Oreo Sundae", emoji: "🖤" },
];

const cafeItems = [
  { cat: "Pizza", items: ["Rich Cheese", "Golden Corn", "Tandoori Paneer", "Fully Loaded", "Paneer Makhani"] },
  { cat: "Burgers", items: ["Aloo Tikki", "Indori", "Spicy", "Veggie", "Paneer"] },
  { cat: "More", items: ["French Fries", "Masala Fries", "Classic Maggi", "Butter Maggi", "Cheesy Maggi"] },
];

export const Route = createFileRoute("/flavors")({
  component: FlavorsPage,
  head: () => ({
    meta: [
      { title: "All Flavors | Cool Uncle Ice Cream" },
      { name: "description", content: "Explore 30+ handcrafted ice cream flavors, signature sundaes, and café menu at Cool Uncle." },
      { property: "og:title", content: "All Flavors | Cool Uncle Ice Cream" },
      { property: "og:description", content: "30+ handcrafted flavors from Belgian Chocolate to Rose Petal. Find your new favorite!" },
    ],
  }),
});

function SectionHeader({ badge, title, subtitle }: { badge: string; title: React.ReactNode; subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <span className="scoop-badge inline-block mb-4">{badge}</span>
      <h2 className="font-display text-3xl sm:text-5xl font-bold">{title}</h2>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto">{subtitle}</p>
    </div>
  );
}

function FlavorsPage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const in1 = useInView(ref1, { once: true, margin: "-50px" });
  const in2 = useInView(ref2, { once: true, margin: "-50px" });
  const in3 = useInView(ref3, { once: true, margin: "-50px" });

  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4 mb-16"
      >
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold">
          Our <span className="candy-text">Magical</span> Menu
        </h1>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Every flavor is a little adventure, handcrafted with love in Indore 🍦
        </p>
      </motion.div>

      {/* Ice Cream Grid */}
      <section ref={ref1} className="px-4 max-w-7xl mx-auto mb-24">
        <SectionHeader
          badge="🍦 Ice Cream"
          title={<>30+ <span className="candy-text">Handcrafted</span> Flavors</>}
          subtitle="From classic vanilla to exotic Sitafal — we've got it all"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {iceCreamFlavors.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 15 }}
              animate={in1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: Math.min(i * 0.03, 0.6), ease: [0.34, 1.56, 0.64, 1] }}
              className="candy-card p-4 text-center group cursor-default"
            >
              <motion.span
                className="text-2xl sm:text-3xl block mb-2"
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                {f.emoji}
              </motion.span>
              <h3 className="font-display text-xs sm:text-sm font-semibold leading-tight">{f.name}</h3>
              <p className="text-[10px] text-muted-foreground mt-1 hidden sm:block">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sundaes */}
      <section ref={ref2} className="px-4 max-w-6xl mx-auto mb-24 bg-cream/30 py-16 rounded-3xl">
        <SectionHeader
          badge="🍨 Sundaes"
          title={<>Signature <span className="candy-text">Sundaes</span></>}
          subtitle="Towering creations that are almost too pretty to eat"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {sundaes.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={in2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <motion.span
                whileHover={{ scale: 1.08 }}
                className="scoop-badge text-sm cursor-default inline-flex"
              >
                {s.emoji} {s.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cafe Menu */}
      <section ref={ref3} className="px-4 max-w-5xl mx-auto">
        <SectionHeader
          badge="🍕 Café"
          title={<>Not Just <span className="candy-text">Ice Cream</span></>}
          subtitle="Pizzas, burgers, maggi, fries & more — full café experience"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {cafeItems.map((cat, i) => (
            <motion.div
              key={cat.cat}
              initial={{ opacity: 0, y: 20 }}
              animate={in3 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="candy-card p-6"
            >
              <h3 className="font-display text-lg font-bold mb-4 candy-text">{cat.cat}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
