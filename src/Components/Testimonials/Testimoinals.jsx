import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Riyas",
    text: "This website create by riyas and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Riyas",
    text: "This website create by riyas and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Riyas",
    text: "This website create by riyas and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Riyas",
    text: "This website create by riyas and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Riyas",
    text: "This website create by riyas and is flexible and reliable to customer by the products",
    img: "https://picsum.photos/102/102",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            lorem ipsum dmkancv vzmncjnvcanhnjvn
          </p>
        </div>
        {/* testimonial cards */}
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gradient-to-r from-primary to-secondary/90 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-400 dark:text-white">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white/80 ">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 dark:text-black/40 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
