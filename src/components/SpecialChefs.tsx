import ChefCard from "./ChefCard";
import chef from "../assets/chef.jpg"

export default function SpecialChefs() {
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

        {/* Left */}
        <ChefCard img={chef} />

        {/* Middle (lower) */}
        <ChefCard img={chef} offset />

        {/* Right */}
        <ChefCard img={chef} />

      </div>
    </section>
  );
}
