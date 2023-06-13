import React from 'react';
import "../Css/footer.css";
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import '../Css/button.css';

const Footer = () => {
    return (
        <div>
            <section className='contact-short'>
                <div className='grid grid-two-column'>
                    <div className='intro'>
                        <h3 className='head-1'>Ready to get started</h3>
                        <h3 className='head-2'>Talk to us today</h3>
                    </div>
                    <div>
                        <button className='start-btn'>
                            <NavLink to="/contact">
                                Get Started
                            </NavLink>
                        </button>
                    </div>
                </div>

            </section>

            {/* main footer */}

            <footer>
                <div className='container grid grid-four-column'>
                    <div className='footer-about'>
                        <h3>Shop It</h3>
                        <p>Let's do shopping</p>
                    </div>
                    <div className='footer-subscribe'>
                        <h3>Subscribe to get important updates</h3>
                        <form action='#'>
                            <input type='email' placeholder='your e-mail'></input>
                            <input type='submit' value="Subscribe" className='subscribe-input-btn'></input>
                        </form>
                    </div>
                    <div className='footer-social'>
                        <h3>follow us</h3>
                        <div className='footer-social--icons'>
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                < FaYoutube className="icons" />
                            </div>

                        </div>


                    </div>
                    <div className='footer-contact'>
                        <h3>Call Us</h3>
                        <h3>9876656587</h3>
                    </div>
                </div>
                <div className='footer-bottom-section'>
                    <hr />
                    <div className='container grid grid-two-column'>
                        <p>@{new Date().getFullYear()}2023 Shop It. All Rights Reserved</p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer