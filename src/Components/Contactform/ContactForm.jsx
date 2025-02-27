import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            service: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            mobile: Yup.string().required('Mobile number is required'),
            service: Yup.string().required('Service is required'),
            // message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            axios.post('http://localhost:3001/contact', values)
                .then(result => {
                    console.log(result);
                    resetForm();
                })
                .catch(err => {
                    console.log(err);
                });
        },
    });

    return (
        <div className="relative py-14 flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6] dark:bg-black"></div>
            <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6] rounded-3xl dark:bg-black rotate-45 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"></div>
            <div className='flex flex-col gap-5 '>
                <div className="relative z-10  bg-white/30 backdrop-blur-3xl dark:bg-gray-800  lg:mr-44 p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 dark:text-gray-200">Contact Us</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className="w-full lg:py-3 lg:pl-2 p-3 text-gray-700 rounded-lg focus:outline-none dark:bg-gray-700 bg-white/20 dark:text-gray-300"
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500 text-sm">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="w-full lg:py-3 lg:pl-2 p-3 text-gray-700 focus:outline-none dark:bg-gray-700 bg-white/20 rounded-lg  dark:text-gray-300"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700  dark:text-gray-300 mb-2" htmlFor="mobile">Mobile</label>
                            <PhoneInput
                                country={'in'}
                                value={formik.values.mobile}
                                onChange={(phone) => formik.setFieldValue('mobile', phone)}
                                onBlur={formik.handleBlur}
                                inputStyle={{
                                    width: '100%',
                                    height: 'calc(2.25rem + 12px)',
                                    fontSize: '1rem',
                                    color: '#212121',
                                    backgroundColor: '#ffffff33',
                                    backgroundClip: 'padding-box',
                                    borderRadius: '0.5rem',
                                }}
                                inputProps={{
                                    name: 'mobile',
                                    required: true,
                                    autoFocus: true,
                                    autoComplete: 'off',
                                    placeholder: '',
                                }}
                            />
                            {formik.touched.mobile && formik.errors.mobile ? (
                                <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="service">Service</label>
                            <input
                                type="text"
                                id="service"
                                name="service"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.service}
                                className="w-full lg:py-3 lg:pl-2 p-3  text-gray-700 focus:outline-none dark:bg-gray-700 bg-white/20 rounded-lg  dark:text-gray-300"
                            />
                            {formik.touched.service && formik.errors.service ? (
                                <div className="text-red-500 text-sm">{formik.errors.service}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                rows="5"
                                className="w-full lg:py-3 lg:pl-2 p-3 text-gray-700 focus:outline-none  bg-white/20 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                            ></textarea>
                            {formik.touched.message && formik.errors.message ? (
                                <div className="text-red-500 text-sm">{formik.errors.message}</div>
                            ) : null}
                        </div>

                        <button
                            type="submit"
                            className="w-full text-gray-700 bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]  p-3 rounded-lg"
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