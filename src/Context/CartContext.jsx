import React, { createContext, useState, useContext, useEffect } from "react";

// Create the CartContext
const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState("Villupuram - 605602");
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Loading state

   
    // Load cart data and cart visibility from local storage when the component mounts
    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems");
        const savedCartOpen = localStorage.getItem("isCartOpen");

        if (savedCart) setCartItems(JSON.parse(savedCart));
        if (savedCartOpen) setIsCartOpen(JSON.parse(savedCartOpen));

        setIsLoading(false); // Data retrieval complete
    }, []);

    // Save cart data to local storage whenever cartItems change
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems, isLoading]);

    // Save cart visibility state to local storage whenever it changes
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem("isCartOpen", JSON.stringify(isCartOpen));
        }
    }, [isCartOpen, isLoading]);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });

        setIsCartOpen(true); // Open cart when an item is added
    };

    const removeItemFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateItemQuantity = (id, type) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                    }
                    : item
            )
        );
    };

    const handleInputChange = (id, value) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: value ? Math.max(1, parseInt(value, 10)) : 1 } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems"); // Clear local storage when cart is cleared
    };
    

    return (
        <CartContext.Provider
            value={{
                cartItems,
                selectedAddress,
                setSelectedAddress,
                addItemToCart,
                removeItemFromCart,
                updateItemQuantity,
                handleInputChange,
                clearCart,
                isCartOpen,
                setIsCartOpen,
                isLoading, // Expose loading state
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Create a custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// Export CartContext as a named export
export { CartContext };












































// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   // Load cart from localStorage on initial render
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id, quantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
//     );
//   };

//   const clearCart = () => {
//     setCart([]); // Clear the cart
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };