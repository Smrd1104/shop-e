import React, { useState, useEffect } from 'react';
import { BiSolidUpArrow } from "react-icons/bi";
import gsap from "gsap";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Calculate scroll progress percentage
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        
        gsap.to("#scroll-progress", { strokeDashoffset: 100 - progress, duration: 0.5, ease: "power2.out" });
        setScrollProgress(progress);
        setIsVisible(scrollTop > 300);
    };

    // Scroll the window to the top
    const scrollToTop = () => {
        gsap.to(window, { scrollTo: { y: 0, autoKill: true }, duration: 1, ease: "power2.out" });
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
                    className="relative p-3 rounded-full bg-primary text-white hover:bg-secondary transition-opacity opacity-70 hover:opacity-100"
                >
                    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                        <circle
                            className="text-secondary"
                            strokeWidth="4"
                            stroke="currentColor"
                            fill="transparent"
                            r="16"
                            cx="18"
                            cy="18"
                        />
                        <circle
                            id="scroll-progress"
                            className="text-primary"
                            strokeWidth="4"
                            strokeDasharray="100"
                            strokeDashoffset="100"
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
