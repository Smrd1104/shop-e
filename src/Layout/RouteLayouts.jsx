import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTopButton from '../Components/ScrollToTopButton/ScrollToTopButton';
import Footer from '../Components/Footer/Footer';
import Popup from '../Components/Popup/Popup';
import Navbar from '../Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RouteLayouts = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <ScrollToTopButton />
      <div className=" dark:bg-gray-900 bg-gray-100 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <div>
          <Outlet />
        </div>
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </div>
  );
};

export default RouteLayouts;
