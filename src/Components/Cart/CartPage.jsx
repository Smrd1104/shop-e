import React from 'react';
import img from "../../assets/hero/headphone.avif"
import { useState } from 'react';
const CartPage = () => {
    const [selectedAddress, setSelectedAddress] = useState("Villupuram - 605602");
    const [showAddressOptions, setShowAddressOptions] = useState(false);
    const addresses = [
        "Villupuram - 605602",
        "Chennai - 600001",
        "Bangalore - 560001",
    ];
    const handleAddressChange = (address) => {
        setSelectedAddress(address);
        setShowAddressOptions(false); // Hide dropdown after selection
    };
    return (
        <div className=" py-10 bg-gray-100 ">
            <div className="flex flex-row justify-evenly bg-gray-100   ">
                {/* <h1 className="text-2xl font-bold mb-4">Flipkart (1)</h1> */}


                <div className=''>
                    <div className="bg-white">
                        <div className="flex items-center justify-between shadow-lg rounded p-5">
                            <p className="text-sm text-gray-600">Deliver to: {selectedAddress}</p>
                            <button
                                onClick={() => setShowAddressOptions(!showAddressOptions)}
                                className="text-sm text-blue-600 hover:underline focus:outline-none"
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
                    </div>


                    <div className="mt-5">

                        <div className="flex gap-20 bg-white  shadow-lg rounded py-10 px-5">


                            <img src={img} alt='img' className='w-[300px] bg-gray-50 shadow-lg  mt-14' />

                            <div className='mt-20'>
                                <h3 className="text-md font-medium">A A ITALIA Anarkali Gown</h3>
                                <p className="text-sm text-gray-600">L.Light Blue</p>
                                <p className="text-sm text-gray-600">Seller: AMTALIA</p>
                                <div className="text-left mt-5  ">
                                    <p className="text-sm line-through text-gray-500">¥1,399</p>
                                    <p className="text-lg font-semibold">¥469</p>
                                    <p className="text-sm text-green-600">66% Off 1 offer available</p>

                                </div>
                                <div className="mt-10 text-left flex gap-5">
                                    <button className="text-sm text-blue-600">SAVE FOR LATER</button>
                                    <button className="text-sm text-blue-600">REMOVE</button>
                                </div>
                            </div>



                            <div className="">
                                <p className="text-sm text-gray-600">Delivery by Fri Mar 7 | <span className="text-green-600">¥40 Free</span></p>
                            </div>

                        </div>
                    </div>




                </div>
                <div className='flex flex-col bg-white shadow-lg p-4  rounded'>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">PRICE DETAILS</h3>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="py-1">Price (1 item)</td>
                                    <td className="py-1 text-right">¥1,399</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Discount</td>
                                    <td className="py-1 text-right text-green-600">– ¥930</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Delivery Charges</td>
                                    <td className="py-1 text-right text-green-600">¥40 Free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="border-t pt-4 mb-6">
                        <div className="flex justify-between">
                            <p className="font-semibold">Total Amount</p>
                            <p className="font-semibold">¥469</p>
                        </div>
                        <p className="text-sm text-green-600">You will save ¥930 on this order</p>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">PLACE ORDER</button>
                </div>
                {/* <div className="mt-6 text-sm text-gray-600">
          <p><a href="#" className="text-blue-600">Returns Policy</a> | <a href="#" className="text-blue-600">Terms of use</a> | <a href="#" className="text-blue-600">Security</a> | <a href="#" className="text-blue-600">Privacy</a></p>
          <p>© 2007-2025 Flipkart.com</p>
          <p>Need help? <a href="#" className="text-blue-600">Visit the Help Center</a> or <a href="#" className="text-blue-600">Contact Us</a></p>
        </div> */}
            </div>
        </div>
    );
};

export default CartPage;