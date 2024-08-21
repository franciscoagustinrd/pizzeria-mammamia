import { useState } from "react";

import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";

export default function App() {
 return (
  <div>
   <Navbar></Navbar>
   {/*<Home></Home>*/}
   <Register></Register>
   {/*<Login></Login>*/}
   <Footer></Footer>
  </div>
 );
}
