import ChefCard from "./ChefCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ChefData {
  id: number;
  img: string;
  offset: boolean;
}

export default function SpecialChefs() {
  const [chefs, setChefs] = useState<ChefData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((err) =>
        console.error("Error fetching chefs:", err)
      );
  }, []);

  const getDirection = (index: number, total: number) => {
    if (total === 1) return "bottom";
    if (index === 0) return "left";
    if (index === total - 1) return "right";
    return "bottom";
  };

  return (
    <section className="py-10 flex flex-col gap-10 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bold text-black
          text-2xl
          sm:text-3xl
          lg:text-4xl"
      >
        OUR SPECIAL CHEF’s
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-500 max-w-xl mx-auto"
      >
        Featured below are some of our special chefs who work to prepare your meals
      </motion.p>

      {/* Cards Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-16
          justify-items-center
          mt-16
        "
      >
        {chefs.map((chef, i) => {
          const direction = getDirection(i, chefs.length);
          return (
            <ChefCard
              key={chef.id}
              img={chef.img}
              offset={chef.offset}
              direction={direction}
              index={i} 
            />
          );
        })}
      </div>
    </section>
  );
}


