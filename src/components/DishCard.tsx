import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";
import type { MenuItem } from "../data";

interface DishCardProps {
  item: MenuItem;
  index: number;
  featured?: boolean;
}

export default function DishCard({ item, index, featured = false }: DishCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card transition-shadow hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-60" />

        <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-spice-400 text-spice-400" />
          {item.rating}.0
          <span className="font-medium text-ink/50">({item.reviews})</span>
        </span>

        {featured && (
          <span className="absolute right-4 top-4 rounded-full bg-spice-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
            Chef's Special
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-ink">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">
          {item.desc}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-brand-700">
              ${item.price.toFixed(2)}
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2.5 text-sm font-semibold text-white shadow-glow"
            aria-label={`Add ${item.title} to cart`}
          >
            <Plus className="h-4 w-4" />
            Add
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
