import React, { useState } from 'react';
import Logo from "../../assets/new-logo.png";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios.post('http://localhost:3001/register', values)
        .then(result => {
          console.log(result);
          localStorage.setItem('isAuthenticated', true);
          navigate('/login');
        })
        .catch(err => {
          console.log(err);
          formik.setErrors({ email: 'An error occurred. Please try again.' });
        });
    },
  });

  return (
    <div className="relative py-2 flex items-center justify-center min-h-screen bg-gray-100 backdrop-blur-md dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]"></div>
      <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6] rounded-3xl rotate-45 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"></div>
      <div className='flex flex-col gap-2'>
        <div className='relative z-10 -mt-5'>
          <a className="font-bold text-[#020b38d3] dark:text-white text-2xl sm:text-3xl justify-center flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-20" />
          </a>
        </div>
        <div className="relative w-full z-10 bg-white/30 backdrop-blur-3xl px-10 py-6 dark:bg-gray-800 rounded-lg shadow-lg lg:w-[500px]">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 dark:text-gray-200">Signup</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4 relative">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full lg:py-3 lg:pl-2 p-3 shadow-lg text-gray-700 rounded-lg bg-white/20 dark:bg-gray-700 focus:outline-none dark:text-gray-300"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full lg:py-3 lg:pl-2 p-3 shadow-lg text-gray-700 rounded-lg bg-white/20 dark:bg-gray-700 focus:outline-none dark:text-gray-300"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 dark:text-white mb-2" htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full lg:py-3 lg:pl-2 p-3 text-gray-700 rounded-lg bg-white/20 focus:outline-none dark:bg-gray-700 dark:text-gray-300"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute lg:right-10 right-3 top-12 cursor-pointer text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 rounded-lg dark:bg-gray-700 bg-white/20 text-gray-700 focus:outline-none dark:text-gray-300"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="absolute lg:right-10 right-3 top-12 cursor-pointer text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]/50 text-gray-700 p-3 rounded-lg"
            >
              Signup
            </button>
            <div className='pt-4'>
              <Link to='/login' className=''>
                <h3 className='pb-4 hover:text-[#fff] text-gray-700 hover:underline cursor-pointer'>Already have an account?</h3>
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]/50 text-gray-700 p-3 rounded-lg"
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