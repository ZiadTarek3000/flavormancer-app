import { ShoppingBag, Search, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [active, setActive] = useState("Home")
  const [menuOpen, setMenuOpen] = useState(false)

  const items = ["Home", "Menu", "About Us", "Contact"]
  const extraMobileItems = ["Search", "Cart", "Sign Up"]

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full relative z-50"
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-3">

        {/* Logo */}
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="font-bold text-black text-xl sm:text-2xl lg:text-3xl cursor-pointer"
        >
          FLAVORMANCER
        </motion.h2>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-4 xl:gap-6 2xl:gap-10 font-bold">
          {items.map((item) => (
            <motion.li
              key={item}
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive("Home")}
              whileHover={{ y: -2 }}
              className={`relative cursor-pointer transition-colors
                ${active === item ? "text-blue-600" : "text-black"}
              `}
            >
              {item}
              <span
                className={`
                  absolute left-0 -bottom-1 h-0.5 bg-blue-600
                  transition-all duration-300
                  ${active === item ? "w-full" : "w-0"}
                `}
              />
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">

          {[Search, ShoppingBag].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-green-500 hidden sm:flex cursor-pointer"
            >
              <Icon className="text-white w-4 h-4" />
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              hidden sm:block
              bg-green-500 text-white
              hover:bg-[#f9f9f9] hover:text-black hover:border hover:border-black
              transition-colors
              text-sm
              py-2 px-4
              rounded-full
              cursor-pointer
            "
          >
            Sign Up
          </motion.button>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            {menuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              lg:hidden
              absolute top-full left-0 w-full
              bg-white shadow-lg border-t
              z-50
            "
          >
            <ul
              className="
                container mx-auto
                px-6 py-4
                flex flex-col gap-4
                font-bold
              "
            >
              {/* Main mobile links */}
              {items.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setActive(item)
                    setMenuOpen(false)
                  }}
                  className="cursor-pointer hover:text-green-600"
                >
                  {item}
                </motion.li>
              ))}

              {/* Extra mobile items (sm only) */}
              {extraMobileItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: (items.length + index) * 0.05,
                  }}
                  className="sm:hidden cursor-pointer hover:text-green-600"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

