// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Home from "./Home";
import Footer from "./components/Footer";

export default function App() {
 return (
  <div>
   <Navbar></Navbar>
   {/*<Home></Home>*/}
   {/*<Register></Register>*/}
   {/*<Login></Login>*/}
   <Cart></Cart>
   <Footer></Footer>
  </div>
 );
}
