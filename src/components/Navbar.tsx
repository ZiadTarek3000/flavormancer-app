import { ShoppingBag, Search, Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "Menu", id: "special-menu" },
  { label: "Why Us", id: "why-choose" },
  { label: "Chefs", id: "chefs" },
  { label: "Reviews", id: "testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const navHeight = document.querySelector("nav")?.offsetHeight ?? 0;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navHeight -
      12;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="home"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-brand-100 shadow-[0_8px_30px_-18px_rgba(15,29,23,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleScroll("home")}
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          Flavormancer
        </motion.button>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                onMouseEnter={() => setActive(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === item.id
                    ? "text-brand-700"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          {[Search, ShoppingBag].map((Icon, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.12, rotate: i === 1 ? -6 : 0 }}
              whileTap={{ scale: 0.9 }}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white/70 text-ink shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600 sm:flex"
            >
              <Icon className="h-4 w-4" />
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("special-menu")}
            className="hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-[0_18px_40px_-12px_rgba(3,152,85,0.7)] sm:block"
          >
            Order Now
          </motion.button>

          <motion.button
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white/70 text-ink lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-brand-100 glass lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-base font-semibold text-ink/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="mt-2"
              >
                <button
                  onClick={() => handleScroll("special-menu")}
                  className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-3 text-center text-base font-semibold text-white shadow-glow"
                >
                  Order Now
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
