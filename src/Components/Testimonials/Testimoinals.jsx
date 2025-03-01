import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TestimonialData = [
  {
    id: 1,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 6,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 7,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 8,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 9,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 10,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 11,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 12,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 13,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 14,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 15,
    name: "test",
    text: "This website create by test and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/102/102",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true); // Initially, next is active
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-10 mb-10 ">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            lorem ipsum dmkancv vzmncjnvcanhnjvn
          </p>
        </div>
        <div className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Custom Navigation Buttons */}
          <button
            className="lg:block hidden absolute md:left-0 left-0 top-1/2 -translate-y-12   z-10  shadow-3xl  bg-white dark:bg-gray-800  md:py-2 py-2 rounded"
            id="test-prev"
          >
            <IoIosArrowBack className={`${isHovered && isPrevActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "text-gray-500 hidden"}`} />
          </button>
          <button
            className="lg:block hidden absolute md:right-0 right-0 top-1/2  z-10 -translate-y-12 shadow-3xl bg-white  dark:bg-gray-800  md:py-2 py-2 rounded"
            id="test-next"
          >
            <IoIosArrowForward className={`${isHovered && isNextActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "text-gray-500 hidden"}`} />
          </button>
          <Swiper modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={5}
            slidesPerView={3}
            breakpoints={{
              380: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: "#test-next",
              prevEl: "#test-prev",
            }}
            loop={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false, // Keeps autoplay running after interaction
              pauseOnMouseEnter: true, // Pauses when the user hovers over a product
            }}
            onSlideChange={(swiper) => {
              setIsPrevActive(swiper.activeIndex > 0);
              setIsNextActive(swiper.activeIndex < swiper.slides.length - 4);
            }}
            pagination={{
              dynamicBullets: true,
              renderBullet: (index, className) => {
                return `
                  <span class="${className} relative w-12  h-1 bg-gray-300 rounded-full transition-all duration-300 hover:scale-125 overflow-hidden">
                    <span class="absolute  left-0 top-0 h-full w-0 bg-gradient-to-r from-primary to to-secondary transition-[width] duration-[3000ms] ease-linear loading-bar"></span>
                  </span>`;
              },
            }}
            className="">

            <div data-aos='zoom-in'>
              {/* testimonial cards */}
              {TestimonialData.map((data) => (
                <SwiperSlide key={data.id} >
                  <div key={data.id} className="pb-10">
                    <div className="flex flex-col gap-4 hover:scale-105 shadow-lg px-2 py-2  rounded-xl dark:bg-gradient-to-r from-primary to-secondary/90 bg-primary/10 relative">
                      <div className="mb-4">
                        <img
                          src={data.img}
                          alt=""
                          className="rounded-full w-10 h-10 object-fit"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="space-y-3">
                          <p className="text-xs text-gray-400 dark:text-white">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-white/80 ">
                            {data.name}
                          </h1>
                        </div>
                      </div>
                      <p className="text-black/20 dark:text-black/40 text-7xl font-serif absolute -top-9 right-5">,,</p>
                    </div>
                  </div>
                </SwiperSlide >
              ))}

            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
