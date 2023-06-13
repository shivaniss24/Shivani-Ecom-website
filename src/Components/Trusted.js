import React from 'react'
import "../Css/trusted.css";
import '../Css/button.css';

const Trusted = () => {
    return (
        <div className='brand-section'>
            <div className='trusted-container'>
                <h3 className='head-3'>Trusted By 1000+ Companies</h3>
                <div className='brand-section-slider'>
                    {/* my 1st img */}
                    <div className='slide'>
                        <img className='brand-sec-img' src="images/Meesho_Logo_Full.png" alt="trusted-brands" />

                    </div>
                    <div className='slide'>
                        <img className='brand-sec-img' src="images/Shopify.png" alt="trusted-brands" />
                    </div>
                    <div className='slide'></div>
                    <div className='slide'></div>
                    <div className='slide'></div>

                </div>

            </div>
        </div>
    )
}

export default Trusted;