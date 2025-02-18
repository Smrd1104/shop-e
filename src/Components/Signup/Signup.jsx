import React, { useState } from 'react';
import Logo from "../../assets/shop-e-png.png";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    axios.post('http://localhost:3001/register', { email, password })
      .then(result => {
        console.log(result);
        localStorage.setItem('isAuthenticated', true);
        navigate('/login');
      })
      .catch(err => {
        console.log(err);
        setError("An error occurred. Please try again.");
      });
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="relative py-2 flex items-center justify-center min-h-screen bg-gray-100 backdrop-blur-md    dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-90 bg-gradient-to-r from-primary to-secondary/40"></div>
      <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-primary to-secondary/40 rounded-3xl rotate-45 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"></div>
      <div className='flex flex-col gap-2'>
        <div className='relative z-10 -mt-5'>
          <a className="font-bold text-[#020b38d3] dark:text-white text-2xl sm:text-3xl justify-center flex items-center gap-2 ">
            <img src={Logo} alt="logo" className="w-20" />
            {/* Shop <span className="text-[#000000d3]">-</span><span className="text-[#ff0505d3] font-extrabold">e</span> */}
          </a>
        </div>
        <div className="relative w-full z-10 bg-white/40  dark:bg-gray-800 px-10 py-6 rounded-lg shadow-lg lg:w-[500px]">
          <h2 className="text-2xl font-bold mb-6 text-center text-white dark:text-gray-200">Signup</h2>
          {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className=''>
            <div className="mb-4 relative">
              <label className="block text-white dark:text-gray-300 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full lg:py-3 lg:pl-2 p-3 shadow-lg  text-white rounded-lg bg-white/10  dark:bg-gray-700 focus:outline-none dark:text-gray-300"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-white dark:text-white mb-2" htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full lg:py-3 lg:pl-2 p-3 text-white  rounded-lg bg-white/10  focus:outline-none dark:bg-gray-700 dark:text-gray-300"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute lg:right-10 right-3 top-12 cursor-pointer text-white"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-white dark:text-gray-300 mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full p-3   rounded-lg dark:bg-gray-700 bg-white/10  text-white focus:outline-none dark:text-gray-300"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="absolute lg:right-10 right-3 top-12 cursor-pointer text-white"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-lg"
            >
              Signup
            </button>

            <div className='pt-4'>
              <Link to='/login' className=''>
                <h3 className='pb-4 hover:text-[#ffe11b] text-white hover:underline cursor-pointer'>Already have an account?</h3>
                <button
                  type="button"
                  className="w-full bg-primary text-white p-3  rounded-lg"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
