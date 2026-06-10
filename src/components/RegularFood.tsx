import { regularFood } from "../data";
import SectionHeading from "./SectionHeading";
import DishCard from "./DishCard";

export default function RegularFood() {
  return (
    <section
      id="regular-food"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-spice-400/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Everyday favorites"
          title="Our regular"
          highlight="daily menu"
          subtitle="Honest, hearty meals priced for every day — because great food shouldn't be reserved for special occasions."
        />

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {regularFood.map((item, i) => (
            <DishCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
