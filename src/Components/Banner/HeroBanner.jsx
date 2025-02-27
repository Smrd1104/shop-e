"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlider = ({ images }) => {
  return (
    <div className="mt-5 mx-2 shadow-lg py-3 bg-white dark:bg-gray-900  ">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
            380: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        loop={true}
        autoplay={{ delay: 3000 }}
        // navigation
        // pagination={{ clickable: true }}
        className="w-full container mx-auto"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.images} // Ensure this is correctly passed
              alt={`banner-${item.id}`}
              className="w-full h-[80px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
