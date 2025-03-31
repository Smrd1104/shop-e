import React, { useState, useEffect, useRef } from 'react';
import { IoMdSearch, IoMdClose } from 'react-icons/io';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';
import image1 from "../../assets/vkc/sport.jpeg";
import image2 from "../../assets/vkc/shoe.jpg";
import image3 from "../../assets/vkc/boots.jpg";
import image4 from "../../assets/vkc/formals.jpg";
import image5 from "../../assets/vkc/casuals.jpg";
import image6 from "../../assets/vkc/kids.jpeg";

const SearchBar = () => {
    const ProductsData = [
        {
            id: 1001,
            img: image6,
            name: "Kids Wear",
            rating: 5.0,
            color: "Diamond Blue",
            originalPrice: 1000, // Original price before discount
            discountPrice: 800,  // Price after discount
            discount: 20,        // Discount percentage
            seller: "VKC Footwear",
            quantity: 1,         // Initial quantity
            aosDelay: "0",
            link: "/cart-page",
        },
        {
            id: 1002,
            img: image2,
            name: "Casuals Wear",
            rating: 4.0,
            color: "Red",
            originalPrice: 1200,
            discountPrice: 900,
            discount: 25,
            seller: "VKC Footwear",
            quantity: 1,
            aosDelay: "200",
            link: "/cart-page",
        },
        {
            id: 1003,
            img: image3,
            name: "Boots Shoes",
            rating: 4.8,
            color: "Brown",
            originalPrice: 1500,
            discountPrice: 1200,
            discount: 20,
            seller: "VKC Footwear",
            quantity: 1,
            aosDelay: "400",
            link: "/cart-page",
        },
        {
            id: 1004,
            img: image4,
            name: "Formal Shoes",
            rating: 4.6,
            color: "Yellow",
            originalPrice: 2000,
            discountPrice: 1600,
            discount: 20,
            seller: "VKC Footwear",
            quantity: 1,
            aosDelay: "600",
            link: "/cart-page",
        },
        {
            id: 1005,
            img: image5,
            name: "Parties Shoes",
            rating: 4.7,
            color: "Pink",
            originalPrice: 1800,
            discountPrice: 1400,
            discount: 22,
            seller: "VKC Footwear",
            quantity: 1,
            aosDelay: "800",
            link: "/cart-page",
        },
        {
            id: 1006,
            img: image1,
            name: "Sports Wear",
            rating: 5.0,
            color: "Diamond Blue",
            originalPrice: 1300,
            discountPrice: 1000,
            discount: 23,
            seller: "VKC Footwear",
            quantity: 1,
            aosDelay: "0",
            link: "/cart-page",
        },
        {
            id: 1007,
            img: image3,
            name: "Sports Wear",
            rating: 5.0,
            color: "Diamond Blue",
            originalPrice: 1300,
            discountPrice: 1000,
            discount: 23,
            seller: "VKC Footwear",
            quantity: 1,
            aosDelay: "0",
            link: "/cart-page",
        },
        {
            id: 1008,
            img: image5,
            name: "Sports Wear",
            rating: 5.0,
            color: "Diamond Blue",
            originalPrice: 1300,
            discountPrice: 1000,
            discount: 23,
            seller: "VKC Footwear",
            quantity: 1,
            aosDelay: "0",
            link: "/cart-page",
        },
        {
            id: 1009,
            img: image2,
            name: "Sports Wear",
            rating: 5.0,
            color: "Diamond Blue",
            originalPrice: 1300,
            discountPrice: 1000,
            discount: 23,
            seller: "VKC Footwear",
            quantity: 1,
            aosDelay: "0",
            link: "/cart-page",
        },
        {
            id: 1010,
            img: image1,
            name: "Sports Wear",
            rating: 5.0,
            color: "Diamond Blue",
            originalPrice: 1300,
            discountPrice: 1000,
            discount: 23,
            seller: "VKC Footwear",
            quantity: 1,
            aosDelay: "0",
            link: "/cart-page",
        },
        // Add more products as needed
    ];
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const searchInputRef = useRef(null);
    const navigate = useNavigate();

    // Combine products when component mounts
    useEffect(() => {
        setAllProducts([...ProductsData]);
    }, []);

    // Focus management for mobile search
    useEffect(() => {
        if (isMobileSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isMobileSearchOpen]);

    // Keyboard navigation for search results
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!showResults) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedResultIndex(prev =>
                    prev < searchResults.length - 1 ? prev + 1 : prev
                );
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedResultIndex(prev =>
                    prev > 0 ? prev - 1 : 0
                );
            } else if (e.key === 'Enter' && selectedResultIndex >= 0) {
                const product = searchResults[selectedResultIndex];
                navigate(product.link);
                clearSearch();
            } else if (e.key === 'Escape') {
                clearSearch();
                if (isMobileSearchOpen) setIsMobileSearchOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showResults, searchResults, selectedResultIndex, navigate, isMobileSearchOpen]);

    // Debounced search function
    const debouncedSearch = debounce((query) => {
        if (query.trim() === '') {
            setSearchResults([]);
            return;
        }

        const results = allProducts.filter(product =>
            product.name?.toLowerCase().includes(query.toLowerCase()) ||
            product.color?.toLowerCase().includes(query.toLowerCase()) ||
            product.seller?.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        setSelectedResultIndex(-1);
    }, 300);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setSearchResults([]);
            setShowResults(false);
            return;
        }
        setShowResults(true);
        debouncedSearch(query);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
        setShowResults(false);
        setSelectedResultIndex(-1);
    };

    const handleResultClick = (product) => {
        navigate(product.link);
        clearSearch();
        if (isMobileSearchOpen) setIsMobileSearchOpen(false);
    };

    const toggleMobileSearch = () => {
        setIsMobileSearchOpen(!isMobileSearchOpen);
        if (!isMobileSearchOpen) {
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 100);
        } else {
            clearSearch();
        }
    };

    return (
        <div className="relative">
            {/* Desktop Search - Always visible on larger screens */}
            <div className="hidden sm:block relative w-full max-w-2xl mx-auto">
                <div className="relative md:w-[800px] md:z-50 md:right-32">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        onFocus={() => searchQuery && setShowResults(true)}
                    />
                    <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                    {searchQuery && (
                        <button
                            onClick={clearSearch}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            aria-label="Clear search"
                        >
                            <IoMdClose className="text-gray-500 text-xl hover:text-gray-700 dark:hover:text-white" />
                        </button>
                    )}
                </div>

                {/* Search Results Dropdown */}
                {showResults && (
                    <div className="absolute  md:w-[800px] md:z-50 md:right-0 z-50 mt-2 w-full bg-white  dark:bg-gray-800 shadow-lg rounded-lg max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700">
                        {searchResults.length > 0 ? (
                            <>
                                <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                                    <h3 className="font-semibold text-gray-700 dark:text-white">
                                        {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
                                    </h3>
                                </div>
                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {searchResults.map((product, index) => (
                                        <div
                                            key={product.id}
                                            className={`p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center ${selectedResultIndex === index ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                            onClick={() => handleResultClick(product)}
                                            onMouseEnter={() => setSelectedResultIndex(index)}
                                        >
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-12 h-12 object-cover rounded mr-3"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-gray-800 dark:text-white truncate">
                                                    {product.name}
                                                </h4>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                                        ₹{product.discountPrice?.toFixed(2)}
                                                        {product.discount > 0 && (
                                                            <span className="ml-2 line-through text-xs text-gray-400">
                                                                ₹{product.originalPrice?.toFixed(2)}
                                                            </span>
                                                        )}
                                                    </p>
                                                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded">
                                                        {product.rating} ★
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : searchQuery ? (
                            <div className="p-4 text-center">
                                <p className="text-gray-600 dark:text-gray-300">No products found matching "{searchQuery}"</p>
                            </div>
                        ) : null}
                    </div>
                )}
            </div>

            {/* Mobile Search Toggle Button */}
            <button
                onClick={toggleMobileSearch}
                className="sm:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Search"
            >
                <IoMdSearch className="text-xl text-gray-700 dark:text-white" />
            </button>

            {/* Mobile Search Overlay */}
            {isMobileSearchOpen && (
                <div className="fixed inset-0 z-40">
                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={() => {
                            setIsMobileSearchOpen(false);
                            clearSearch();
                        }}
                    />

                    {/* Mobile Search Container */}
                    <div className="relative z-50 bg-white dark:bg-gray-800 p-4 shadow-lg">
                        <div className="flex items-center">
                            <div className="relative flex-1">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="w-full bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    onFocus={() => searchQuery && setShowResults(true)}
                                />
                                <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                                {searchQuery && (
                                    <button
                                        onClick={clearSearch}
                                        className="absolute right-3  top-1/2 transform -translate-y-1/2"
                                        aria-label="Clear search"
                                    >
                                        <IoMdClose className="text-gray-500 text-xl hover:text-gray-700 dark:hover:text-white" />
                                    </button>
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    setIsMobileSearchOpen(false);
                                    clearSearch();
                                }}
                                className="ml-2 text-gray-700 dark:text-white font-medium"
                            >
                                Cancel
                            </button>
                        </div>

                        {/* Mobile Search Results */}
                        {showResults && (
                            <div className="absolute left-0 right-0 mt-2 bg-white h-screen dark:bg-gray-800 shadow-lg rounded-b-lg max-h-[70vh] overflow-y-auto border-t border-gray-200 dark:border-gray-700">
                                {searchResults.length > 0 ? (
                                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {searchResults.map((product, index) => (
                                            <div
                                                key={product.id}
                                                className={`p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center ${selectedResultIndex === index ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                                onClick={() => handleResultClick(product)}
                                                onMouseEnter={() => setSelectedResultIndex(index)}
                                            >
                                                <img
                                                    src={product.img}
                                                    alt={product.name}
                                                    className="w-12 h-12 object-cover rounded mr-3"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-medium text-gray-800 dark:text-white truncate">
                                                        {product.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                                        ₹{product.discountPrice?.toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : searchQuery ? (
                                    <div className="p-4 text-center">
                                        <p className="text-gray-600 dark:text-gray-300">No products found</p>
                                    </div>
                                ) : null}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;


