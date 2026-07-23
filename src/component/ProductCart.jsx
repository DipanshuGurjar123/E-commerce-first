import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-xl px-4 py-4 shadow hover:shadow-lg transition duration-300 bg-stone-50 rounded-lg">
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-52 object-contain"
      />

      {/* Product Title */}
      <h2 className="text-lg font-semibold mt-3 line-clamp-2">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-xl font-bold text-green-600 mt-2">
        ₹{product.price}
      </p>

      {/* Rating */}
      <p className="text-yellow-500 mt-1">
        ⭐ {product.rating}
      </p>

      {/* Add To Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;