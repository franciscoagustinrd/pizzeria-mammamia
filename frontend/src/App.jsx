import { UserProvider } from './context/UserContext.jsx'; 
import { CartProvider } from './context/CartContext.jsx';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile"; 
import Footer from "./components/Footer";
import NotFound from "./components/NotFound"; 
import AuthGuard from "./guard/AuthGuard.jsx";

export default function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            } />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </UserProvider>
      <Footer />
    </div>
  );
}
