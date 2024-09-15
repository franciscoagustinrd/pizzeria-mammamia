import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./pages/Profile"; 
import NotFound from "./components/NotFound"; 
import { Route, Routes } from "react-router-dom";
import { CartProvider } from './context/CartContext.jsx';

export default function App() {
  return (
    <div>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
}
