import { specialMenu } from "../data";
import SectionHeading from "./SectionHeading";
import DishCard from "./DishCard";

export default function SpecialMenu() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        id="special-menu"
        eyebrow="Most loved"
        title="This week's"
        highlight="special menu"
        subtitle="The dishes our regulars can't stop ordering — plated to perfection and bursting with flavor."
      />

      <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {specialMenu.map((item, i) => (
          <DishCard key={item.id} item={item} index={i} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
