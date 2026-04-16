import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

const links = [
  { label: "Flavors", to: "/flavors" as const },
  { label: "Our Story", to: "/about" as const },
  { label: "Locations", to: "/locations" as const },
  { label: "Contact", to: "/contact" as const },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-4 gap-10">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Cool Uncle" className="w-12 h-12" />
              <div>
                <h3 className="font-display text-xl font-bold candy-text">Cool Uncle</h3>
                <p className="text-xs text-muted-foreground">A brand by Parmeshwari Ice Cream Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Serving happiness since 2009. Premium handcrafted ice creams and café delights
              from the heart of Indore, loved across Central India 🍦
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4">Explore</h4>
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📞 +91 98063 55187</p>
              <p>📍 Vijay Nagar, Indore</p>
              <p>📍 Dewas, MP</p>
              <p className="mt-3">Order on Zomato & Swiggy</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cool Uncle Ice Cream. Made with 💖
          </p>
          <div className="flex gap-2">
            {["🍓", "🍫", "🥭", "🌹", "🍦"].map((e, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.3, rotate: 15 }}
                className="cursor-default text-lg"
              >
                {e}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
