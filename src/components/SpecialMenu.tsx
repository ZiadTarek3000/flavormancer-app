import SpecialMenuCards from "./SpecialMenuCards";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SpecialMenuCardData {
  id: number;
  img: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
}

export default function SpecialMenu() {
  const [menuData, setMenuData] = useState<SpecialMenuCardData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/menuData")
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.error("Error fetching menuData:", err));
  }, []);

  return (
    <section className="py-10 flex flex-col gap-12 text-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id='special-menu'
        className="font-bold text-black
          text-2xl
          sm:text-3xl
          lg:text-4xl"
      >
        SPECIAL MENU
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl mx-auto text-gray-600"
      >
        Some of our special menu is given here. These are what people order
        more. If you want you can order from here.
      </motion.p>

      {/* Cards Grid */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-14
          justify-items-center
        "
      >
        {menuData.length > 0 ? (
          menuData.map((item, i) => {
            const direction =
              i % 3 === 0 ? "left" : i % 3 === 1 ? "bottom" : "right";

            return (
              <SpecialMenuCards
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
                direction={direction}
              />
            );
          })
        ) : (
          <p className="col-span-full text-gray-500">Loading special menu...</p>
        )}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <Dot className="text-green-500 w-8 h-8" />
        <Dot className="text-gray-400 w-8 h-8" />
        <Dot className="text-gray-400 w-8 h-8" />
        <Dot className="text-gray-400 w-8 h-8" />
      </div>
    </section>
  );
}
