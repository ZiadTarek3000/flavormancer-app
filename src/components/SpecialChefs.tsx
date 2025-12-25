import ChefCard from "./ChefCard";
import { useEffect, useState } from "react";

interface ChefData {
  id: number;
  img: string;
  offset: boolean;
}


export default function SpecialChefs() {

  const [chefs, setChefs] = useState<ChefData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/chefs")
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(err => console.error("Error fetching chefs:", err));
  }, []);

  
  return (
    <section className="py-24 text-center flex flex-col gap-8">

      {/* Title */}
      <h2 className="text-4xl font-extrabold text-black">
        OUR SPECIAL CHEF’s
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        Featured below are some of our special chefs who work
        to prepare your meals
      </p>

      {/* Cards */}
      <div className="flex justify-center gap-16 mt-16">

        {chefs.map((chef) => (
          <ChefCard
            key={chef.id}
            img={chef.img}
            offset={chef.offset}
          />
        ))}

      </div>
    </section>
  );
}
