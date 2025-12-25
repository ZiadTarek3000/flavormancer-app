import SpecialMenuCards from "./SpecialMenuCards";
import { Dot } from 'lucide-react';
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
      fetch('http://localhost:3001/menuData')
        .then(res => res.json())
        .then(data => setMenuData(data))
        .catch(err => console.error("Error fetching menuData:", err));
    }, []);
  return (
    
    <section className="py-24 text-center flex flex-col gap-8">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-black">SPECIAL MENU</h2>


      <div className="flex flex-col gap-22">
          <div className='w-md m-auto'>
             Some of our special menu is given here. These are what people order more. If you want you can order from here.
          </div>

          <div className='flex flex-row justify-around'>

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
                        <p className="w-full text-center text-gray-500">Loading special menu...</p>
                      )}

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