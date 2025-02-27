import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../assets/vkc/png-1.png";
import image2 from "../../assets/vkc/png-2.png";
import image3 from "../../assets/vkc/womens-hills (1).png";
import image4 from "../../assets/vkc/hand-bag (2).png";
import image5 from "../../assets/vkc/t-shirt (3).png";
import image6 from "../../assets/hero/hero-image3.png";
import image7 from "../../assets/furniture.png";
import image8 from "../../assets/hero/headphone.avif"
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Upto 50% off on all Men's Sandals",

  },
  {
    id: 2,
    img: image2,
    title: "Upto 70% off on all Women's Slipper",

  },
  {
    id: 3,
    img: image8,
    title: "Upto 80% off on all Headphones ",

  },
  {
    id: 4,
    img: image4,
    title: "Upto 50% off on all Women's Hand Bags",

  },
  {
    id: 5,
    img: image5,
    title: "Upto 60% off on all Men's t-shirts",

  },
  {
    id: 6,
    img: image6,
    title: "More offers on all Products",

  },
  {
    id: 7,
    img: image7,
    title: "Upto 50% off on all Household things",

  },
  {
    id: 8,
    img: image8,
    title: "Upto 50% off on all Men's Sandals",

  },
];

const Hero = () => {
  const swiperRef = useRef(null);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true); // Initially, next is active
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative overflow-hidden   bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* Background pattern */}
      <div className="md:w-[700px] w-[500px] h-[500px] md:h-[600px]  bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]/60 absolute -top-1/2  md:-translate-y-8 -right-40 rounded-3xl rotate-45 -z-9 "></div>

      {/* Hero Section */}
      <div className="relative container sm:pb-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Custom Navigation Buttons */}
        <button
          className="lg:block hidden absolute md:left-0 left-0 top-1/2 -translate-y-1/2   z-10  shadow-3xl  bg-white dark:bg-gray-800  md:py-6 py-2 rounded"
          id="hero-prev"
        >
          <IoIosArrowBack className={`${isHovered && isPrevActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "text-gray-500 hidden"}`} />
        </button>
        <button
          className="lg:block hidden absolute md:right-0 right-0 top-1/2  z-10 -translate-y-1/2 shadow-3xl bg-white  dark:bg-gray-800  md:py-6 py-2 rounded"
          id="hero-next"
        >
          <IoIosArrowForward className={`${isHovered && isNextActive ? "text-[1.5rem] text-gray-700 dark:text-white" : "text-gray-500 hidden"}`} />
        </button>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: "#hero-next",
            prevEl: "#hero-prev",
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
          onSlideChange={(swiper) => {
            setIsPrevActive(swiper.activeIndex > 0);
            setIsNextActive(swiper.activeIndex < swiper.slides.length -1);
          }}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Keeps autoplay running after interaction
            pauseOnMouseEnter: false, // Pauses when the user hovers over a product
          }}
          loop={false}
         
          // pagination={{ clickable: false }}
          className="w-full"
        >
          {ImageList.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-4  text-center sm:text-left order-2  relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="md:text-[2.5rem] text-[1.5rem]   font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="500"
                    className="md:pb-0 pb-5"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white px-4 py-2 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10  -pb-10"
                  >
                    <img
                      src={data.img}
                      alt="product"
                      className="md:w-[200px] w-[200px]  md:h-[300px] h-[250px]  sm:scale-125 lg:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute py-2.5  left-0 bottom-0 z-100 bg-gray-950 w-full"></div>
      </div>

    </div>
  );
};

export default Hero;
