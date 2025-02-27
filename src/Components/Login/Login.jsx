import React, { useState } from 'react';
import Logo from "../../assets/new-logo.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
    const navigate = useNavigate();

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    // Formik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            axios.post('http://localhost:3001/login', values)
                .then(result => {
                    console.log(result);
                    if (result.data === 'success') {
                        localStorage.setItem('isAuthenticated', true);
                        navigate('/');
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
    });

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6] dark:bg-black"></div>
            <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6] rounded-3xl dark:bg-black rotate-45 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"></div>
            <div className='flex flex-col gap-5'>
                <div className='relative z-10'>
                    <a className="font-bold text-[#020b38d3] dark:text-white text-2xl sm:text-3xl justify-center flex items-center gap-2">
                        <img src={Logo} alt="logo" className="w-20" />
                    </a>
                </div>
                <div className="relative z-10 bg-white/30 backdrop-blur-3xl dark:bg-gray-800 lg:mr-44 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 dark:text-gray-200">Login</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                type="email"
                                id="email"
                                className="w-full lg:py-3 lg:pl-2 p-3 bg-white/20 text-gray-700 focus:outline-none rounded-lg dark:bg-gray-700 dark:text-gray-300"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="w-full lg:py-3 lg:pl-2 p-3 bg-white/20 focus:outline-none text-gray-700 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 lg:right-5 right-0 flex items-center pr-3"
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-700 dark:text-gray-300" />
                                </button>
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500 text-sm">{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6] text-gray-700 p-3 rounded-lg"
                        >
                            Login
                        </button>
                        <div className='pt-4'>
                            <Link to='/sign-up'>
                                <h3 className='pb-4 text-gray-700 hover:text-[#ffe11b] hover:underline'>Create New account?</h3>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6] text-gray-700 p-3 rounded-lg"
                                >
                                    Signup
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;