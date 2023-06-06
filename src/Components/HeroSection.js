import React from 'react'
import "../Css/herosection.css";
import { NavLink } from 'react-router-dom';

const HeroSection = ({ myData }) => {
    const { name } = myData;
    return (
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome To</p>
                    <h1>{name}</h1>
                    <p>Here you start your shopping....</p>
                    <NavLink>
                        <button className='btn'>Shop Now</button>
                    </NavLink>
                </div>
                {/* our homepage image */}
                <div className='hero-section-img'>
                    <figure>
                        <img src='images/hero.jpg' alt='home-img' className='img-style' />
                    </figure>


                </div>
            </div>

        </div>
    )
}

export default HeroSection