import { ShoppingCart } from 'lucide-react';

interface SpecialMenuCardProps {
  img: string;
  title: string;
  desc?: string;
  price: number;
  rating: number;
  reviews: number;
}

export default function SpecialMenuCard({
  img,
  title,
  desc,
  price,
  rating,
  reviews,
}: SpecialMenuCardProps) {
  return (
    <div className="relative w-75 h-75 bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-end overflow-visible">

      {/* Image */}
      <div
        className="absolute -top-7 left-3/4 transform -translate-x-1/5 w-32 h-32 bg-gray-300 rounded-full border-4 border-green-500 overflow-hidden flex items-center justify-center shadow-md"
        style={{ width: '10rem', height: '10rem' }}
      >
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-8 flex flex-col gap-2">

        {/* Title */}
        <h3 className="text-3xl font-bold text-gray-900 text-start">
          {title}
        </h3>

        {/* Description */}
        {desc && (
          <p className="text-sm text-gray-500 text-start">
            {desc}
          </p>
        )}

        <div className="flex justify-between items-end">
          <div className="flex flex-col">

            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="text-yellow-500 flex text-lg mr-2">
                {'★'.repeat(rating)}
              </div>
              <span className="text-sm text-gray-500">
                ({reviews})
              </span>
            </div>

            {/* Price */}
            <p className="text-4xl text-start text-gray-500">
              ${price.toFixed(2)}
            </p>
          </div>

          {/* Cart Button */}
          <button
            className="w-18 h-18 bg-green-500 rounded-xl flex items-center justify-center transition duration-150 ease-in-out hover:bg-green-600"
            aria-label="Add to cart"
          >
            <ShoppingCart className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
