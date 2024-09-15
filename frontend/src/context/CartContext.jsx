import React, { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]);

 const addToCart = (pizza) => {
  setCart((prevCart) => {
   const existingPizza = prevCart.find((item) => item.id === pizza.id);
   if (existingPizza) {
    return prevCart.map((item) =>
     item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
    );
   }
   return [...prevCart, { ...pizza, quantity: 1 }];
  });
 };

 const removeFromCart = (id) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== id));
 };

 const totalPrice = useMemo(() => {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
 }, [cart]);

 return (
  <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
   {children}
  </CartContext.Provider>
 );
};
