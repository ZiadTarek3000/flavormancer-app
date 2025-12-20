import { Star } from "lucide-react";

interface RegularFoodCardProps {
  img: string;
  title: string;
  desc: string;
  price: number;
  reviews: number;
}

export default function RegularFoodCards({
  img,
  title,
  desc,
  price,
  reviews,
}: RegularFoodCardProps) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-6 pt-20 w-85 text-center transition-all relative">

      {/* Circle Image */}
      <div className="w-45 h-45 absolute -top-22 left-1/2 transform -translate-x-1/2 mx-auto rounded-full border-[6px] border-green-500 overflow-hidden flex items-center justify-center shadow-md">
        <img src={img} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mt-5">{title}</h3>

      {/* Rating */}
      <div className="flex justify-center items-center gap-1 mt-2 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#facc15" stroke="#facc15" />
        ))}
        <span className="text-gray-400 text-sm ml-1">
          ({reviews})
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2 mx-6 leading-relaxed">
        {desc}
      </p>

      {/* Price + Button */}
      <div className="flex justify-center items-center gap-4 mt-5">
        <div className="px-4 py-1 border border-gray-600 rounded-full font-semibold text-sm">
          ${price.toFixed(2)}
        </div>

        <button className="bg-green-500 hover:bg-[#f9f9f9] transition-colors duration-300 ease-in-out text-white hover:text-black border border-green-500 hover:border hover:border-black py-1.5 px-4 rounded-full">
          Buy Now
        </button>
      </div>
    </div>
  );
}

