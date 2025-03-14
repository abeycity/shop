import { createContext } from "react"
import { allproduct } from "../utils/_variable";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";


export const GlobalContext=createContext(null);

const getDefaultCart = () => {
    const cart = {};
    for (let i = 0; i < allproduct.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };

 // eslint-disable-next-line react/prop-types
 export const GlobalProvider = ({children}) => {
    const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : getDefaultCart();
      });
    
      useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
      }, [cartItem]);

      const addToCart = (id) => {
        setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      };
    
      const removeFromCart = (id) => {
        setCartItem((prev) => ({ ...prev, [id]: Math.max(prev[id] - 1, 0) }));
      };
    
      const clear = (id) => {
        setCartItem((prev) => ({ ...prev, [id]: 0 }));
      };
    
      const clearAll = () => {
        setCartItem(getDefaultCart());
      };
    
      const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
          if (cartItem[item] > 0) {
            const itemInfo = allproduct.find((product) => product.id === Number(item));
            if (itemInfo) {
              totalAmount += itemInfo.price * cartItem[item];
            }
          }
        }
        return totalAmount
      };
    
        const getTotalCartItems = () => {
            let totalItems = 0;
            for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItems += cartItem[item];
            }
            }
            return totalItems;
        };
    return (
        <GlobalContext.Provider
        value={{
          cartItem,
          addToCart,
          removeFromCart,
          clear,
          clearAll,
          getTotalCartAmount,
          getTotalCartItems,
        }}
      >
        {children}
      </GlobalContext.Provider>
  )
}

// Custom hook for using the context

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
      throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};