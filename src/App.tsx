import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Categories from "./components/Categories";
import WhyChooseUs from "./components/WhyChooseUs";
import SpecialMenu from "./components/SpecialMenu";
import RegularFood from "./components/RegularFood";
import Chefs from "./components/Chefs";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-cream text-ink">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <div className="pt-16 sm:pt-20">
          <Stats />
        </div>
        <Categories />
        <WhyChooseUs />
        <SpecialMenu />
        <RegularFood />
        <Chefs />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
