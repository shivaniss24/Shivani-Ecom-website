import React from 'react'
import HeroSection from './Components/HeroSection';
import { useProductContext } from './context/productcontext';

const About = () => {
    const { myName } = useProductContext;
    const data = {
        name: "Continue Shopping..",
    };
    return (
        <>
            {myName}
            <HeroSection myData={data} /> {''}
        </>
    );
};

export default About;