// Advertisement.js

import React from "react";
import classes from "./Advertisement.module.css";
const AdvertisementData = [
  {
    id: 1,
    title: 'Mens Wear',
  },
  {
    id: 2,
    title: 'Kids Wear',
  },
  {
    id: 3,
    title: 'Womans Wear',
  },
  {
    id: 4,
    title: 'Top Wear',
  },
  {
    id: 5,
    title: 'Under Wear',
  },
  {
    id: 6,
    title: 'Beauty Product',
  },
  {
    id: 7,
    title: 'Electronics',
  },
  {
    id: 8,
    title: 'Footwear Wear',
  },
  {
    id: 9,
    title: 'Grocery',
  },
]
const Advertisement = () => {
  return (
    <div
      className={`hidden shadow-2xl mt-2  sm:block dark:border   bg-gradient-to-r from-[#0F56A6] via-[#ED8023] via-[#00A8CE] to-[#FCB714]/50  mx-2 dark:bg-gray-900 dark:text-white  flex-1 text-center ${classes.advertisementContainer}`}
    >
      <div className="container">
        <div
          className={`${classes.animateSlide} bg-transparent text-xs text-white dark:text-white p-1 `}
        >
          {/* Advertisement Here */}
          <div className="grid grid-cols-9  sm:grid-cols-8  items-center">
            {/* Content items */}
            {AdvertisementData.map(data => (<p className={classes.advertisementItem}>
              <span>+</span>
              {data?.title}
            </p>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
