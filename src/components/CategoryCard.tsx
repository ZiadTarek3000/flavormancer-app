import { motion } from "framer-motion";

interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
  price: number;
}

const cardVariants = {
  hidden: (isMobile: boolean) => ({
    y: isMobile ? 20 : 30,
    opacity: 0,
  }),
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function CategoryCard({
  img,
  title,
  desc,
  price,
}: CategoryCardProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div
      custom={isMobile}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-xl rounded-3xl p-6 w-64 text-center transition-all"
    >
      {/* Circle Image */}
      <div className="w-36 h-36 mx-auto rounded-full border-[6px] border-green-500 overflow-hidden flex items-center justify-center shadow-md">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mt-5">{title}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2 mx-6 leading-relaxed">{desc}</p>

      {/* Price + Button */}
      <div className="flex justify-center items-center gap-4 mt-5">
        <div className="px-4 py-1.5 border border-gray-600 rounded-full font-semibold text-sm">
          ${price.toFixed(2)}
        </div>
      </div>
    </motion.div>
  );
}
