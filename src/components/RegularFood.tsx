import RegularFoodCards from "./RegularFoodCards";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface RegularFoodCardData {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
  rating: number;
  reviews: number;
}

export default function RegularFood() {
  const [regularFood, setRegularFood] = useState<RegularFoodCardData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/regularFood")
      .then((res) => res.json())
      .then((data) => setRegularFood(data))
      .catch((err) =>
        console.error("Error fetching regularFood:", err)
      );
  }, []);

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.section
      className="py-24 flex flex-col gap-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        OUR REGULAR FOOD
      </motion.h2>

      <motion.p
        className="max-w-xl mx-auto text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        This is our daily food list. Here you will find all kinds of food.
        Choose your favorite food and order.
      </motion.p>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center mt-12"
        variants={gridVariants}
      >
        {regularFood.length > 0 ? (
          regularFood.map((item) => (
            <RegularFoodCards
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              rating={item.rating}
              reviews={item.reviews}
            />
          ))
        ) : (
          <p className="col-span-full text-gray-500">
            Loading regular food...
          </p>
        )}
      </motion.div>

      {/* Dots */}
      <motion.div
        className="flex items-center justify-center gap-2 mt-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <Dot className="text-green-500 w-8 h-8" />
        <Dot className="text-gray-400 w-8 h-8" />
        <Dot className="text-gray-400 w-8 h-8" />
        <Dot className="text-gray-400 w-8 h-8" />
      </motion.div>
    </motion.section>
  );
}

