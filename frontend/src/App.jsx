// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import Cart from "./components/Cart";
import Pizza from "./components/Pizza"
// import Register from "./components/Register";
// import Login from "./components/Login";
import Home from "./Home";
import Footer from "./components/Footer";

export default function App() {
 return (
  <div>
   <Navbar></Navbar>
   <Pizza></Pizza> 
{/* <Home></Home>  */}
   {/*<Register></Register>*/}
   {/*<Login></Login>*/}
   {/* <Cart></Cart> */}
   <Footer></Footer>
  </div>
 );
}
