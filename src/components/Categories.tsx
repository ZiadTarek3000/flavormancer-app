import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data";
import SectionHeading from "./SectionHeading";

export default function Categories() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <SectionHeading
        eyebrow="Browse by craving"
        title="Explore our"
        highlight="categories"
        subtitle="From fiery street food to comforting classics, find exactly what your taste buds are calling for."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <motion.article
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 text-center shadow-card transition-shadow hover:shadow-glow"
          >
            <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-brand-100/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="absolute right-4 top-4 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
              {cat.tag}
            </span>

            <div className="relative mt-2">
              <div className="absolute inset-0 scale-110 rounded-full bg-brand-200/50 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src={cat.img}
                alt={cat.title}
                className="relative h-32 w-32 rounded-full border-4 border-brand-100 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:border-brand-300"
              />
            </div>

            <h3 className="mt-5 font-display text-xl font-semibold text-ink">
              {cat.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/55">
              {cat.desc}
            </p>

            <div className="mt-5 flex w-full items-center justify-between border-t border-dashed border-ink/10 pt-4">
              <span className="text-sm text-ink/50">
                from{" "}
                <span className="text-lg font-bold text-brand-700">
                  ${cat.price.toFixed(2)}
                </span>
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
