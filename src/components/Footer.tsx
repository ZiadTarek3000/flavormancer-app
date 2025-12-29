const Footer = () => {
  return (
    <footer className="bg-[#eaf5df] w-full mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div
          className="
            grid
            gap-10
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Menu */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 text-black">Menu</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Home</li>
              <li>Why Choose</li>
              <li>Special Menu</li>
              <li>Regular Food</li>
              <li>Special Chef’s</li>
            </ul>
          </div>

          {/* Help */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 text-black">Help</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Privacy</li>
              <li>Terms & Condition</li>
              <li>Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 text-black">Contact</h3>
            <ul className="space-y-2 text-gray-700">
              <li>+123 456 789</li>
              <li>Info@Foodied.Com</li>
              <li>1245, New York, USA</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Subscribe Our Newsletter
            </h3>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
              {/* Input */}
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className="
                  w-full
                  px-4
                  py-2.5
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  text-gray-800
                  font-medium
                  placeholder:text-gray-500
                  placeholder:opacity-100
                  focus:outline-none
                  focus:border-[#7bbf5a]
                  focus:ring-2
                  focus:ring-[#7bbf5a]/30
                "
              />

              {/* Button */}
              <button
                className="
                  bg-[#7bbf5a]
                  text-white
                  px-6
                  py-2.5
                  rounded-lg
                  hover:bg-[#6aac4f]
                  transition
                  whitespace-nowrap
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-gray-600">
          © 2025 Foodied. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



