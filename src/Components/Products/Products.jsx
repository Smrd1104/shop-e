import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import image1 from "../../assets/vkc/womens-hills (2).png";
import image2 from "../../assets/vkc/shoe.jpg";
import image3 from "../../assets/vkc/boots.jpg";
import image4 from "../../assets/vkc/formals.jpg";
import image5 from "../../assets/vkc/casuals.jpg";

const ProductsData = [
  {
    id: 1,
    img: image1,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 2,
    img: image2,
    title: "Casuals",
    rating: 4.0,
    color: "Red",
    price: 299,
    aosDelay: "200",
    link: "/cart",
  },
  {
    id: 3,
    img: image3,
    title: "Boots",
    rating: 4.8,
    color: "Brown",
    price: 599,
    aosDelay: "400",
    link: "/cart",
  },
  {
    id: 4,
    img: image4,
    title: "Formal Shoes",
    rating: 4.6,
    color: "Yellow",
    price: 599,
    aosDelay: "600",
    link: "/cart",
  },
  {
    id: 5,
    img: image5,
    title: "Parties Shoes",
    rating: 4.7,
    color: "Pink",
    price: 499,
    aosDelay: "800",
    link: "/cart",
  },
  {
    id: 6,
    img: image1,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 7,
    img: image2,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 8,
    img: image3,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 9,
    img: image4,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
  {
    id: 10,
    img: image5,
    title: "Fashion Wear",
    rating: 5.0,
    color: "Diamond Blue",
    price: 499,
    aosDelay: "0",
    link: "/cart",
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-row  justify-between items-center">
          {/* Header section */}
          <div className="mb-10">
            <p data-aos="fade-up" className="md:text-sm text-xs text-primary">
              Top Selling Products for You
            </p>
            <h1 data-aos="fade-up" className="md:text-3xl text-lg font-bold">Products</h1>
            {/* <p data-aos="fade-up" className="text-xs text-gray-400">
              Discover the best products at the best prices.
            </p> */}
          </div>
          <button className="text-center md:text-sm text-xs md:-mt-5 -mt-10 cursor-pointer bg-gradient-to-r from-primary to-secondary text-white py-1 px-5 rounded-md">
            View All Products
          </button>
        </div>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={5}
          slidesPerView={2}
          breakpoints={{
            380: { slidesPerView:3 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 8 },
          }}
          navigation
          // pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          className="px-5"
        >
          {ProductsData.map((data) => (
            <SwiperSlide key={data.id} className="flex flex-col items-center">
              <div
                data-aos="fade-up"
                data-aos-delay={data?.aosDelay}
                className="space-y-3 dark:bg-gray-800 bg-white  rounded-lg"
              >
                <img
                  src={data?.img}
                  alt="product"
                  className="md:h-[150px] md:w-[150px] w-[100px] h-[100px] object-fit rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data?.title}</h3>
                  <p className="text-sm text-gray-600">{data?.color}</p>
                  <p className="text-sm text-gray-600">
                    ₹{data?.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-primary " />
                  <span>{data?.rating}</span>
                </div>
                <Link to={data?.link}>
                  <button
                    onClick={() => addToCart(data)}
                    className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md"
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View all button */}
        <div className="flex justify-center">

        </div>
      </div>
    </div>
  );
};

export default Products;
