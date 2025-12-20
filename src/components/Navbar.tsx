import { ShoppingBag , Search } from 'lucide-react';
import { useState } from "react";

function Navbar() {

  const [active, setActive] = useState("Home");
  const items = ["Home", "Menu", "About Us", "Contact"];  
  return (
    <nav className="w-full flex justify-between py-2 px-2 items-center">
      <h2 className="font-bold text-black text-4xl">FLAVORMANCER</h2>

      <ul className="hidden md:flex gap-10 text-black font-bold">
      {items.map((item) => (
        <li
          key={item}
          onMouseEnter={() => setActive(item)}   
          onMouseLeave={() => setActive("Home")} 
          className={`
            cursor-pointer transition-all duration-200
            ${active === item ? "text-blue-600" : "text-black"}
            hover:text-blue-600
          `}
        >
          {item}
        </li>
      ))}
    </ul>

      <div className="flex items-center gap-4">
        <div className='border-10 rounded-full border-green-500 bg-green-500'>
            <Search className='text-white'/>
        </div>

        <div className='border-10 rounded-full border-green-500 bg-green-500'>
            <ShoppingBag className='text-white'/>
        </div>
        <button className="bg-green-500 hover:bg-[#f9f9f9] transition-colors duration-300 ease-in-out text-white hover:text-black hover:border hover:border-black py-2.5 px-8 rounded-full">Sign Up</button>


      </div>
    </nav>
  )
}

export default Navbar