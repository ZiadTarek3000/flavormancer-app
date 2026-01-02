import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface RegularFoodCardProps {
  img: string;
  title: string;
  desc: string;
  price: number;
  rating: number;
  reviews: number;
}

export default function RegularFoodCards({
  img,
  title,
  desc,
  price,
  rating,
  reviews,
}: RegularFoodCardProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        relative
        bg-white
        shadow-xl
        rounded-3xl
        px-6
        pt-24
        pb-8
        flex
        flex-col
        items-center
        text-center
        max-w-sm
        w-full
        mt-10
      "
    >
      {/* Image */}
      <div className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        w-40
        h-40
        rounded-full
        border-4
        border-green-500
        overflow-hidden
        bg-white
        flex
        items-center
        justify-center
        shadow-md
      ">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mt-2">{title}</h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2 text-yellow-500">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={14} fill="#facc15" stroke="#facc15" />
        ))}
        <span className="text-gray-400 text-sm ml-1">({reviews})</span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-3 leading-relaxed">{desc}</p>

      {/* Price + Button */}
      <div className="flex items-center gap-4 mt-6">
        <span className="px-4 py-1 border border-gray-600 rounded-full font-semibold text-sm">
          ${price.toFixed(2)}
        </span>
      </div>
    </motion.div>
  );
}



