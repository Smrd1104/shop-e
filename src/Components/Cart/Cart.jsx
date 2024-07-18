// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="cart container mx-auto p-6">
      <h2 className="text-center py-10 text-3xl font-semibold">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-lg">No items in cart.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Product</th>
                  <th className="py-2 text-center">Quantity</th>
                  <th className="py-2 text-right">Unit Price</th>
                  <th className="py-2 text-right">Total Price</th>
                  <th className="py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="py-2 flex lg:flex-row lg:justify-start justify-center flex-col">
                      <img src={item.img} alt={item.title} className="w-12 h-12 mr-4" />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.color}</p>
                        <p className="text-sm text-gray-600">Rating: {item.rating}</p>
                      </div>
                    </td>
                    <td className="py-2 text-center">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 p-1 border rounded"
                      />
                    </td>
                    <td className="py-2 text-right">₹{item.price.toFixed(2)}</td>
                    <td className="py-2 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-2 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-sm text-white py-1 px-1 rounded"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Order Summary</h3>
            <div className="flex justify-between mt-4">
              <span>Total Items:</span>
              <span>{getTotalQuantity()}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Total Price:</span>
              <span>₹{getTotalPrice()}</span>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">Payment Methods</h4>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="payment" value="cash" className="mr-2" />
                  Cash
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" value="wallet" className="mr-2" />
                  Wallet
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" value="upi" className="mr-2" />
                  UPI
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">Proceed to Payment</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
