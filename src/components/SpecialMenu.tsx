import SpecialMenuCards from "./SpecialMenuCards";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";

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
    <section className="py-24 flex flex-col gap-12 text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-black">
        SPECIAL MENU
      </h2>

      {/* Description */}
      <p className="max-w-xl mx-auto text-gray-600">
        Some of our special menu is given here. These are what people order more.
        If you want you can order from here.
      </p>

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
          menuData.map((item) => (
            <SpecialMenuCards
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              rating={item.rating}
              reviews={item.reviews}
            />
          ))
        ) : (
          <p className="col-span-full text-gray-500">
            Loading special menu...
          </p>
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
