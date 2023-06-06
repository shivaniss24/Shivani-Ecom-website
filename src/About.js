import React from 'react'
import HeroSection from './Components/HeroSection';

const About = () => {
    const data = {
        name: "Continue Shopping..",
    };
    return (
        <HeroSection myData={data} />
    );
};

export default About;