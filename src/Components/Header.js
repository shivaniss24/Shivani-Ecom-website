import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Css/header.css";
import Nav from './Nav';

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/">
                <img src="./images/My_logo.png" alt="my logo img" />
            </NavLink>
            <Nav />
        </div>
    )
}

export default Header;