import React, { useContext, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import image1 from "../../assets/vkc/sport.jpeg";
import image2 from "../../assets/vkc/shoe.jpg";
import image3 from "../../assets/vkc/boots.jpg";
import image4 from "../../assets/vkc/formals.jpg";
import image5 from "../../assets/vkc/casuals.jpg";
import image6 from "../../assets/vkc/kids.jpeg"
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { useCart } from '../../Context/CartContext'; // Import the useCart hook

// const ProductsData = [
//   {
//     id: 1,
//     img: image6,
//     title: "Kids Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   },
//   {
//     id: 2,
//     img: image2,
//     title: "Casuals Wear",
//     rating: 4.0,
//     color: "Red",
//     price: 1,
//     aosDelay: "200",
//     link: "/cart-page",
//   },
//   {
//     id: 3,
//     img: image3,
//     title: "Boots Shoes",
//     rating: 4.8,
//     color: "Brown",
//     price: 1,
//     aosDelay: "400",
//     link: "/cart-page",
//   },
//   {
//     id: 4,
//     img: image4,
//     title: "Formal Shoes",
//     rating: 4.6,
//     color: "Yellow",
//     price: 1,
//     aosDelay: "600",
//     link: "/cart-page",
//   },
//   {
//     id: 5,
//     img: image5,
//     title: "Parties Shoes",
//     rating: 4.7,
//     color: "Pink",
//     price: 1,
//     aosDelay: "800",
//     link: "/cart-page",
//   },
//   {
//     id: 6,
//     img: image1,
//     title: "Sports Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   },
//   {
//     id: 7,
//     img: image2,
//     title: "Sports Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   },
//   {
//     id: 8,
//     img: image3,
//     title: "Sports Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   },
//   {
//     id: 9,
//     img: image4,
//     title: "Sports Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   },
//   {
//     id: 10,
//     img: image5,
//     title: "Fashion Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   },
//   {
//     id: 11,
//     img: image1,
//     title: "Fashion Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   }, {
//     id: 12,
//     img: image2,
//     title: "Fashion Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   }, {
//     id: 13,
//     img: image3,
//     title: "Fashion Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   }, {
//     id: 14,
//     img: image4,
//     title: "Fashion Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   }, {
//     id: 15,
//     img: image5,
//     title: "Fashion Wear",
//     rating: 5.0,
//     color: "Diamond Blue",
//     price: 1,
//     aosDelay: "0",
//     link: "/cart-page",
//   },
// ];

const ProductsData = [
  {
    id: 1001,
    img: image6,
    name: "Kids Wear",
    rating: 5.0,
    color: "Diamond Blue",
    originalPrice: 1000, // Original price before discount
    discountPrice: 800,  // Price after discount
    discount: 20,        // Discount percentage
    seller: "VKC Footwear",
    quantity: 1,         // Initial quantity
    aosDelay: "0",
    link: "/cart-page",
  },
  {
    id: 1002,
    img: image2,
    name: "Casuals Wear",
    rating: 4.0,
    color: "Red",
    originalPrice: 1200,
    discountPrice: 900,
    discount: 25,
    seller: "VKC Footwear",
    quantity: 1,
    aosDelay: "200",
    link: "/cart-page",
  },
  {
    id: 1003,
    img: image3,
    name: "Boots Shoes",
    rating: 4.8,
    color: "Brown",
    originalPrice: 1500,
    discountPrice: 1200,
    discount: 20,
    seller: "VKC Footwear",
    quantity: 1,
    aosDelay: "400",
    link: "/cart-page",
  },
  {
    id: 1004,
    img: image4,
    name: "Formal Shoes",
    rating: 4.6,
    color: "Yellow",
    originalPrice: 2000,
    discountPrice: 1600,
    discount: 20,
    seller: "VKC Footwear",
    quantity: 1,
    aosDelay: "600",
    link: "/cart-page",
  },
  {
    id: 1005,
    img: image5,
    name: "Parties Shoes",
    rating: 4.7,
    color: "Pink",
    originalPrice: 1800,
    discountPrice: 1400,
    discount: 22,
    seller: "VKC Footwear",
    quantity: 1,
    aosDelay: "800",
    link: "/cart-page",
  },
  {
    id: 1006,
    img: image1,
    name: "Sports Wear",
    rating: 5.0,
    color: "Diamond Blue",
    originalPrice: 1300,
    discountPrice: 1000,
    discount: 23,
    seller: "VKC Footwear",
    quantity: 1,
    aosDelay: "0",
    link: "/cart-page",
  },
  {
    id: 1007,
    img: image3,
    name: "Sports Wear",
    rating: 5.0,
    color: "Diamond Blue",
    originalPrice: 1300,
    discountPrice: 1000,
    discount: 23,
    seller: "VKC Footwear",
    quantity: 1,
    aosDelay: "0",
    link: "/cart-page",
  },
  {
    id: 1008,
    img: image5,
    name: "Sports Wear",
    rating: 5.0,
    color: "Diamond Blue",
    originalPrice: 1300,
    discountPrice: 1000,
    discount: 23,
    seller: "VKC Footwear",
    quantity: 1,
    aosDelay: "0",
    link: "/cart-page",
  },
  {
    id: 1009,
    img: image2,
    name: "Sports Wear",
    rating: 5.0,
    color: "Diamond Blue",
    originalPrice: 1300,
    discountPrice: 1000,
    discount: 23,
    seller: "VKC Footwear",
    quantity: 1,
    aosDelay: "0",
    link: "/cart-page",
  },
  {
    id: 1010,
    img: image1,
    name: "Sports Wear",
    rating: 5.0,
    color: "Diamond Blue",
    originalPrice: 1300,
    discountPrice: 1000,
    discount: 23,
    seller: "VKC Footwear",
    quantity: 1,
    aosDelay: "0",
    link: "/cart-page",
  },
  // Add more products as needed
];

const Products = () => {
  const { addItemToCart } = useCart(); // Use the useCart hook to access addItemToCart function
  const swiperRef = useRef(null);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const handleOrderNow = (product) => {
    addItemToCart({
      id: product.id,
      name: product.name,
      image: product.img,
      originalPrice: product.originalPrice,
      discountPrice: product.discountPrice,
      discount: product.discount,
      color: product.color,
      seller: product.seller,
      quantity: 1,
    });
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
    <div className="mt-14 mb-12 mx-2 shadow-lg py-5 rounded dark:bg-gray-900 bg-white">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-row justify-between items-center">
          <div className="mb-10">
            <p className="md:text-sm text-xs text-primary">Top Selling Products for You</p>
            <h1 className="md:text-3xl text-lg font-bold">Products</h1>
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
            spaceBetween={5}
            slidesPerView={2}
            breakpoints={{ 380: { slidesPerView: 3 }, 640: { slidesPerView: 3 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 5 }, 1280: { slidesPerView: 7 } }}
            navigation={{ nextEl: "#custom-next", prevEl: "#custom-prev" }}
            onSlideChange={(swiper) => {
              setIsPrevActive(swiper.activeIndex > 0);
              setIsNextActive(swiper.activeIndex < swiper.slides.length - 7);
            }}
          >
            {ProductsData.map((data) => (
              <SwiperSlide key={data.id} className="flex flex-col justify-evenly">
                <div key={data.id} className="space-y-3  dark:bg-gray-800 bg-white rounded-lg">
                  <img src={data.img} alt={data.name} className="md:h-[150px] md:w-[170px] w-[120px] h-[80px] object-fit  rounded-md hover:scale-105 duration-200" />
                  <div>
                    <h3 className="font-semibold">{data.name}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <p className="text-sm text-gray-600">₹{data.discountPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-primary" />
                    <span>{data.rating}</span>
                  </div>
                  <Link to={data.link}>
                    <button onClick={() => handleOrderNow(data)} className="mt-2 py-1 md:px-7 px-12 hover:scale-105 duration-300 bg-gradient-to-r from-primary to-secondary text-white rounded-md">
                      <div className="flex flex-row items-center gap-2">
                        <FaCartPlus /> <span className="lg:block hidden">Add to cart</span>
                      </div>
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Products;





