import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" ref={ref} className="relative py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gradient">Cool Uncle</h2>
          <p className="text-muted-foreground mt-3 text-sm">
            A brand by Parmeshwari Ice Cream Pvt. Ltd.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h4 className="font-display text-sm font-semibold mb-3 text-foreground">Indore HQ</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              G-1 Ankur Palace, Opp. Pind Baluchi,<br/>
              Scheme No.54, Vijay Nagar,<br/>
              Indore, MP 452010
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-3 text-foreground">Dewas</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              50, Shivshakti Nagar,<br/>
              Near Beema Hospital,<br/>
              Dewas, MP
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-3 text-foreground">Connect</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              📞 +91 98063 55187<br/>
              Order on Zomato & Swiggy<br/>
              Franchise inquiries welcome
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cool Uncle Ice Cream. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
