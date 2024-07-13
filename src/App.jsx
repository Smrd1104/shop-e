import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
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
import Atropos from "atropos";
import 'atropos/css'
import Loader from "./Components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import RouteLayouts from "./Layout/RouteLayouts";
import Home from "./Pages/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Table from "./Components/Table/Table";
import Contact from "./Pages/Contact";

const App = () => {


  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  };
  React.useEffect(() => {
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
    <Routes>
   
    <Route path="/login" element={<Login/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
   
      <Route path='/' element={<RouteLayouts/>} >
      <Route index element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/table" element={<Table/>}/>
      </Route>
    </Routes>
    </div>
  );
};

export default App;
