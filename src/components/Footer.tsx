import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: (isDesktop) => ({
    opacity: 0,
    x: isDesktop ? -40 : 0,
    y: isDesktop ? 0 : 30,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  const ref = useRef(null);
  const controls = useAnimationControls();

  const isInView = useInView(ref, {
    margin: "-80px", 
  });

  const isDesktop =
    typeof window !== "undefined" && window.innerWidth >= 1024;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); 
    }
  }, [isInView, controls]);

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-[#eaf5df] w-full mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="
            grid
            gap-10
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {[
            {
              title: "Menu",
              items: [
                "Home",
                "Why Choose",
                "Special Menu",
                "Regular Food",
                "Special Chef’s",
              ],
            },
            {
              title: "Help",
              items: ["Privacy", "Terms & Condition", "Policy"],
            },
            {
              title: "Contact",
              items: [
                "+123 456 789",
                "Info@Foodied.Com",
                "1245, New York, USA",
              ],
            },
            {
              title: "Subscribe Our Newsletter",
              newsletter: true,
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              custom={isDesktop}
              variants={itemVariants}
              className="text-center sm:text-left"
            >
              <h3 className="text-xl font-semibold mb-4 text-black">
                {section.title}
              </h3>

              {section.items && (
                <ul className="space-y-2 text-gray-700">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {section.newsletter && (
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="
                      w-full px-4 py-2.5 rounded-lg border
                      border-gray-300 bg-white text-gray-800
                      focus:outline-none focus:border-[#7bbf5a]
                      focus:ring-2 focus:ring-[#7bbf5a]/30
                    "
                  />
                  <button
                    className="
                      bg-[#7bbf5a] text-white px-6 py-2.5
                      rounded-lg hover:bg-[#6aac4f]
                      transition whitespace-nowrap
                    "
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center text-sm text-gray-600"
        >
          © 2025 Foodied. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;







