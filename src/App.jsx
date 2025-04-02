import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Pages/Products";
import AOS from "aos";
import 'aos/dist/aos.css'
import TopProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimoinals from "./Components/Testimonials/Testimoinals";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";
import Advertisement from "./Components/Advertisement/Advertisement";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";
import Loader from "./Components/Loader/Loader";
import { Route, Routes, useNavigate } from "react-router-dom";
import RouteLayouts from "./Layout/RouteLayouts";
import Home from "./Pages/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Table from "./Components/Table/Table";
import Contact from "./Pages/Contact";
import Cart from "./Components/Cart/Cart";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Payment from "./Components/payment/Payment";
import OrderConfirmation from "./Components/order/OrderConfirmation";
import CartPage from "./Components/Cart/CartPage";

const App = () => {

  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("appLoaded") ? false : true;
  });

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  };
  const navigate = useNavigate(); // Initialize useNavigate

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    if (!sessionStorage.getItem("appLoaded")) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("appLoaded", "true");
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);
  if (loading) {
    return (
      <div className=" flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div className="">

      <ScrollToTop />

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path='/' element={<RouteLayouts />} >
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/table" element={<Table />} />
        </Route>
      </Routes>

    </div>
  );
};

export default App;
