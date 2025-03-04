import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext"; // Import CartContext

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, totalPrice, totalQuantity, paymentMethod } = location.state || {};
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const { clearCart } = useContext(CartContext); // Use CartContext to clear the cart

  // Load Razorpay Script Dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => console.error("Razorpay SDK failed to load.");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!cart || !totalPrice) {
      alert("Invalid cart data");
      navigate("/cart");
      return;
    }

    if (!razorpayLoaded) {
      alert("Razorpay SDK not loaded. Please try again.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY || "rzp_test_S1GQP6AmLcO7KP", // Use env variable
      amount: totalPrice * 100, // Amount in paisa
      currency: "INR",
      name: "Your Store",
      description: "Order Payment",
      image: "/logo.png", // Optional logo
      handler: (response) => {
        clearCart(); // Clear the cart after successful payment
        navigate("/order-confirmation", {
          state: {
            cart,
            totalPrice,
            totalQuantity,
            paymentMethod,
            paymentId: response.razorpay_payment_id,
          },
        });

        // Redirect to home page after 10 seconds
        setTimeout(() => {
          navigate("/"); // Redirect to home page
        }, 10000); // 5000 milliseconds = 5 seconds
      },
      prefill: {
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: { color: "#3399cc" },
      modal: {
        ondismiss: () => alert("Payment process was closed."),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-semibold">Payment</h2>
      <p className="text-lg">Total: ₹{totalPrice}</p>
      <button
        onClick={handlePayment}
        className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded mt-4"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;