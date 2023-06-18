import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/page-nav.css";


const PageNavigation = ({ title }) => {
    return (
        <div className="page-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>/{title}
        </div>
    );
};
export default PageNavigation