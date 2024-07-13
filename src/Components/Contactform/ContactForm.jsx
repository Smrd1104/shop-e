import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can handle form submission logic here, like sending data to server or API
        // For demonstration, let's log the form data
        console.log({
            name,
            email,
            mobile,
            service,
            message
        });

        // Clear the form fields after submission (optional)
        setName('');
        setEmail('');
        setMobile('');
        setService('');
        setMessage('');

        // Example navigation after successful submission
        navigate('/');
    }

    return (
        <div className="relative py-14 flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-r from-primary to-secondary/40 dark:bg-black"></div>
            <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-primary to-secondary/40 rounded-3xl dark:bg-black rotate-45 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"></div>
            <div className='flex flex-col gap-5 '>
                {/* <div className='relative z-10'>
                    <a className=" font-bold text-[#020b38d3] dark:text-white text-2xl sm:text-3xl justify-center flex items-center gap-2">
                        <img src={Logo} alt="logo" className="w-10" />
                        Shop <span className="text-[#000000d3]">-</span><span className="text-[#ff0505d3] font-extrabold">e</span>
                    </a>
                </div> */}
                <div className="relative z-10 bg-white dark:bg-gray-800 border lg:mr-44 p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="name"
                                value={name}
                                className="w-full lg:py-3 lg:pl-2 p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                value={email}
                                className="w-full lg:py-3 lg:pl-2 p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="mobile">Mobile</label>
                            <PhoneInput
                                country={'in'}
                                value={mobile}
                                onChange={(phone) => setMobile(phone)}
                                inputStyle={{
                                    width: '100%',
                                    height: 'calc(2.25rem + 2px)',
                                    padding: '0.5rem 0.75rem',
                                    fontSize: '1rem',
                                    lineHeight: '1.5',
                                    color: '#1a202c',
                                    backgroundColor: '#fff',
                                    backgroundClip: 'padding-box',
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem',
                                    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                                }}
                                inputProps={{
                                    required: true,
                                    autoFocus: true,
                                    autoComplete: 'off',
                                    placeholder: '',
                                    
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="service">Service</label>
                            <input
                                onChange={(e) => setService(e.target.value)}
                                type="text"
                                id="service"
                                value={service}
                                className="w-full lg:py-3 lg:pl-2 p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
                            <textarea
                                onChange={(e) => setMessage(e.target.value)}
                                id="message"
                                value={message}
                                rows="5"
                                className="w-full lg:py-3 lg:pl-2 p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white p-3 rounded-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
