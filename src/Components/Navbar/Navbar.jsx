import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/new-logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import Advertisement from "../Advertisement/Advertisement";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import img1 from "../../assets/navbar/mobile.png"
import img2 from "../../assets/navbar/fashion.png"
import img3 from "../../assets/navbar/mobile.png"
import img4 from "../../assets/navbar/electronics.png"
import img5 from "../../assets/navbar/mobile.png"
import img6 from "../../assets/navbar/mobile.png"

const Menu = [
  {
    id: 1,
    name: "Mobile",
    img: img1,
    link: "#",

  },
  {
    id: 2,
    name: "Appliances",
    img: img2,
    link: "#",
  },
  {
    id: 3,
    name: "Fashion",
    img: img1,
    link: "#",
  },
  {
    id: 4,
    name: "Electronics",
    img: img2,
    link: "#",
  },
  {
    id: 5,
    name: "Kilos",
    img: img1,
    link: "#",
  },
  {
    id: 6,
    name: "Mobile",
    img: img2,
    link: "#",

  },
  {
    id: 7,
    name: "Appliances",
    img: img1,
    link: "#",
  },
  {
    id: 8,
    name: "Fashion",
    img: img2,
    link: "#",
  },
  {
    id: 9,
    name: "Mobile",
    img: img1,
    link: "#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    img: img1,
    link: "#",
  },
  {
    id: 2,
    name: "Best Selling",
    img: img1,
    link: "#",
  },
  {
    id: 3,
    name: "Top Rated",
    img: img1,
    link: "#",
  },
  {
    id: 1,
    name: "Trending Products",
    img: img1,
    link: "#",
  },
  {
    id: 1,
    name: "Trending Products",
    img: img1,
    link: "#",
  },
  {
    id: 1,
    name: "Trending Products",
    img: img1,
    link: "#",
  },
  {
    id: 1,
    name: "Trending Products",
    img: img1,
    link: "#",
  },
  {
    id: 1,
    name: "Trending Products",
    img: img1,
    link: "#",
  },
  {
    id: 1,
    name: "Trending Products",
    img: img1,
    link: "#",
  },
];

const Navbar = ({ handleLogout, handleOrderPopup }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogoutClick = () => {
    localStorage.setItem("isAuthenticated", "false");
    navigate('/login')
    console.log('isAuthenticated: ', isAuthenticated);
    setDropdownOpen(false);

  };

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  console.log('isAuthenticated: ', isAuthenticated);

  return (
    <div className="shadow-sm dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="fixed z-[9999] top-0 left-0 right-0 bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]/50 backdrop-blur-md ">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-[#020b38d3] dark:text-white text-2xl sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="logo" className="w-14" />
              {/* Shop <span className="text-[#000000d3]">-</span>
                <span className="text-[#ff0505d3] font-extrabold">e</span> */}
            </a>
          </div>
          {/* searchbar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative hidden sm:block group ">
              <input
                type="text"
                placeholder="Search"
                className="md:w-[150px]  group-hover:w-[800px]  group-hover:bg-gray-100 dark:group-hover:bg-gray-800  transition-all duration-700 rounded-full  border-gray-400 px-2 py-1 focus:outline-none focus:border-1  focus:border-[] dark:border-[#ffe11b] dark:bg-gray-800"
              />
              <IoMdSearch className="text-black text-2xl dark:text-white group-hover:text-black dark:group-hover:text-white    absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <Link to='/cart'>
              <button
                onClick={() => handleOrderPopup()}
                className="bg-[#ffe11b] dark:border-gray-500 dark:bg-gray-800 transition-all duration-300 text-black dark:text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-300">
                  Cart
                </span>
                <FaCartShopping className="text-xl  dark:text-white text-black  drop-shadow-sm cursor-pointer" />
              </button>
            </Link>
            {/* profile icons */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="bg-[#ffe11b] dark:border-gray-500 dark:bg-gray-800 transition-all duration-300 text-black dark:text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-300">
                  Profile
                </span>
                <FaUserCircle className="text-xl dark:text-white text-black  drop-shadow-sm cursor-pointer" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 px-2 z-10">
                  {isAuthenticated ? (
                    <button
                      onClick={handleLogoutClick}
                      className="inline-block w-full rounded-md px-3 py-2 hover:bg-gradient-to-r from-primary to-secondary/30 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 text-left flex items-center"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="inline-block w-full rounded-md px-3 py-2 hover:bg-gradient-to-r from-primary to-secondary/30 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 text-left flex items-center"
                      >
                        <FaSignInAlt className="mr-2" />
                        Login
                      </Link>
                      <Link
                        to="/sign-up"
                        className="inline-block w-full rounded-md px-3 py-2 hover:bg-gradient-to-r from-primary to-secondary/30 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 text-left flex items-center"
                      >
                        <FaUserCircle className="mr-2" />
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            {/* Dark mode switch */}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className=" mt-14   bg-white dark:bg-gray-900 mx-2 rounded  shadow-lg dark:text-white ">
        <ul className="sm:flex  hidden items-center justify-between  container mx-auto ">
          {/* Mapping Menu items */}
          {Menu.map((data) => (
            <li key={data.id} className="flex flex-col items-center text-sm gap-2 ">
              <a  href={data.link}>
                <img src={data.img} alt={data.name} className="w-12" />
              </a>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Simple dropdown and links */}
          <li className="group relative cursor-pointer mt-2">
            <img src={img2} alt="name" className="w-12" />
            <a href="#" className="flex text-sm items-center gap-[2px] py-2">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[300px] h-auto right-0 rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id} className="flex flex-row text-sm">
                    <img src={data.img} alt={data.name} className="w-12" />
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-gradient-to-r from-primary to-secondary/30"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
