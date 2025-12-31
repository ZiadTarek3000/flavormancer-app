import { Soup, ShieldCheck, Van } from 'lucide-react'
import ChooseUsCards from './ChooseUsCards'
import { motion } from 'framer-motion'

export default function ChooseUs() {
  const cards = [
    {
      icon: Soup,
      title: "Serve Healthy Food",
      desc: "We serve all healthy food here. You can choose any food you like.",
      direction: "left"
    },
    {
      icon: ShieldCheck,
      title: "Best Quality",
      desc: "Our food quality is excellent. You will get exactly what you want here.",
      direction: "bottom"
    },
    {
      icon: Van,
      title: "Fast Delivery",
      desc: "You can say the main goal of our delivery man is to deliver orders quickly and recieve it shortly.",
      direction: "right"
    }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-15 text-center flex flex-col gap-6 sm:gap-8">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          font-bold text-black
          text-2xl
          sm:text-3xl
          lg:text-4xl
        "
      >
        WHY CHOOSE US?
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="
          max-w-xl
          mx-auto
          text-gray-600
          text-sm
          sm:text-base
        "
      >
        You choose us because you get the best quality food from us and we deliver fast.
      </motion.p>

      {/* Cards Grid */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        lg:gap-8
        mt-8
        place-items-center
      ">
        {cards.map((card, i) => (
          <ChooseUsCards
            key={i}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            direction={card.direction}
          />
        ))}
      </div>
    </section>
  )
}




