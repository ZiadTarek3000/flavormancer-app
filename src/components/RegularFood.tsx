import RegularFoodCards from "./RegularFoodCards";
import food_dish from "../assets/food_dish.jpg"
import { Dot } from 'lucide-react';

export default function RegularFood() {
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
            <RegularFoodCards
            img={food_dish}
            title="Salads"
            desc="This is a great green salad that is very healthy. You can eat it with any meal."
            price={3.50}
            reviews={169}
          />

          <RegularFoodCards
            img={food_dish}
            title="Salads"
            desc="This is a great green salad that is very healthy. You can eat it with any meal."
            price={3.50}
            reviews={169}
          />

          <RegularFoodCards
            img={food_dish}
            title="Salads"
            desc="This is a great green salad that is very healthy. You can eat it with any meal."
            price={3.50}
            reviews={169}
          />
          </div>

          
          <div className="flex flex-row justify-between">
            <RegularFoodCards
            img={food_dish}
            title="Salads"
            desc="This is a great green salad that is very healthy. You can eat it with any meal."
            price={3.50}
            reviews={169}
          />

          <RegularFoodCards
            img={food_dish}
            title="Salads"
            desc="This is a great green salad that is very healthy. You can eat it with any meal."
            price={3.50}
            reviews={169}
          />

          <RegularFoodCards
            img={food_dish}
            title="Salads"
            desc="This is a great green salad that is very healthy. You can eat it with any meal."
            price={3.50}
            reviews={169}
          />
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

