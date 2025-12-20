import './App.css'
import CategoryCard from './components/CategoryCard'
import Hungry from './components/Hungry'
import Navbar from './components/Navbar'
import food_dish from "../src/assets/food_dish.jpg"
import ChooseUs from './components/ChooseUs' ;
import SpecialMenu from './components/SpecialMenu'
import RegularFood from './components/RegularFood'
import SpecialChefs from './components/SpecialChefs'
import Footer from './components/Footer'

function App() {


  return (
    <div>
      <div className='container flex flex-col gap-10 overflow-hidden'>
        <Navbar />
        <Hungry />
        <div className='w-full flex justify-between py-2 px-2 items-center'>
          <CategoryCard
           img={food_dish}
           title="Chicken Burger"
           desc="This is an excellent chicken burger that is very healty"
           price={5.80}
          />

          <CategoryCard
           img={food_dish}
           title="Chicken Burger"
           desc="This is an excellent chicken burger that is very healty"
           price={5.80}
          />

          <CategoryCard
           img={food_dish}
           title="Chicken Burger"
           desc="This is an excellent chicken burger that is very healty"
           price={5.80}
          />

          <CategoryCard
           img={food_dish}
           title="Chicken Burger"
           desc="This is an excellent chicken burger that is very healty"
           price={5.80}
          />
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
