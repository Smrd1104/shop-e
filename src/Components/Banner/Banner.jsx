import React from "react";
import BannerImg from "../../assets/summer-sale.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex dark:bg-gray-900 justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]  object-fit"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              className="text-3xl sm:text-4xl font-bold"
            >
              Summer Sale upto 50% off
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              className="text-gray-500 text-sm tracking-wide leading-5"
            >
              Purchase the product with minimum cost and effective prices
            </p>
            <div className="flex flex-col gap-4">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                className="flex items-center gap-4"
              >
                <GrSecure className="text-4xl h-12 w-12 p-4 rounded-full shadow-sm bg-violet-100 dark:bg-violet-100" />
                <p>Quality Products</p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                className="flex items-center gap-4"
              >
                <IoFastFood className="text-4xl h-12 w-12 p-4 rounded-full shadow-sm bg-orange-100 dark:bg-orange-100" />
                <p>Fast Delivery</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 p-4 rounded-full shadow-sm bg-green-100 dark:bg-green-100" />
                <p>Easy Payment Methods</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="500"
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 p-4 rounded-full shadow-sm bg-yellow-100 dark:bg-yellow-100" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
