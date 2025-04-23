import React from "react";
import '../../css/Cake/cakeHeaderLinks.css';

const CakeHeaderLinks = () => {
    return (
        <div className="cake-header-links-container">
            <ul className="cake-header-links">
                <li><a href="/cake">Cake Home</a></li>
                <li><a href="/cake">Shop List</a></li>
                <li><a href="/cakeAboutUs">About us</a></li>
                <li><a href="/cakeCreateUser">Register</a></li>
                <li><a href="/cake">Login</a></li>
                <li><a href="/cakeOrder">My Order</a></li>
            </ul>
        </div>
    );
};

export default CakeHeaderLinks;