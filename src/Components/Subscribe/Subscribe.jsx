import React from "react";
import BannerBg from "../../assets/banner.jpg";

const BannerImg = {
  backgroundImage: `url(${BannerBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Subscribe = () => {
  return (
    <div className="overflow-hidden">
      <div
        data-aos="zoom-in"
        className="mb-20 dark:bg-gray-100 text-white  "
        style={BannerImg}
      >
        <div className=" container md:backdrop-blur-none backdrop-blur py-10 md:translate-x-72  ">
          <div className=" space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl !text-center sm:text-left sm:text-4xl text-gray-800 font-fira font-semibold">
              Get Notified above the product
            </h1>
            <div className="flex flex-col items-center">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 text-black focus:outline-none"
              />
              <div data-aos='fade-up'>
                <button className="bg-gradient-to-r from-primary to to-secondary  hover:scale-105 duration-300 text-black py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-white">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
