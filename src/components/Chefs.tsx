import { motion } from "framer-motion";
import { Instagram, ChefHat } from "lucide-react";
import { chefs } from "../data";
import SectionHeading from "./SectionHeading";

export default function Chefs() {
  return (
    <section
      id="chefs"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <SectionHeading
        eyebrow="The talent"
        title="Meet our"
        highlight="master chefs"
        subtitle="The passionate hands behind every plate — each a specialist in their own craft, united by a love of great food."
      />

      <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
        {chefs.map((chef, i) => (
          <motion.article
            key={chef.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-brand-100 shadow-card"
          >
            <img
              src={chef.img}
              alt={chef.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

            <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-brand-700 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Instagram className="h-4 w-4" />
            </span>

            <div className="absolute inset-x-0 bottom-0 p-4 text-left">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                <ChefHat className="h-3 w-3" />
                {chef.specialty}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">
                {chef.name}
              </h3>
              <p className="text-sm text-white/70">{chef.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
