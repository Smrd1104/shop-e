import React, { useState } from "react";
import axios from "axios";
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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/subscribe", {
        email,
      });
      setMessage(response.data.message);
      setEmail(""); // Clear input on success
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="overflow-hidden">
      <div
        // data-aos="zoom-in"
        className="mb-20 dark:bg-gray-100 text-white"
        style={BannerImg}
      >
        <div className="container md:backdrop-blur-none backdrop-blur py-10 md:translate-x-72">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl !text-center sm:text-left sm:text-4xl text-gray-800 font-fira font-semibold">
              Get Notified About New Products
            </h1>
            <div className="flex flex-col items-center">
              <input
                // data-aos="fade-up"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-black focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-black py-1 px-4 rounded-full mt-4"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
              {message && (
                <p className="text-sm text-red-500 mt-2">{message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
