import React from "react";
import img1 from "../../assets/shirt/shirt-1 (1).png";
import img2 from "../../assets/vkc/t-shirt (8).png";
import img3 from "../../assets/shirt/shirt-1 (5).png";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
  return (
    <div>
      <div className="">
        {/* header section */}
        <div className=" text-left mb-10 container overflow-hidden mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Best products to sell tjis website
          </p>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          380: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        // navigation
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
        className="py-12 container overflow-hidden mx-auto"
      >
        {/* body section  */}
        <div className="flex flex-1 place-items-center">
          {ProductsData.map((data) => (
            <SwiperSlide key={data.id}>
              <div
                data-aos='zoom-in'
                key={data?.id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 pt-10 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group md:max-w-[200px] w-full"
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
  );
};

export default TopProducts;
