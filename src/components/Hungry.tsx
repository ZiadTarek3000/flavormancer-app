import food_dish from "../assets/food_dish.jpg";
import { MoveRight } from "lucide-react";

function Hungry() {
  return (
    <section
      className="
        px-4 py-12
        flex flex-col-reverse lg:flex-row
        items-center justify-between
        gap-14 sm:gap-16 lg:gap-10
      "
    >
      {/* ===== Text Section ===== */}
      <div className="max-w-[520px] text-center lg:text-left">
        <h1
          className="
            font-bold mb-6
            text-2xl sm:text-3xl md:text-4xl
            lg:text-5xl xl:text-6xl
          "
        >
          JUST COME TO FLAVORMANCER & ORDER
        </h1>

        <p
          className="
            text-gray-600 mb-8
            text-sm sm:text-base md:text-lg
          "
        >
          Here You Will Find The Best Quality And Pure Food. Order Now To
          Satisfy Your Hunger Pangs.
        </p>

        <div
          className="
            flex gap-4
            justify-center lg:justify-start
          "
        >
          <button
            className="
              bg-green-500 hover:bg-[#f9f9f9]
              transition-colors duration-300
              text-white hover:text-black
              hover:border hover:border-black
              py-2 px-8 rounded-full
              w-fit
            "
          >
            Order Now
          </button>

          <button
            className="
              bg-[#f9f9f9] border border-black
              hover:bg-green-500 hover:border-0 hover:text-white
              transition-colors duration-300
              text-black py-2 px-8 rounded-full
              flex items-center gap-2
              w-fit
            "
          >
            Explore More <MoveRight size={18} />
          </button>
        </div>
      </div>

      {/* ===== Image Section (UNCHANGED) ===== */}
      <div className="relative w-[350px] h-[350px]">
        <div className="absolute inset-0 rotate-animation">
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 360) / 8;
            const radius = 140;

            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <img
                key={i}
                src={food_dish}
                className="w-20 h-20 rounded-full absolute"
                style={{
                  top: `calc(50% + ${y}px - 40px)`,
                  left: `calc(50% + ${x}px - 40px)`,
                }}
                alt=""
              />
            );
          })}
        </div>

        <img
          src={food_dish}
          className="
            w-[180px] h-[180px]
            rounded-full absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            shadow-lg
          "
          alt=""
        />
      </div>
    </section>
  );
}

export default Hungry;
