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
 const updateCart = (pizza, quantity) => {
  setCart((prevCart) => {
    const existingPizza = prevCart.find((item) => item.id === pizza.id);

    if (existingPizza) {
      if (quantity <= 0) {
        // Si la cantidad es 0 o menor, eliminamos el producto del carrito
        return prevCart.filter((item) => item.id !== pizza.id);
      } else {
        // Si la cantidad es mayor, actualizamos la cantidad
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity } : item
        );
      }
    }

    return [...prevCart, { ...pizza, quantity }];
  });
};
 return (
  <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice,updateCart }}>
   {children}
  </CartContext.Provider>
 );
};
