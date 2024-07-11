// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { BiSolidUpArrow } from "react-icons/bi";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to a certain height
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsVisible(false); // Hide button after scrolling to top
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isVisible && 
                <button 
                    onClick={scrollToTop} 
                    className="p-3 rounded-full  bg-primary text-white hover:bg-secondary transition-opacity opacity-70 hover:opacity-100"
                >
                    <BiSolidUpArrow className='text-black dark:text-white'/>

                </button>
            }
        </div>
    );
};

export default ScrollToTopButton;
