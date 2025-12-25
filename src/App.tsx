import { useEffect, useState } from 'react'
import './App.css'
import CategoryCard from './components/CategoryCard'
import Hungry from './components/Hungry'
import Navbar from './components/Navbar'
import ChooseUs from './components/ChooseUs' 
import SpecialMenu from './components/SpecialMenu'
import RegularFood from './components/RegularFood'
import SpecialChefs from './components/SpecialChefs'
import Footer from './components/Footer'


interface CategoryData {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
}

function App() {
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div>
      <div className='container flex flex-col gap-10 overflow-hidden'>
        <Navbar />
        <Hungry />
        
  
        <div className='w-full flex flex-wrap justify-between py-2 px-2 items-center gap-4'>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                img={cat.img}
                title={cat.title}
                desc={cat.desc}
                price={cat.price}
              />
            ))
          ) : (
            <p className="w-full text-center text-gray-500">Loading delicious food...</p>
          )}
        </div>

        <ChooseUs />
        <SpecialMenu />
        <RegularFood />
        <SpecialChefs />
        <Footer />
      </div>
    </div>
  )
}

export default App
