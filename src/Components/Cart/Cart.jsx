// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleProceedToPayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    navigate("/payment", {
      state: {
        cart,
        totalPrice: getTotalPrice(),
        totalQuantity: getTotalQuantity(),
        paymentMethod: selectedPaymentMethod,
      },
    });
  };
  return (
    <div className="cart container mx-auto p-6  ">
      <h2 className="text-center py-10 text-3xl font-semibold">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-lg">No items in cart.</p>
      ) : (
        <>
          <div className="overflow-x-hidden ">
            <table className="min-w-full bg-white border-collapse dark:text-white dark:bg-gray-900">
              <thead>
                <tr className="border-b ">
                  <th className="py-2 text-left  md:text-lg text-xs">Product</th>
                  <th className="py-2 text-center md:text-lg text-xs">Quantity</th>
                  <th className="py-2 text-right  md:text-lg text-xs">Unit Price</th>
                  <th className="py-2 text-right  md:text-lg text-xs">Total Price</th>
                  <th className="py-2 text-center  md:text-lg text-xs">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="py-2 flex lg:flex-row lg:justify-start justify-center flex-col">
                      <img src={item.img} alt={item.title} className="md:w-20 w-12 h-12 md:h-20 mr-4" />
                      <div>
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <p className="text-xs text-gray-600">{item.color}</p>
                        <p className="text-xs text-gray-600">Rating: {item.rating}</p>
                      </div>
                    </td>
                    <td className="py-2 text-center">
                      <input
                        type="text"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="md:w-16 w-12 p-1 border text-center rounded dark:bg-gray-900"
                      />
                    </td>
                    <td className="py-2 text-right">₹{item.price.toFixed(2)}</td>
                    <td className="py-2 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-2 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-white py-1 px-1 rounded group relative"
                      >
                        {/* Delete Icon */}
                        <MdDelete className="text-[1.5rem] text-red-500 hover:text-red-700 transition-colors duration-200" />

                        {/* Hover Text */}
                        <span className="absolute top-1 -right-14  bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          Remove
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 ">
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
                  <input type="radio" name="payment" value="razorpay" onChange={handlePaymentMethodChange} className="mr-2" />
                  Razorpay
                </label>
                {/* <label className="flex items-center">
                  <input type="radio" name="payment" value="wallet" onChange={handlePaymentMethodChange} className="mr-2" />
                  Wallet
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" value="upi" onChange={handlePaymentMethodChange} className="mr-2" />
                  UPI
                </label> */}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button onClick={handleProceedToPayment} className="bg-blue-500 text-white py-2 px-4 rounded">Proceed to Payment</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
