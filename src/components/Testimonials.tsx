import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <SectionHeading
        eyebrow="Kind words"
        title="Loved by"
        highlight="thousands"
        subtitle="Don't just take our word for it — here's what our community has to say about their Flavormancer experience."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col rounded-3xl border border-brand-100 bg-white p-6 shadow-card transition-shadow hover:shadow-glow"
          >
            <Quote className="h-9 w-9 text-brand-200 transition-colors group-hover:text-brand-400" />

            <div className="mt-3 flex text-spice-400">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-spice-400" />
              ))}
            </div>

            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
              "{t.quote}"
            </blockquote>

            <figcaption className="mt-5 flex items-center gap-3 border-t border-dashed border-ink/10 pt-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-11 w-11 rounded-full border-2 border-brand-100 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink/50">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
