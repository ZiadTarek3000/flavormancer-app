import { motion } from "framer-motion";
import { MoveRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-ink px-6 py-14 text-center shadow-glow sm:px-12 lg:py-20"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-brand-400/30 blur-3xl animate-blob" />
          <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-spice-500/30 blur-3xl animate-blob [animation-delay:-7s]" />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/90 backdrop-blur">
            Hungry yet?
          </span>

          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl text-balance">
            Your next favorite meal is just one tap away
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70">
            Order in seconds, track it in real time, and taste the magic before
            you know it. No subscriptions, no fuss — just great food, fast.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() =>
                document
                  .getElementById("special-menu")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2 rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink shadow-lg"
            >
              Start Your Order
              <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <a
              href="tel:+123456789"
              className="flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              +123 456 789
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
