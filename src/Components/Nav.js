import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Css/nav.css";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
    return (
        <div className='navbar'>
            <ul className='navbar-list'>
                <li>
                    <NavLink to="/" className="navbar-link">
                        HOME
                    </NavLink></li>
                <li>
                    <NavLink to="/about" className="navbar-link">
                        ABOUT
                    </NavLink></li>
                <li>
                    <NavLink to="/product" className="navbar-link">
                        PRODUCTS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navbar-link">
                        CONTACTS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="navbar-link  cart-trolley--link">
                        <FiShoppingCart className="cart-trolley" />
                        <span classname="cart-total--item">0</span>

                    </NavLink>
                </li>
            </ul>


        </div >
    )
}
export default Nav;