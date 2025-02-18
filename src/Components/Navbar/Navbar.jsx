import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/new-logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import Advertisement from "../Advertisement/Advertisement";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",

  },
  {
    id: 2,
    name: "Top Rated",
    link: "#",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "#",
  },
  {
    id: 3,
    name: "Top Rated",
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
    <div className="shadow-md bg-white   dark:bg-gray-900 dark:text-white duration-200 relative z-40">
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
                className="md:w-[150px]  group-hover:w-[800px]  group-hover:bg-gray-100  transition-all duration-700 rounded-full  border-gray-400 px-2 py-1 focus:outline-none focus:border-1  focus:border-[] dark:border-[#ffe11b] dark:bg-gray-800"
              />
              <IoMdSearch className="text-black text-2xl dark:text-white group-hover:text-black    absolute top-1/2 -translate-y-1/2 right-3" />
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
      <div className="flex mt-14 justify-center bg-gray-100 dark:text-white dark:bg-black">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple dropdown and links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
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
