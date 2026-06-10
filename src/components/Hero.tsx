import { motion } from "framer-motion";
import { MoveRight, Play, Star, Truck } from "lucide-react";
import { orbitImages } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.21, 0.61, 0.35, 1] as const,
    },
  }),
};

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-300/40 blur-3xl animate-blob" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-spice-400/30 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 backdrop-blur"
          >
            <Star className="h-3.5 w-3.5 fill-spice-400 text-spice-400" />
            Rated 4.9 by 12,000+ foodies
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl xl:text-7xl text-balance"
          >
            Taste the
            <span className="text-gradient"> magic</span> in every single bite
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/60 sm:text-lg"
          >
            Handcrafted dishes from world-class chefs, made with farm-fresh
            ingredients and delivered to your door while it's still sizzling.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("special-menu")}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-base font-semibold text-white shadow-glow"
            >
              Explore Menu
              <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("chefs")}
              className="group flex items-center gap-3 rounded-full border border-ink/15 bg-white/60 px-6 py-3.5 text-base font-semibold text-ink backdrop-blur transition-colors hover:border-brand-300"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white transition-transform group-hover:scale-110">
                <Play className="h-4 w-4 fill-white" />
              </span>
              Meet the Chefs
            </motion.button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {["/images/chef.jpg", "/images/chef3.jpg", "/images/chef6.jpg", "/images/chef4.jpg"].map(
                (src) => (
                  <img
                    key={src}
                    src={src}
                    alt="Happy customer"
                    className="h-11 w-11 rounded-full border-2 border-cream object-cover"
                  />
                )
              )}
            </div>
            <div className="text-left">
              <div className="flex text-spice-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-spice-400" />
                ))}
              </div>
              <p className="text-sm font-medium text-ink/60">
                Loved by 48,000+ hungry customers
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[440px] sm:w-[440px]"
        >
          <div className="absolute inset-6 rounded-full border border-dashed border-brand-300/60 animate-spin-slow" />
          <div className="absolute inset-16 rounded-full border border-dashed border-spice-400/50 animate-spin-slow-reverse" />

          <div className="absolute inset-0 animate-spin-slow">
            {orbitImages.map((img, i) => {
              const angle = (i * 360) / orbitImages.length;
              const radius = 170;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              return (
                <motion.div
                  key={img}
                  className="absolute h-20 w-20 sm:h-24 sm:w-24"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                >
                  <div className="h-full w-full animate-spin-slow-reverse">
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full rounded-full border-4 border-white object-cover shadow-card"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-48 w-48 animate-float-y sm:h-60 sm:w-60"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 blur-2xl opacity-30" />
            <img
              src="/images/food_dish.jpg"
              alt="Signature dish"
              className="relative h-full w-full rounded-full border-[6px] border-white object-cover shadow-glow"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -left-2 top-10 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:left-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <Truck className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-sm font-bold text-ink">15 min</p>
              <p className="text-xs text-ink/50">Avg. delivery</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -right-2 bottom-12 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:right-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-spice-500/15 text-spice-600">
              <Star className="h-5 w-5 fill-spice-500" />
            </span>
            <div className="text-left">
              <p className="text-sm font-bold text-ink">4.9 / 5</p>
              <p className="text-xs text-ink/50">12k+ reviews</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("categories")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mx-auto mt-14 hidden flex-col items-center gap-2 text-ink/40 lg:flex"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-ink/20 p-1"
        >
          <span className="h-2 w-1 rounded-full bg-brand-500" />
        </motion.span>
      </motion.button>
    </section>
  );
}
