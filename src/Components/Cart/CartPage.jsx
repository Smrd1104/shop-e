import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import img from "../../assets/hero/headphone.avif";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "A A ITALIA Anarkali Gown",
            color: "Light Blue",
            seller: "AMTALIA",
            originalPrice: 1399,
            discountPrice: 469,
            discount: 66,
            quantity: 1,
            image: img,
        }
    ]);

    const [selectedAddress, setSelectedAddress] = useState("Villupuram - 605602");
    const [showAddressOptions, setShowAddressOptions] = useState(false);
    const addresses = ["Villupuram - 605602", "Chennai - 600001", "Bangalore - 560001"];

    const handleAddressChange = (address) => {
        setSelectedAddress(address);
        setShowAddressOptions(false);
    };

    const handleQuantityChange = (id, type) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1)
                    }
                    : item
            )
        );
    };

    const handleInputChange = (id, value) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: value ? Math.max(1, parseInt(value, 10)) : 1 } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);

        if (updatedCart.length === 0) {
            // Clear cart and address when no items are left
            setCartItems([]);
            setSelectedAddress(""); // Clear selected address
        } else {
            setCartItems(updatedCart);
        }
    };


    const totalOriginalPrice = cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
    const totalDiscount = cartItems.reduce((total, item) => total + (item.originalPrice - item.discountPrice) * item.quantity, 0);
    const totalAmount = totalOriginalPrice - totalDiscount;

    return (
        <div className="md:py-10 py-5 bg-gray-100">
            <div className="">

                <div className="w-full md:w-full">
                    {/* <div className="bg-white p-4 shadow-lg rounded">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">Deliver to: {selectedAddress}</p>
                            <button
                                onClick={() => setShowAddressOptions(!showAddressOptions)}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Change
                            </button>
                        </div>

                        {showAddressOptions && (
                            <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-md">
                                {addresses.map((address, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleAddressChange(address)}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <p className="text-sm text-gray-600">{address}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div> */}

                    {cartItems.length > 0 ? (
                        <div className="container mx-auto flex md:flex-row flex-col md:justify-evenly gap-10">

                            {/* Left Side - Cart Items */}
                            <div className="w-full">
                                <div className="bg-white p-4 shadow-lg rounded">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-600">Deliver to: {selectedAddress}</p>
                                        <button
                                            onClick={() => setShowAddressOptions(!showAddressOptions)}
                                            className="text-sm text-blue-600 hover:underline"
                                        >
                                            Change
                                        </button>
                                    </div>

                                    {showAddressOptions && (
                                        <div className="mt-2 bg-gray-100  rounded-lg ">
                                            {addresses.map((address, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleAddressChange(address)}
                                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    <p className="text-sm text-gray-600">{address}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {cartItems.map((item) => (
                                    <div key={item.id} className="mt-5 bg-white shadow-lg rounded p-5 flex md:flex-row flex-col items-center md:items-start">
                                        <img src={item.image} alt={item.name} className="md:w-32 w-28 md:h-auto h-24 bg-gray-50 shadow-lg" />

                                        <div className="md:ml-10 mt-5 md:mt-0 flex-1">
                                            <h3 className="text-md font-medium">{item.name}</h3>
                                            <p className="text-sm text-gray-600">{item.color}</p>
                                            <p className="text-sm text-gray-600">Seller: {item.seller}</p>

                                            <div className="text-left mt-3">
                                                <p className="text-sm line-through text-gray-500">₹{item.originalPrice}</p>
                                                <p className="text-lg font-semibold">₹{item.discountPrice}</p>
                                                <p className="text-sm text-green-600">{item.discount}% Off</p>
                                            </div>

                                            <div className="flex items-center mt-5 gap-2">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, "decrease")}
                                                    className={`text-gray-700 rounded-full bg-gray-200 py-3 px-2 ${item.quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                >
                                                    <FaMinus className="w-4 h-2" />
                                                </button>

                                                <input
                                                    type="text"
                                                    value={item.quantity}
                                                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                                                    className="text-md border w-14 py-1 border-gray-300 text-center bg-white"
                                                />

                                                <button
                                                    onClick={() => handleQuantityChange(item.id, "increase")}
                                                    className="text-gray-700 rounded-full bg-gray-200 py-3 px-2"
                                                >
                                                    <FaPlus className="w-4 h-2" />
                                                </button>
                                            </div>

                                            <div className="mt-4 flex gap-5">
                                                <button className="text-sm text-blue-600">SAVE FOR LATER</button>
                                                <button onClick={() => handleRemoveItem(item.id)} className="text-sm text-blue-600">REMOVE</button>
                                            </div>
                                        </div>

                                        <div className="md:ml-auto mt-5 md:mt-0">
                                            <p className="text-sm text-gray-600">Delivery by Fri Mar 7 | <span className="text-green-600"><span className='line-through'>₹40</span> Free</span></p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Side - Price Details */}
                            <div className="md:w-1/3 w-full bg-white shadow-lg p-4 mt-5 md:mt-0 rounded">
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

                                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold mt-4">PLACE ORDER</button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-80 bg-white shadow-lg rounded p-10 mt-10">
                            <h2 className="text-xl font-semibold text-gray-700">Your cart is empty!</h2>
                            <p className="text-gray-500 mt-2">Add items to your cart to see them here.</p>
                            <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg">Continue Shopping</button>
                        </div>
                    )}

                </div>
               
            </div>
        </div>
    );
};

export default CartPage;
