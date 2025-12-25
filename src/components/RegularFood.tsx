import RegularFoodCards from "./RegularFoodCards";
import { Dot } from 'lucide-react';
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
        fetch('http://localhost:3001/regularFood')
          .then(res => res.json())
          .then(data => setRegularFood(data))
          .catch(err => console.error("Error fetching regularFood:", err));
      }, []);


  return (
    <section className="py-24 text-center flex flex-col gap-8">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-black">
        OUR REGULAR FOOD
      </h2>

      <div className="flex flex-col gap-12">

        {/* Description */}
        <div className="w-md mx-auto mt-auto mb-20 text-gray-500">
          This is our daily food list. Here you will find all kinds of food.
          Choose your favorite food and order.
        </div>

        {/* Cards */}
        <div className="flex flex-col justify-between gap-10">

          <div className="flex flex-row justify-between mb-20">
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
                <p className="w-full text-center text-gray-500">Loading special menu...</p>
                )}
          </div>

          
          <div className="flex flex-row justify-between">
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
                <p className="w-full text-center text-gray-500">Loading special menu...</p>
                )}
          </div>

        </div>

        <div className="flex items-center justify-center">
            <Dot className="text-green-500 w-20 h-20" />
            <Dot className="text-gray-400 w-20 h-20" />
            <Dot className="text-gray-400 w-20 h-20" />
            <Dot className="text-gray-400 w-20 h-20" />
        </div>
      </div>
    </section>
  );
}

