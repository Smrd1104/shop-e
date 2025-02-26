import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/shirt/shirt-1 (1).png";
import img2 from "../../assets/vkc/t-shirt (8).png";
import img3 from "../../assets/shirt/shirt-1 (5).png";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Casual Wear",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 2,
    img: img2,
    title: "T-shirt ",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 3,
    img: img3,
    title: "Mens Wear",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 4,
    img: img1,
    title: "Casual Wear",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 5,
    img: img2,
    title: "T-shirt ",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 6,
    img: img3,
    title: "Mens Wear",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 7,
    img: img1,
    title: "Casual Wear",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 8,
    img: img2,
    title: "T-shirt ",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 9,
    img: img3,
    title: "Mens Wear",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 10,
    img: img1,
    title: "Casual Wear",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 11,
    img: img2,
    title: "T-shirt ",
    description: "The products of mens wear is comfortable to wear in summer",
  },
  {
    id: 12,
    img: img3,
    title: "Mens Wear",
    description: "The products of mens wear is comfortable to wear in summer",
  },
];

const TopProducts = () => {
  const swiperRef = useRef(null);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true); // Initially, next is active
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = "#top-prev";
      swiperRef.current.swiper.params.navigation.nextEl = "#top-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);
  return (
    <div className="shadow-lg mx-2 rounded  bg-white  dark:bg-gray-900 py-5 mt-5">
      <div className="">
        {/* header section */}
        <div className=" text-left mb-10  container overflow-hidden mx-auto">
          <p className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 className="text-3xl font-bold">
            Best Products
          </h1>
          <p className="text-xs text-gray-400">
            Best products to sell tjis website
          </p>
        </div>
      </div>
      <div className="relative container mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Custom Navigation Buttons */}
        <button
          className="lg:block hidden absolute md:left-8 left-0 top-1/2 -translate-y-1/2   z-10  shadow-3xl   bg-white dark:bg-gray-900  md:py-8 py-2 px-2 rounded"
          id="top-prev"
        >
          <IoIosArrowBack className={`${isHovered && isPrevActive ? "text-[1.5rem] text-gray-700 dark:text-white" : " hidden"}`} />
        </button>
        <button
          className="lg:block hidden absolute md:right-8 right-0 top-1/2 z-10 -translate-y-1/2 shadow-3xl bg-white dark:bg-gray-900   md:py-8 py-2 px-2 rounded"
          id="top-next"
        >
          <IoIosArrowForward className={`${isHovered && isNextActive ? "text-[1.5rem] text-gray-700 dark:text-white" : " hidden"}`} />
        </button>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            380: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 7 },
          }}
          navigation={{
            nextEl: "#top-next",
            prevEl: "#top-prev",
          }}
          // autoplay={{ delay: 3000 }}
          onSlideChange={(swiper) => {
            setIsPrevActive(swiper.activeIndex > 0);
            setIsNextActive(swiper.activeIndex < swiper.slides.length - 7);
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
            disableOnInteraction: false, // Keeps autoplay running after interaction
            pauseOnMouseEnter: true, // Pauses when the user hovers over a product
          }}
          className="py-12 "
        >
          {/* body section  */}
          <div className="flex flex-1 place-items-center">
            {ProductsData.map((data) => (
              <SwiperSlide key={data.id}>
                <div
                  // data-aos='zoom-in'
                  key={data?.id}
                  className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 pt-10 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group md:max-w-[180px] w-full"
                >
                  {/* image section */}
                  <div className="h-[50px] ">
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
                    <button
                      className="bg-gradient-to-r from-primary to to-secondary hover:scale-105 duration-300 text-black py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-white"
                    >Order Now</button>
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
