const Footer = () => {
  return (
    <footer className="bg-[#eaf5df] rounded-2xl w-full px-2 py-5 text-left">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Menu */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-black">Menu</h3>
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
          <h3 className="text-2xl font-semibold mb-4 text-black">Help</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Privacy</li>
            <li>Terms & Condition</li>
            <li>Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-black">Contact</h3>
          <ul className="space-y-2 text-gray-600">
            <li>+123 456 789</li>
            <li>Info@Foodied.Com</li>
            <li>1245, New York, USA</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Subscribe Our <br /> Newsletter
          </h3>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button className="bg-[#7bbf5a] text-white px-6 rounded-r-lg hover:bg-[#6aac4f] transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
