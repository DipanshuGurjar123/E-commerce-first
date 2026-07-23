import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h1 className="text-3xl font-bold">🛒 Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-5 py-10 bg-stone-50 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="space-y-6 ">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center items-center justify-between border rounded-xl p-5 shadow"
          >
            {/* Left */}
            <div className="flex items-center gap-5">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-28 h-28 object-contain"
              />

              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>

                <p className="text-green-600 font-bold mt-2">
                  ₹ {item.price}
                </p>

                <p className="text-gray-500">
                  Category : {item.category}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-3 pt-3">

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-red-500 text-white w-10 h-10 rounded-lg sm:text-lg text-xl"
                >
                  -
                </button>

                <span className="text-xl font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-green-500 text-white w-10 h-10 rounded-lg text-xl"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-10 border-t pt-6 flex sm:flex-col justify-between items-center">
        <h2 className="text-3xl font-bold">
          Total : ₹ {totalPrice}
        </h2>

        <button className="hidden bg-blue-600 text-white px-8 py-3 rounded-lg">
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;