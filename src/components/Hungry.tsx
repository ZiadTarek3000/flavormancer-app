import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

function Hungry() {
  /* ===== Orbit Images (from public) ===== */
  const orbitImages = [
    "/images/lettuce.png",
    "/images/beef-slices.png",
    "/images/union-rings.png",
    "/images/paper-slices.png",
    "/images/potato-slices.png",
  ];

  /* ===== Text Animations ===== */
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[520px] text-center lg:text-left"
      >
        <motion.h1
          custom={0}
          variants={textVariants}
          className="
            font-bold mb-6
            text-2xl sm:text-3xl md:text-4xl
            lg:text-5xl xl:text-6xl
          "
        >
          JUST COME TO FLAVORMANCER & ORDER
        </motion.h1>

        <motion.p
          custom={1}
          variants={textVariants}
          className="
            text-gray-600 mb-8
            text-sm sm:text-base md:text-lg
          "
        >
          Here You Will Find The Best Quality And Pure Food. Order Now To
          Satisfy Your Hunger Pangs.
        </motion.p>

        <motion.div
          custom={2}
          variants={buttonVariants}
          className="flex gap-4 justify-center lg:justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("special-menu")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
    bg-[#f9f9f9] border border-black
    hover:bg-green-500 hover:border-0 hover:text-white
    transition-colors duration-300
    text-black py-2 px-8 rounded-full
    flex items-center gap-2
  "
          >
            Explore More <MoveRight size={18} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ===== Image Section ===== */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[350px] h-[350px]"
      >
        {/* Orbit Images */}
        <motion.div className="absolute inset-0 rotate-animation">
          {orbitImages.map((img, i) => {
            const angle = (i * 360) / orbitImages.length;
            const radius = 135;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.img
                key={i}
                src={img}
                alt=""
                className="
                  w-20 h-20
                  rounded-full
                  absolute
                "
                style={{
                  top: `calc(50% + ${y}px - 40px)`,
                  left: `calc(50% + ${x}px - 40px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.15 }}
              />
            );
          })}
        </motion.div>

        {/* Center Image */}
        <motion.img
          src="/images/food_dish.jpg"
          alt=""
          className="
            w-[180px] h-[180px]
            rounded-full
            absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            shadow-xl
            z-10
          "
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </motion.div>
    </section>
  );
}

export default Hungry;
