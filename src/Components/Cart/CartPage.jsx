import React, { useContext, useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../../Context/CartContext';
import { CartContext } from '../../Context/CartContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const CartPage = () => {
    // Initialize location first
    const location = useLocation();

    // Destructure location.state safely
    const {
        cartItems: stateCartItems = [],
        selectedAddress: stateSelectedAddress,
        setSelectedAddress: stateSetSelectedAddress,
        removeItemFromCart: stateRemoveItemFromCart,
        updateItemQuantity: stateUpdateItemQuantity,
        handleInputChange: stateHandleInputChange,
    } = location.state || {};

    // Use the cart context
    const {
        cartItems: contextCartItems = [],
        selectedAddress: contextSelectedAddress,
        setSelectedAddress: contextSetSelectedAddress,
        removeItemFromCart: contextRemoveItemFromCart,
        updateItemQuantity: contextUpdateItemQuantity,
        handleInputChange: contextHandleInputChange,
    } = useCart();

    // Fallback to context values if state values are not available
    const cartItems = stateCartItems.length ? stateCartItems : contextCartItems;
    const selectedAddress = stateSelectedAddress || contextSelectedAddress;
    const setSelectedAddress = stateSetSelectedAddress || contextSetSelectedAddress;
    const removeItemFromCart = stateRemoveItemFromCart || contextRemoveItemFromCart;
    const updateItemQuantity = stateUpdateItemQuantity || contextUpdateItemQuantity;
    const handleInputChange = stateHandleInputChange || contextHandleInputChange;

    const navigate = useNavigate();
    const { clearCart } = useContext(CartContext);

    const [razorpayLoaded, setRazorpayLoaded] = useState(false);
    const [showAddressOptions, setShowAddressOptions] = useState(false);
    const addresses = ["Villupuram - 605602", "Chennai - 600001", "Bangalore - 560001"];

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => setRazorpayLoaded(true);
        script.onerror = () => console.error("Razorpay SDK failed to load.");
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleAddressChange = (address) => {
        setSelectedAddress(address);
        setShowAddressOptions(false);
    };

    const totalOriginalPrice = cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
    const totalDiscount = cartItems.reduce((total, item) => total + (item.originalPrice - item.discountPrice) * item.quantity, 0);
    const totalAmount = totalOriginalPrice - totalDiscount;

    const handlePayment = async () => {
        if (!cartItems.length || !totalAmount) {
            alert("Invalid cart data");
            navigate("/cart-page");
            return;
        }

        if (!razorpayLoaded) {
            alert("Razorpay SDK not loaded. Please try again.");
            return;
        }

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY || "rzp_test_S1GQP6AmLcO7KP",
            amount: totalAmount * 100,
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Payment for your order',
            handler: function (response) {
                clearCart();
                navigate("/order-confirmation", {
                    state: {
                        cartItems,
                        selectedAddress,
                        paymentId: response.razorpay_payment_id,
                    },
                });
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="md:py-10 py-5 dark:bg-gray-900 bg-gray-100">
            <div className="w-full md:w-full">
                {cartItems.length > 0 ? (
                    <div className="container mx-auto flex md:flex-row flex-col md:justify-evenly md:gap-10">
                        {/* Left Side - Cart Items */}
                        <div className="w-full">
                            <div className="bg-white dark:border dark:bg-gray-900 p-4 rounded">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600  dark:text-white ">Deliver to: {selectedAddress}</p>
                                    <button
                                        onClick={() => setShowAddressOptions(!showAddressOptions)}
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        Change
                                    </button>
                                </div>

                                {showAddressOptions && (
                                    <div className="mt-2 bg-gray-100  dark:border dark:bg-gray-900  rounded-lg">
                                        {addresses.map((address, index) => (
                                            <div
                                                key={index}
                                                onClick={() => handleAddressChange(address)}
                                                className="p-2  dark:hover:bg-gray-500 hover:bg-white  cursor-pointer"
                                            >
                                                <p className="text-sm dark:text-white  text-gray-600">{address}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="md:h-96 md:overflow-y-auto overflow-x-hidden  custom-scrollbar">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="mt-5  dark:border dark:bg-gray-900 bg-white shadow-lg rounded p-5 flex md:flex-row flex-col md:items-start">
                                        <img src={item.image} alt={item.name} className="md:w-32 w-28 md:h-auto h-24 bg-white" />

                                        <div className="md:ml-10 mt-5 md:mt-0 flex-1">
                                            <h3 className="text-md font-medium">{item.name}</h3>
                                            <p className="text-sm text-gray-600 dark:text-white">{item.color}</p>
                                            <p className="text-sm text-gray-600 dark:text-white">Seller: {item.seller}</p>

                                            <div className="text-left mt-3">
                                                <p className="text-sm line-through text-gray-500 dark:text-white">₹{item.originalPrice}</p>
                                                <p className="text-lg font-semibold">₹{item.discountPrice}</p>
                                                <p className="text-sm text-green-600 dark:text-white">{item.discount}% Off</p>
                                            </div>

                                            <div className="flex items-center mt-5 gap-2">
                                                <button
                                                    onClick={() => updateItemQuantity(item.id, "decrease")}
                                                    className={`text-gray-700  rounded-full  bg-gray-200 py-3 px-2 ${item.quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                >
                                                    <FaMinus className="w-4 h-2" />
                                                </button>

                                                <input
                                                    type="text"
                                                    value={item.quantity}
                                                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                                                    className="text-md border w-14 py-1  dark:border dark:bg-gray-900 border-gray-300 text-center bg-white"
                                                />

                                                <button
                                                    onClick={() => updateItemQuantity(item.id, "increase")}
                                                    className="text-gray-700 rounded-full bg-gray-200 py-3 px-2"
                                                >
                                                    <FaPlus className="w-4 h-2" />
                                                </button>
                                            </div>

                                            <div className="mt-4 flex gap-5">
                                                <button className="text-sm text-blue-600">SAVE FOR LATER</button>
                                                <button onClick={() => removeItemFromCart(item.id)} className="text-sm text-blue-600">REMOVE</button>
                                            </div>
                                        </div>

                                        <div className="md:ml-auto mt-5 md:mt-0">
                                            <p className="text-sm text-gray-600 dark:text-white">
                                                Delivery by Fri Mar 7 | <span className="text-green-600"><span className='line-through'>₹40</span> Free</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Price Details */}
                        <div className="md:w-1/3 h-80 w-full bg-white  dark:border dark:bg-gray-900 shadow-lg p-4 mt-5 md:mt-0 rounded">
                            <h3 className="text-lg font-semibold mb-2">PRICE DETAILS</h3>
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="py-1">Price ({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</td>
                                        <td className="py-1 text-right">₹{totalOriginalPrice}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Discount</td>
                                        <td className="py-1 text-right text-green-600">– ₹{totalDiscount}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Delivery Charges</td>
                                        <td className="py-1 text-right text-green-600"><span className='line-through'>₹40</span> Free</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="border-t pt-4">
                                <div className="flex justify-between">
                                    <p className="font-semibold">Total Amount</p>
                                    <p className="font-semibold">₹{totalAmount}</p>
                                </div>
                                <p className="text-sm text-green-600">You will save ₹{totalDiscount} on this order</p>
                            </div>

                            <button onClick={handlePayment} className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold mt-4">PLACE ORDER</button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-80  rounded p-10 mt-10">
                        <h2 className="text-xl font-semibold text-gray-700">Your cart is empty!</h2>
                        <p className="text-gray-500 mt-2">Add items to your cart to see them here.</p>
                        <Link to="/">
                            <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg">Continue Shopping</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;