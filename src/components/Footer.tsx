import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const menuLinks = [
  { label: "Home", target: "home" },
  { label: "Categories", target: "categories" },
  { label: "Special Menu", target: "special-menu" },
  { label: "Regular Food", target: "regular-food" },
  { label: "Our Chefs", target: "chefs" },
];

const helpLinks = ["Privacy Policy", "Terms & Conditions", "FAQ", "Support"];

const socials = [Instagram, Facebook, Twitter, Youtube];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <footer id="footer" className="relative overflow-hidden bg-ink pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-display text-2xl font-bold text-cream">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              Flavormancer
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">
              Handcrafted dishes from world-class chefs, delivered fresh and
              fast. Taste the magic in every bite — one order at a time.
            </p>

            <div className="mt-6 space-y-3 text-sm text-cream/60">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-400" />
                1245 Flavor Street, New York, USA
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-400" />
                hello@flavormancer.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-400" />
                +123 456 789
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/60">
              {menuLinks.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="transition-colors hover:text-brand-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Help
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/60">
              {helpLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-brand-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Stay in the loop
            </h3>
            <p className="mt-5 text-sm text-cream/55">
              Get exclusive offers and fresh menu drops straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 focus-within:border-brand-400">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSent(false);
                  }}
                  placeholder="Your email"
                  className="w-full bg-transparent px-3 py-1.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  type="submit"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-brand-700 text-white"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs font-medium text-brand-300"
                >
                  You're in! Watch your inbox for tasty news.
                </motion.p>
              )}
            </form>

            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream/70 transition-colors hover:border-brand-400 hover:text-brand-300"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-cream/45 sm:flex-row">
          <p>© 2026 Flavormancer. All rights reserved.</p>
          <p>Crafted with care & a pinch of magic.</p>
        </div>
      </div>
    </footer>
  );
}
