import React from 'react';
import Logo from "../../assets/logo.png";

const Login = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">

            <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-r from-primary to-secondary/40 dark:bg-black"></div>
            <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-primary to-secondary/40 rounded-3xl dark:bg-black rotate-45 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"></div>
            <div className='flex flex-col gap-5 '>
                <div className='relative z-10'>
                    <a href="#" className=" font-bold text-[#020b38d3] dark:text-white text-2xl sm:text-3xl justify-center flex items-center gap-2">
                        <img src={Logo} alt="logo" className="w-10" />
                        Shop <span className="text-[#000000d3]">-</span><span className="text-[#ff0505d3] font-extrabold">e</span>
                    </a>
                </div>
                <div className="relative z-10 bg-white dark:bg-gray-800 border p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full lg:py-3 lg:px-72 lg:pl-2 p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full lg:py-3 lg:px-72 lg:pl-2 p-3  border rounded-lg dark:bg-gray-700 dark:text-gray-300"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white p-3 rounded-lg"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
