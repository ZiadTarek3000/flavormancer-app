const Footer = () => {
  return (
    <footer className="bg-[#eaf5df] w-full px-10 py-12 rounded-2xl">
      <div
        className="
          grid
          grid-cols-4
          gap-16
          lg:grid-cols-4
          md:grid-cols-2
          sm:grid-cols-1
        "
      >
        {/* Menu */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Menu
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Home</li>
            <li>Why Choose</li>
            <li>Special Menu</li>
            <li>Regular Food</li>
            <li>Special Chef’s</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Help
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Privacy</li>
            <li>Terms & Condition</li>
            <li>Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Contact
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>+123 456 789</li>
            <li>Info@Foodied.Com</li>
            <li>1245, New York, USA</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Subscribe Our Newsletter
          </h3>

          <div
            className="
              flex
              items-center
              w-full
              sm:flex-col
            "
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="
                flex-1
                px-4
                py-2
                border
                border-gray-300
                rounded-l-lg
                sm:rounded-lg
                sm:w-full
                focus:outline-none
              "
            />

            <button
              className="
                bg-[#7bbf5a]
                text-white
                px-6
                py-2
                rounded-r-lg
                sm:rounded-lg
                sm:w-full
                sm:mt-2
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
    </footer>
  );
};

export default Footer;


