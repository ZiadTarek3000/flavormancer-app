import { motion } from "framer-motion";

interface ChefCardProps {
  img: string;
  offset?: boolean;
  direction?: "left" | "right" | "bottom";
  index?: number;
}

export default function ChefCard({ img, offset = false, direction = "bottom", index = 0 }: ChefCardProps) {
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
      transition: { duration: 0.6, delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={`
        relative
        rounded-3xl
        overflow-hidden
        flex
        items-end
        justify-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl

        w-full
        max-w-xs
        aspect-3/5

        ${offset ? "lg:mt-12" : ""}
      `}
    >
      <img
        src={img}
        alt="Chef"
        className="
          w-full
          h-full
          object-contain
          transition-transform
          duration-300
          hover:scale-105
        "
      />
    </motion.div>
  );
}


