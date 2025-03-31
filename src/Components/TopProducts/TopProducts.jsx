import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/shirt/shirt-1 (1).png";
import img2 from "../../assets/vkc/t-shirt (8).png";
import img3 from "../../assets/shirt/shirt-1 (5).png";
import { FaCartPlus, FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCart } from '../../Context/CartContext'; // Import the useCart hook
import { Link } from "react-router-dom";

const TopProductsData = [
  {
    id: 1,
    img: img1,
    title: "Casual Wear",
    description: "99% offer !!!",
    originalPrice: 100,
    discountPrice: 1,
    discount: 99,
    color: "Blue",
    seller: "Fashion Hub",
    link: "/cart-page",
  },
  {
    id: 2,
    img: img2,
    title: "T-shirt ",
    description: "99% offer !!!",
    originalPrice: 100,
    discountPrice: 1,
    discount: 99,
    color: "Black",
    seller: "T-Shirt World",
    link: "/cart-page",

  },
  {
    id: 3,
    img: img3,
    title: "Mens Wear",
    description: "99% offer !!!",
    originalPrice: 100,
    discountPrice: 1,
    discount: 99,
    color: "White",
    seller: "Men's Fashion",
    link: "/cart-page",

  },
  {
    id: 4,
    img: img1,
    title: "Casual Wear",
    description: "99% offer !!!",
    originalPrice: 100,
    discountPrice: 1,
    discount: 99,
    color: "Blue",
    seller: "Fashion Hub",
    link: "/cart-page",

  },
  {
    id: 5,
    img: img2,
    title: "T-shirt ",
    description: "99% offer !!!",
    originalPrice: 100,
    discountPrice: 1,
    discount: 99,
    color: "Black",
    seller: "T-Shirt World",
    link: "/cart-page",

  },
  {
    id: 6,
    img: img3,
    title: "Mens Wear",
    description: "99% offer !!!",
    originalPrice: 100,
    discountPrice: 1,
    discount: 99,
    color: "White",
    seller: "Men's Fashion",
    link: "/cart-page",

  },
  {
    id: 7,
    img: img1,
    title: "Casual Wear",
    description: "99% offer !!!",
    originalPrice: 100,
    discountPrice: 1,
    discount: 99,
    color: "Blue",
    seller: "Fashion Hub",
    link: "/cart-page",

  },
  {
    id: 8,
    img: img2,
    title: "T-shirt ",
    description: "99% offer !!!",
    originalPrice: 100,
    discountPrice: 1,
    discount: 99,
    color: "Black",
    seller: "T-Shirt World",
    link: "/cart-page",

  },
  {
    id: 9,
    img: img3,
    title: "Mens Wear",
    description: "99% offer !!!",
    originalPrice: 100,
    discountPrice: 1,
    discount: 99,
    color: "White",
    seller: "Men's Fashion",
    link: "/cart-page",

  },
  // Add more products as needed
];

const TopProducts = () => {
  const swiperRef = useRef(null);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { addItemToCart } = useCart(); // Use the useCart hook to access addItemToCart function

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = "#top-prev";
      swiperRef.current.swiper.params.navigation.nextEl = "#top-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  const handleOrderNow = (product) => {
    addItemToCart({
      id: product.id,
      name: product.title,
      image: product.img,
      originalPrice: product.originalPrice,
      discountPrice: product.discountPrice,
      discount: product.discount,
      color: product.color,
      seller: product.seller,
      quantity: 1,
    });
  };

  return (
    <div className="shadow-lg mx-2 rounded bg-white dark:bg-gray-900 py-5 mt-5">
      <div className="">
        {/* header section */}
        <div className="text-left mb-10 container overflow-hidden mx-auto">
          <p className="text-sm text-primary">Top Rated Products for you</p>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-xs text-gray-400">Best products to sell on this website</p>
        </div>
      </div>
      <div
        className="relative container mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Custom Navigation Buttons */}
        <button
          className="lg:block hidden absolute md:left-8 left-0 top-1/2 -translate-y-1/2 z-10 shadow-3xl bg-white dark:bg-gray-900 md:py-8 py-2 px-2 rounded"
          id="top-prev"
        >
          <IoIosArrowBack className={`${isHovered && isPrevActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "hidden"}`} />
        </button>
        <button
          className="lg:block hidden absolute md:right-8 right-0 top-1/2 z-10 -translate-y-1/2 shadow-3xl bg-white dark:bg-gray-900 md:py-8 py-2 px-2 rounded"
          id="top-next"
        >
          <IoIosArrowForward className={`${isHovered && isNextActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "hidden"}`} />
        </button>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            380: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          navigation={{
            nextEl: "#top-next",
            prevEl: "#top-prev",
          }}
          onSlideChange={(swiper) => {
            setIsPrevActive(swiper.activeIndex > 0);
            setIsNextActive(swiper.activeIndex < swiper.slides.length - 5);
          }}
          pagination={{
            dynamicBullets: true,
            renderBullet: (index, className) => {
              return `
              <span class="${className} relative w-12 h-1 bg-gray-300 rounded-full transition-all duration-300 hover:scale-125 overflow-hidden">
                <span class="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary to to-secondary transition-[width] duration-[3000ms] ease-linear loading-bar"></span>
              </span>`;
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="py-12"
        >
          {/* body section */}
          <div className="flex flex-1 place-items-center">
            {TopProductsData.map((data) => (
              <SwiperSlide key={data.id}>
                <div
                  key={data?.id}
                  className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 pt-10 dark:hover:bg-primary hover:text-white relative md:shadow-xl shadow-xl duration-300 group md:max-w-[250px] w-full"
                >
                  {/* image section */}
                  <div className="h-[50px]">
                    <img
                      src={data?.img}
                      alt=""
                      className="max-w-[100px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                    />
                  </div>
                  {/* details section */}
                  <div className="p-4 text-center">
                    {/* star rating */}
                    <div className="w-full flex items-center justify-center gap-1">
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                    </div>
                    <h1 className="text-xl font-bold">{data?.title}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data?.description}
                    </p>
                    <Link to={data?.link}>
                      <button
                        onClick={() => handleOrderNow(data)}
                        className="mt-2 py-1 md:px-7 px-12 hover:scale-105 duration-300 bg-gradient-to-r from-primary to to-secondary text-white rounded-md"
                      >
                        <div className="flex flex-row items-center gap-2">
                          <FaCartPlus /> <span className="lg:block hidden">Add to cart</span>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TopProducts;