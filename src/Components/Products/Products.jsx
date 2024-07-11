import React from "react";
import image1 from "../../assets/hero/hero-image1.png";
import image2 from "../../assets/hero/image2.jpg";
import image3 from "../../assets/hero/image3.jpg";
import image4 from "../../assets/hero/image2.jpg";
import image5 from "../../assets/hero/image4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: image1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: image2,
    title: "Women Ethnic",
    rating: 4.0,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: image3,
    title: "Women Ethnic",
    rating: 4.8,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: image4,
    title: "Women Ethnic",
    rating: 4.6,
    color: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: image5,
    title: "Women Ethnic",
    rating: 4.7,
    color: "pink",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className=" text-center mb-10 max-w-[600px] mx-auto">
          <p  data-aos="fade-up"className="text-sm text-primary">Top Selling Products for you</p>
          <h1  data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p  data-aos="fade-up" className="text-xs text-gray-400">
            {" "}
            lorem ipsum dmkancv vzmncjnvcanhnjvn
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data?.aosDelay}
                key={data?.id}
                className=" space-y-3"
              >
                <img
                  src={data?.img}
                  alt="image1"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className=" font-semibold">{data?.title}</h3>
                  <p className="text-sm text-gray-600">{data?.color}</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-primary " />
                  <span>{data?.rating}</span>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button
            className="text-center mt-10 cursor-pointer bg-gradient-to-r from-primary to to-secondary text-white py-1 px-5 rounded-md"
            >View All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
