import React from "react";
import "./home.css";
import { Navbar } from "../../components/navbar";
import { Link } from "react-router-dom";
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SliderImages from "../../components/CardSlider";
import Footer from "../../components/Footer";
// import Premieres from "../../components/Premieres";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from "../../components/Premieres";

 const Home = () => {
  return (
   
    <div className="home">
    
      <Navbar /> 
    <div className="slide-i">
      <SliderImages />
      </div>
      <CardComponent/>
      <div className="foot-cl">
      <Footer />
      </div>
        </div>
  );
};
export default Home;