import React, { useContext, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import image1 from "../../assets/vkc/womens-hills (2).png";
import image2 from "../../assets/vkc/shoe.jpg";
import image3 from "../../assets/vkc/boots.jpg";
import image4 from "../../assets/vkc/formals.jpg";
import image5 from "../../assets/vkc/casuals.jpg";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: image1,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 2,
    img: image2,
    title: "Casuals Wear",
    rating: 4.0,
    color: "Red",
    price: 299,
    aosDelay: "200",
    link: "/cart",
  },
  {
    id: 3,
    img: image3,
    title: "Boots Shoes",
    rating: 4.8,
    color: "Brown",
    price: 599,
    aosDelay: "400",
    link: "/cart",
  },
  {
    id: 4,
    img: image4,
    title: "Formal Shoes",
    rating: 4.6,
    color: "Yellow",
    price: 599,
    aosDelay: "600",
    link: "/cart",
  },
  {
    id: 5,
    img: image5,
    title: "Parties Shoes",
    rating: 4.7,
    color: "Pink",
    price: 499,
    aosDelay: "800",
    link: "/cart",
  },
  {
    id: 6,
    img: image1,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 7,
    img: image2,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 8,
    img: image3,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 9,
    img: image4,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 10,
    img: image5,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 11,
    img: image1,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  }, {
    id: 12,
    img: image2,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  }, {
    id: 13,
    img: image3,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  }, {
    id: 14,
    img: image4,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  }, {
    id: 15,
    img: image5,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const swiperRef = useRef(null);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true); // Initially, next is active
  const [isHovered, setIsHovered] = useState(false);


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
        {/* Header Section */}
        <div className="flex flex-row justify-between items-center">
          <div className="mb-10">
            <p className="md:text-sm text-xs text-primary">
              Top Selling Products for You
            </p>
            <h1  className="md:text-3xl text-lg font-bold">Products</h1>
          </div>
          <div className=" dark:text-white flex flex-row duration-300 items-center gap-2 text-center md:text-sm text-xs md:-mt-5 -mt-10 cursor-pointer  text-gray-700 hover:scale-105 border border-gray-700  py-1 px-5 rounded-md">
            View All <MdKeyboardDoubleArrowRight   className="text-[1.1rem]"/>

          </div>
        </div>
        <div className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Custom Navigation Buttons */}
          <button
            className="lg:block hidden absolute md:left-0 left-0 top-1/2 -translate-y-1/2   z-10  shadow-3xl  bg-white dark:bg-gray-800  md:py-6 py-2 rounded"
            id="custom-prev"
          >
            <IoIosArrowBack className={`${isHovered && isPrevActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "text-gray-500 hidden"}`} />
          </button>
          <button
            className="lg:block hidden absolute md:right-0 right-0 top-1/2  z-10 -translate-y-1/2 shadow-3xl bg-white  dark:bg-gray-800  md:py-6 py-2 rounded"
            id="custom-next"
          >
            <IoIosArrowForward className={`${isHovered && isNextActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "text-gray-500 hidden"}`} />
          </button>

          {/* Swiper Slider */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            slidesPerView={2}
            breakpoints={{
              380: { slidesPerView: 3 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 7 },
            }}
            navigation={{
              nextEl: "#custom-next",
              prevEl: "#custom-prev",
            }}
            // autoplay={{ delay: 3000 }}
            onSlideChange={(swiper) => {
              setIsPrevActive(swiper.activeIndex > 0);
              setIsNextActive(swiper.activeIndex < swiper.slides.length - 7);
            }}
            className=""
          >
            {ProductsData.map((data) => (
              <SwiperSlide key={data.id} className="flex flex-col justify-evenly">
                <div
                  // data-aos="fade-up"
                  // data-aos-delay={data?.aosDelay}
                  className="space-y-3 dark:bg-gray-800 bg-white rounded-lg "
                >
                  <img
                    src={data?.img}
                    alt="product"
                    className="md:h-[150px] md:w-[170px] w-[120px] h-[80px] object-fit rounded-md hover:scale-105 duration-200"
                  />
                  <div>
                    <h3 className="font-semibold">{data?.title}</h3>
                    <p className="text-sm text-gray-600">{data?.color}</p>
                    <p className="text-sm text-gray-600">₹{data?.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-primary" />
                    <span>{data?.rating}</span>
                  </div>

                  <Link to={data?.link}>
                    <button
                      onClick={() => addToCart(data)}
                      className="mt-2 py-1 md:px-7 px-12 hover:scale-105 duration-300 bg-gradient-to-r from-primary to to-secondary text-white rounded-md"
                    >
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




