import React, { useContext } from "react";
import image1 from "../../assets/vkc/womens-hills (2).png";
import image2 from "../../assets/vkc/shoe.jpg";
import image3 from "../../assets/vkc/boots.jpg";
import image4 from "../../assets/vkc/formals.jpg";
import image5 from "../../assets/vkc/casuals.jpg";
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: image1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    price: 50,
    aosDelay: "0",
    link: '/cart'
  },
  {
    id: 2,
    img: image2,
    title: "Women Ethnic",
    rating: 4.0,
    color: "red",
    price: 60,
    aosDelay: "200",
    link: '/cart'
  },
  {
    id: 3,
    img: image3,
    title: "Women Ethnic",
    rating: 4.8,
    color: "brown",
    price: 70,
    aosDelay: "400",
    link: '/cart'
  },
  {
    id: 4,
    img: image4,
    title: "Women Ethnic",
    rating: 4.6,
    color: "yellow",
    price: 80,
    aosDelay: "600",
    link: '/cart'
  },
  {
    id: 5,
    img: image5,
    title: "Women Ethnic",
    rating: 4.7,
    color: "pink",
    price: 90,
    aosDelay: "800",
    link: '/cart'
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className=" text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
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
                  alt="product"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className=" font-semibold">{data?.title}</h3>
                  <p className="text-sm text-gray-600">{data?.color}</p>
                  <p className="text-sm text-gray-600">₹{data?.price.toFixed(2)}</p>
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
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button
              className="text-center mt-10 cursor-pointer bg-gradient-to-r from-primary to-secondary text-white py-1 px-5 rounded-md"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
