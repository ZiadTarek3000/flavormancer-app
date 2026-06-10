import { motion } from "framer-motion";
import { features } from "../data";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-spice-500/30 blur-3xl animate-blob [animation-delay:-8s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-ring" />
            Why choose us
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl text-balance">
            Crafted with care,
            <span className="text-gradient"> served with love</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-cream/60">
            We obsess over every detail so every meal feels like an occasion —
            here's what sets the Flavormancer kitchen apart.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-brand-400/50"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-500/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="relative mt-6 font-display text-xl font-semibold text-cream">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-cream/55">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
