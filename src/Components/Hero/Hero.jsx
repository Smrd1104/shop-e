import React from "react";
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

const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Upto 50% off on all Men's Sandals",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: image2,
    title: "Upto 70% off on all Women's Slipper",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: image3,
    title: "Upto 80% off on all Women's Hills",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: image4,
    title: "Upto 50% off on all Women's Hand Bags",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: image5,
    title: "Upto 60% off on all Men's t-shirts",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: image6,
    title: "More offers on all Products",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden  bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 md:py-14">
      {/* Background pattern */}
      <div className="w-[700px] h-[700px] bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
      
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          navigation={false}
          // pagination={{ clickable: false }}
          className="w-full"
        >
          {ImageList.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-4 md:pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="md:text-[3.5rem] text-[2.5rem]   font-bold"
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
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="product"
                      className="md:w-[400px] w-[250px]   md:h-[400px] h-[300px]  sm:scale-125 lg:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
