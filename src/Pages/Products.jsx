import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useCart } from '../Context/CartContext';
import { Link } from "react-router-dom";

// Product images
import img1 from "../assets/jewellery/img-1.jpg";
import img2 from "../assets/jewellery/img-2.jpeg";
import img3 from "../assets/jewellery/img-3.png";

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isPrevActive, setIsPrevActive] = useState(false);
    const [isNextActive, setIsNextActive] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const swiperRef = useRef(null);
    const { addItemToCart } = useCart();

    const productImages = [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
    ];

    const relatedProducts = [
        {
            id: 1001,
            img: img1,
            name: "Gold Necklace Set",
            rating: 5.0,
            color: "Gold",
            originalPrice: 10000,
            discountPrice: 8000,
            discount: 20,
            seller: "SANNIDHI",
            quantity: 1,
            link: "/product/1001"
        },
        {
            id: 1002,
            img: img2,
            name: "Pearl Bracelet",
            rating: 4.5,
            color: "White",
            originalPrice: 7500,
            discountPrice: 6000,
            discount: 20,
            seller: "SANNIDHI",
            quantity: 1,
            link: "/product/1002"
        },
        {
            id: 1003,
            img: img3,
            name: "Diamond Earrings",
            rating: 4.8,
            color: "Silver",
            originalPrice: 12000,
            discountPrice: 10000,
            discount: 17,
            seller: "SANNIDHI",
            quantity: 1,
            link: "/product/1003"
        },
        {
            id: 1004,
            img: img1,
            name: "Ruby Ring",
            rating: 4.3,
            color: "Red",
            originalPrice: 8500,
            discountPrice: 7000,
            discount: 18,
            seller: "SANNIDHI",
            quantity: 1,
            link: "/product/1004"
        },
        {
            id: 1005,
            img: img2,
            name: "Ruby Ring",
            rating: 4.3,
            color: "Red",
            originalPrice: 8500,
            discountPrice: 7000,
            discount: 18,
            seller: "SANNIDHI",
            quantity: 1,
            link: "/product/1004"
        },
    ];

    const handleAddToCart = () => {
        addItemToCart({
            id: 1000,
            name: "Mermaid Necklace Set",
            image: relatedProducts[selectedImage].img,
            originalPrice: 738,
            discountPrice: 494,
            discount: 33,
            color: "Multicolor",
            seller: "SANNIDHI",
            quantity: quantity
        });
        alert(`Added ${quantity} item(s) to cart`);
    };

    const handleBuyNow = () => {
        handleAddToCart();
        // Navigate to checkout in a real implementation
        alert(`Proceeding to checkout with ${quantity} item(s)`);
    };

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
        setIsZoomed(false);
    };

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    const handleRelatedProductAdd = (product) => {
        addItemToCart(product);
        alert(`${product.name} added to cart`);
    };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = "#custom-prev";
            swiperRef.current.swiper.params.navigation.nextEl = "#custom-next";
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-5 font-sans text-gray-900">
            {/* Main Product Section */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
                {/* Image Gallery Section */}
                <div className="w-full md:w-2/5">
                    <div className="sticky top-20">
                        {/* Main Image */}
                        <div
                            className="border border-gray-200 rounded-lg p-4 mb-4 flex items-center justify-center h-80 bg-white cursor-zoom-in"
                            onClick={toggleZoom}
                        >
                            <img
                                src={relatedProducts[selectedImage].img}
                                alt="Mermaid Necklace Set"
                                className={`max-h-full max-w-full object-contain transition-transform duration-300 ${isZoomed ? 'scale-75' : 'scale-100'
                                    }`}
                                draggable="false"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="flex gap-2 overflow-x-auto p-4">
                            {relatedProducts.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`flex-shrink-0 border rounded-md p-1 transition-all duration-200 cursor-pointer ${selectedImage === index
                                        ? 'border-blue-500 scale-105 shadow-md'
                                        : 'border-gray-200 hover:border-blue-300 hover:scale-105'
                                        }`}
                                >
                                    <img
                                        src={item.img}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="h-16 w-16 object-contain select-none"
                                        draggable="false"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="w-full md:w-3/5">
                    <div className="text-xs text-gray-600 mb-2">
                        <span className="text-blue-600 cursor-pointer">Jewellery</span> &gt;
                        <span className="text-blue-600 cursor-pointer"> Girls</span> &gt;
                        <span className="text-blue-600 cursor-pointer"> Jewellery Sets</span>
                    </div>

                    <h1 className="text-xl font-normal leading-snug mb-2">
                        SANNIDHI® Mermaid Necklace Bracelet Jewellery for Kids Girls Set, Pearl Beads
                        Necklace/Bracelet, Sling Bag, Hair Bow, Seashell Earrings, Ring Combo Kit for
                        Party Costume Jewelry Supplies Gift
                    </h1>

                    <div className="flex items-center mb-2">
                        <div className="flex items-center mr-3">
                            {[...Array(4)].map((_, i) => (
                                <FaStar key={i} className="text-amber-400" />
                            ))}
                            <FaStar className="text-gray-300" />
                            <span className="text-blue-600 ml-1 text-sm">4.2</span>
                            <span className="text-blue-600 text-sm">(139)</span>
                        </div>
                        <a href="#search" className="text-blue-600 text-xs hover:text-orange-700 hover:underline">
                            Search this page
                        </a>
                    </div>

                    <hr className="border-t border-gray-300 my-3" />

                    <div className="flex items-center mb-2">
                        <span className="bg-gray-800 text-white text-xs px-2 py-0.5 rounded mr-2">
                            Amazon's Choice
                        </span>
                        <span className="text-sm text-gray-600">50+ bought in past month</span>
                    </div>

                    <div className="mb-3">
                        <div className="flex items-center mb-1">
                            <span className="text-sm mr-2">Limited time deal</span>
                            <span className="text-red-600 font-bold mr-2">-33% ₹494</span>
                            <span className="text-sm text-gray-600 line-through">M.R.P.: ₹738</span>
                        </div>
                        <div className="text-blue-600 text-sm mb-1">SANNIDHI</div>
                        <div className="text-xs text-gray-600">Inclusive of all taxes</div>
                    </div>

                    <hr className="border-t border-gray-300 my-3" />

                    <div className="mb-3">
                        <h3 className="font-medium">Offers</h3>
                        <div className="text-sm mt-2">
                            <div className="flex items-start mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Save extra with No Cost EMI</span>
                            </div>
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>10% Instant Discount up to ₹1,250 on ICICI Bank Credit Card EMI Trxn</span>
                            </div>
                        </div>
                        <hr className="border-t border-gray-300 my-3" />
                    </div>

                    <div className="mb-3">
                        <span className="text-2xl text-red-600 font-light">₹494.00</span>
                        <div className="text-sm mt-1">
                            <div className="text-green-700">FREE delivery Sunday, 6 April</div>
                            <div>on orders dispatched by Amazon over ₹499.
                                <a href="#details" className="text-blue-600 hover:text-orange-700 hover:underline ml-1">
                                    Details
                                </a>
                            </div>
                            <div>Or fastest delivery Friday, 4 April. Order within 6 hrs 40 mins.
                                <a href="#details" className="text-blue-600 hover:text-orange-700 hover:underline ml-1">
                                    Details
                                </a>
                            </div>
                        </div>
                        <div className="text-sm mt-1">
                            Deliver to <strong className="text-blue-600">Customer - Location 123456</strong>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="text-green-700">In stock</div>
                        <table className="text-sm my-2">
                            <tbody>
                                <tr>
                                    <td className="pr-3">Payment</td>
                                    <td>Secure transaction</td>
                                </tr>
                                <tr>
                                    <td className="pr-3">Ships from</td>
                                    <td>Amazon</td>
                                </tr>
                                <tr>
                                    <td className="pr-3">Sold by</td>
                                    <td>SANNIDHI</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-red-600 text-sm">
                            Upto ₹60 cashback unit on buying 2+
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="quantity" className="mr-1">Quantity:</label>
                        <select
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="border border-gray-300 rounded px-1 py-0.5"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex gap-2 mb-5">
                        <button
                            onClick={handleAddToCart}
                            className="bg-yellow-400 hover:bg-yellow-500 border border-yellow-500 rounded-lg px-4 py-1.5 text-sm font-medium"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={handleBuyNow}
                            className="bg-orange-400 hover:bg-orange-500 border border-orange-500 rounded-lg px-4 py-1.5 text-sm font-medium"
                        >
                            Buy Now
                        </button>
                    </div>

                    <div className="border-t border-gray-300 pt-3">
                        <h3 className="font-medium mb-2">About this item</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Mermaid Theme Jewelry Set: Includes necklace, bracelet, sling bag, hair bow, seashell earrings, and ring</li>
                            <li>Pearl Bead Design: Elegant pearl-like beads for a sophisticated look</li>
                            <li>Perfect for Costumes: Ideal for mermaid-themed parties, dress-up, or play</li>
                            <li>Gift Ready: Beautifully packaged, makes a great gift for girls</li>
                            <li>Adjustable Sizes: Necklace and bracelet feature adjustable closures</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Related Products Carousel */}
            <div className="mt-14 mb-12 mx-2 shadow-lg py-5 rounded dark:bg-gray-900 bg-white">
                <div className="container mx-auto overflow-hidden">
                    <div className="flex flex-row justify-between items-center">
                        <div className="mb-10">
                            <p className="md:text-sm text-xs text-primary">Customers also bought</p>
                            <h1 className="md:text-3xl text-lg font-bold">Related Products</h1>
                        </div>
                        <div className="dark:text-white flex flex-row duration-300 items-center gap-2 text-center md:text-sm text-xs md:-mt-5 -mt-10 cursor-pointer text-gray-700 hover:scale-105 border border-gray-700 py-1 px-5 rounded-md">
                            View All <MdKeyboardDoubleArrowRight className="text-[1.1rem]" />
                        </div>
                    </div>
                    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <button className="lg:block hidden absolute md:left-0 left-0 top-1/2 -translate-y-1/2 z-10 shadow-3xl bg-white dark:bg-gray-800 md:py-6 py-2 rounded" id="custom-prev">
                            <IoIosArrowBack className={`${isHovered && isPrevActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "text-gray-500 hidden"}`} />
                        </button>
                        <button className="lg:block hidden absolute md:right-0 right-0 top-1/2 z-10 -translate-y-1/2 shadow-3xl bg-white dark:bg-gray-800 md:py-6 py-2 rounded" id="custom-next">
                            <IoIosArrowForward className={`${isHovered && isNextActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "text-gray-500 hidden"}`} />
                        </button>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={2}
                            breakpoints={{
                                380: { slidesPerView: 2 },
                                640: { slidesPerView: 3 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                                1280: { slidesPerView: 4 }
                            }}
                            navigation={{ nextEl: "#custom-next", prevEl: "#custom-prev" }}
                            onSlideChange={(swiper) => {
                                setIsPrevActive(swiper.activeIndex > 0);
                                setIsNextActive(swiper.activeIndex < swiper.slides.length - 4);
                            }}
                        >
                            {relatedProducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="space-y-3 p-3 dark:bg-gray-800 bg-white rounded-lg border border-gray-200">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="h-48 w-full object-contain rounded-md hover:scale-105 duration-200"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{product.name}</h3>
                                            <p className="text-sm text-gray-600">{product.color}</p>
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium">₹{product.discountPrice.toFixed(2)}</span>
                                                <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</span>
                                                <span className="text-xs text-green-600">{product.discount}% off</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-amber-400" />
                                            <span>{product.rating}</span>
                                        </div>
                                        <button
                                            onClick={() => handleRelatedProductAdd(product)}
                                            className="w-full py-2 hover:scale-105 duration-300 bg-gradient-to-r from-primary to-secondary text-white rounded-md flex items-center justify-center gap-2"
                                        >
                                            <FaCartPlus /> <span>Add to cart</span>
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;