import SpecialMenuCards from "./SpecialMenuCards";
import food_dish from "../assets/food_dish.jpg"
import { Dot } from 'lucide-react';

export default function SpecialMenu() {
  return (
    
    <section className="py-24 text-center flex flex-col gap-8">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-black">SPECIAL MENU</h2>


      <div className="flex flex-col gap-22">
          <div className='w-md m-auto'>
             Some of our special menu is given here. These are what people order more. If you want you can order from here.
          </div>

          <div className='flex flex-row justify-around'>

            <SpecialMenuCards
              img={food_dish}
              title="Chicken Burger"
              desc="This is an excellent chicken burger that is very healty"
              price={5.80} 
            />


             <SpecialMenuCards
               img={food_dish}
               title="Chicken Burger"
               desc="This is an excellent chicken burger that is very healty"
               price={5.80} 
              />


             <SpecialMenuCards
               img={food_dish}
               title="Chicken Burger"
               desc="This is an excellent chicken burger that is very healty"
               price={5.80} 
              />

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