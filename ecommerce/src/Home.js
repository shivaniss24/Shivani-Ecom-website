import React from "react";
import "./Css/home.css";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";


const Home = () => {
    const data = {
        name: "Shop It",
    };
    return (
        <>
            <HeroSection myData={data} />
            <Services />
            <Trusted />

        </>
    );
};

export default Home;

