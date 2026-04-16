import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Cool Uncle Ice Cream" },
      { name: "description", content: "Get in touch with Cool Uncle Ice Cream. Franchise inquiries, feedback, or just to say hello!" },
      { property: "og:title", content: "Contact Us | Cool Uncle Ice Cream" },
      { property: "og:description", content: "Reach out to Cool Uncle for franchise opportunities, feedback, or general inquiries." },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4 mb-16"
      >
        <span className="scoop-badge mb-4 inline-block">💌 Say Hello</span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold">
          Let's <span className="candy-text">Connect</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Franchise inquiries, feedback, or just want to say hello — we'd love to hear from you!
        </p>
      </motion.div>

      <div className="px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { emoji: "📍", title: "Main Office", value: "G-1 Ankur Palace, Scheme No.54,\nVijay Nagar, Indore, MP 452010" },
              { emoji: "📞", title: "Phone", value: "+91 98063 55187" },
              { emoji: "🕐", title: "Hours", value: "12:30 PM – 11:00 PM Daily" },
              { emoji: "📱", title: "Order Online", value: "Available on Zomato & Swiggy" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="candy-card p-5 flex gap-4 items-start"
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h3 className="font-display text-sm font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line mt-1">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="candy-card p-10 text-center h-full flex flex-col items-center justify-center"
              >
                <span className="text-5xl mb-4 block">🎉</span>
                <h3 className="font-display text-2xl font-bold candy-text mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We'll get back to you soon with a scoop of love 🍦</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="candy-card p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label className="font-display text-sm font-semibold block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="What should we call you?"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
                <div>
                  <label className="font-display text-sm font-semibold block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
                <div>
                  <label className="font-display text-sm font-semibold block mb-2">Topic</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-muted-foreground"
                  >
                    <option>General Inquiry</option>
                    <option>Franchise Inquiry</option>
                    <option>Feedback</option>
                    <option>Partnership</option>
                    <option>Bulk Orders</option>
                  </select>
                </div>
                <div>
                  <label className="font-display text-sm font-semibold block mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  />
                </div>
                <button type="submit" className="candy-btn w-full text-sm">
                  Send Message 💕
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
