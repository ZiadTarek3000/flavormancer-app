import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface SpecialMenuCardsProps {
  img: string;
  title: string;
  desc?: string;
  price: number;
  rating: number;
  reviews: number;
  direction?: "left" | "right" | "bottom";
}

export default function SpecialMenuCards({
  img,
  title,
  desc,
  price,
  rating,
  reviews,
  direction = "bottom",
}: SpecialMenuCardsProps) {

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "bottom" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6 }, 
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="
        relative
        w-80
        h-80
        bg-white
        rounded-2xl
        shadow-lg
        p-5
        flex
        flex-col
        justify-end
        overflow-visible
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div
        className="
          absolute
          -top-8
          right-6
          w-40
          h-40
          bg-white
          rounded-full
          border-4
          border-green-500
          overflow-hidden
          flex
          items-center
          justify-center
          shadow-md
        "
      >
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-10 flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-900 text-start">
          {title}
        </h3>

        {desc && (
          <p className="text-sm text-gray-500 text-start">
            {desc}
          </p>
        )}

        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <div className="text-yellow-500 flex text-lg mr-2">
                {"★".repeat(rating)}
              </div>
              <span className="text-sm text-gray-500">
                ({reviews})
              </span>
            </div>

            <p className="text-3xl text-start text-gray-500">
              ${price.toFixed(2)}
            </p>
          </div>

          <button
            className="
              w-16
              h-16
              bg-green-500
              rounded-xl
              flex
              items-center
              justify-center
              transition
              hover:bg-green-600
            "
            aria-label="Add to cart"
          >
            <ShoppingCart className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}


