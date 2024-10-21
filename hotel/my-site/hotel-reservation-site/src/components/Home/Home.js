import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import SectionTitle from "../SectionTitle/SectionTitle";
import SpecialRooms from "../SpecialRooms/SpecialRooms";
import ScrollButton  from "../ScrollButton/ScrollButton "


// import Space from '../Space/Space';
// import SearchPanel from '../SearchPanel/SearchPanel';
const Home = () => {
  return (
    <div>
    <Slider/>
    <AboutUs />
    <SpecialRooms/>
    <Footer />
    <ScrollButton/>
    </div>
  );
};

export default Home;
