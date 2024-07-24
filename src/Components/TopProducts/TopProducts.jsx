import React from "react";
import img1 from "../../assets/shirt/shirt-1 (1).png";
import img2 from "../../assets/vkc/t-shirt (8).png";
import img3 from "../../assets/shirt/shirt-1 (5).png";
import { FaStar } from "react-icons/fa6";

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
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className=" text-left mb-24 ">
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
      {/* body section  */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {ProductsData.map((data) => (
          <div
            data-aos='zoom-in'
            key={data?.id}
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 pt-10 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
          >
            {/* image section */}
            <div className="h-[100px]">
              <img
                src={data?.img}
                alt=""
                className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
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
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
