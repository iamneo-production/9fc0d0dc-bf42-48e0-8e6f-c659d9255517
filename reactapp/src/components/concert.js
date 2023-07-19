import React from "react";
import "./concert.css";

import SliderImages from "./CardSlider";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./navbar";
import SliderImages2 from "./CardSlider2";
import CardComponent2 from "./card";


 const Concert = () => {
  return (
   
    <div className="home">
    
      <Navbar /> 
      <SliderImages2/>
      <CardComponent2 />
      <Footer />
        </div>
  );
};
export default Concert;