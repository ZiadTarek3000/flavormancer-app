import { ShoppingBag, Search, Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [active, setActive] = useState("Home")
  const [menuOpen, setMenuOpen] = useState(false)

  const items = ["Home", "Menu", "About Us", "Contact"]

  return (
    <nav className="w-full relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">

        {/* Logo */}
        <h2 className="font-bold text-black text-xl sm:text-2xl lg:text-3xl">
          FLAVORMANCER
        </h2>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-4 xl:gap-6 2xl:gap-10 font-bold">
          {items.map((item) => (
            <li
              key={item}
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive("Home")}
              className={`
                cursor-pointer transition-all duration-200
                ${active === item ? "text-blue-600" : "text-black"}
                hover:text-blue-600
              `}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Desktop only */}
          <div className="p-2 rounded-full bg-green-500 hidden sm:flex">
            <Search className="text-white w-4 h-4" />
          </div>

          <div className="p-2 rounded-full bg-green-500 hidden sm:flex">
            <ShoppingBag className="text-white w-4 h-4" />
          </div>

          <button
            className="
              hidden sm:block
              bg-green-500 text-white
              hover:bg-[#f9f9f9] hover:text-black hover:border hover:border-black
              transition-colors
              text-sm
              py-2 px-4
              rounded-full
            "
          >
            Sign Up
          </button>

          {/* Hamburger (md & sm) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ===== Mobile / Tablet Menu ===== */}
      {menuOpen && (
        <div className="
          lg:hidden
          absolute top-full left-0 w-full
          bg-white shadow-lg border-t
          z-50
        ">
          <ul className="
            container mx-auto
            px-6 py-4
            flex flex-col gap-3
            font-bold
          ">

            {/* Main links (md + sm) */}
            {items.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item)
                  setMenuOpen(false)
                }}
                className="
                  cursor-pointer
                  text-black
                  hover:text-green-600
                  transition
                "
              >
                {item}
              </li>
            ))}

            {/* ===== Extra items (ONLY sm < 640px) ===== */}
            <li className="sm:hidden cursor-pointer text-black hover:text-green-600 transition">
              Search
            </li>

            <li className="sm:hidden cursor-pointer text-black hover:text-green-600 transition">
              Cart
            </li>

            <li className="sm:hidden cursor-pointer text-black hover:text-green-600 transition">
              Sign Up
            </li>

          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar