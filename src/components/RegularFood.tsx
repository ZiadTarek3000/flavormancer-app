import RegularFoodCards from "./RegularFoodCards";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";

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

  return (
    <section className="py-24 flex flex-col gap-12 text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-black">
        OUR REGULAR FOOD
      </h2>

      {/* Description */}
      <p className="max-w-xl mx-auto text-gray-500">
        This is our daily food list. Here you will find all kinds of food.
        Choose your favorite food and order.
      </p>

      {/* Cards Grid */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-16
          justify-items-center
          mt-12
        "
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


