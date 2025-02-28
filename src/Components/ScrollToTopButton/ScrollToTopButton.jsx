import React, { useState, useEffect } from 'react';
import { BiSolidUpArrow } from "react-icons/bi";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Calculate scroll progress percentage
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
        
        setIsVisible(scrollTop > 300);
    };

    // Scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isVisible && (
                <button 
                    onClick={scrollToTop} 
                    className="relative p-3 rounded-full bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6] text-white  transition-opacity opacity-70 hover:opacity-100"
                >
                    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                        <circle
                            className="bg-clip-text text-transparent bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]"
                            strokeWidth="3.5"
                            stroke="currentColor"
                            fill="transparent"
                            r="16"
                            cx="18"
                            cy="18"
                        />
                        <circle
                            className="bg-gradient-to-r from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]"
                            strokeWidth="3.5"
                            strokeDasharray="100"
                            strokeDashoffset={100 - scrollProgress}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="16"
                            cx="18"
                            cy="18"
                        />
                    </svg>
                    <BiSolidUpArrow className='text-black dark:text-white relative z-10'/>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
