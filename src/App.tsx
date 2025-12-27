import { useEffect, useState } from "react";
import "./App.css";
import CategoryCard from "./components/CategoryCard";
import Hungry from "./components/Hungry";
import Navbar from "./components/Navbar";
import ChooseUs from "./components/ChooseUs";
import SpecialMenu from "./components/SpecialMenu";
import RegularFood from "./components/RegularFood";
import SpecialChefs from "./components/SpecialChefs";
import Footer from "./components/Footer";

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
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* ===== Navbar (Full Width) ===== */}
      <Navbar />

      {/* ===== Main Content (Container) ===== */}
      <main className="container mx-auto px-4 flex flex-col gap-12">
        {/* Hero Section */}
        <Hungry />

        {/* Categories */}
        <section className="w-full flex flex-wrap justify-center lg:justify-between gap-6">
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
            <p className="w-full text-center text-gray-500">
              Loading delicious food...
            </p>
          )}
        </section>

        {/* Why Choose Us */}
        <ChooseUs />

        {/* Special Menu */}
        <SpecialMenu />

        {/* Regular Food */}
        <RegularFood />

        {/* Chefs */}
        <SpecialChefs />
      </main>

      {/* ===== Footer (Full Width) ===== */}
      <Footer />
    </div>
  );
}

export default App;
