import React from "react";
import '../../css/Cake/cakeHeaderLinks.css';
import CakeLogo from '../../img/cake/cakeLogo.png';

const CakeHeaderLinks = () => {
  const users = JSON.parse(localStorage.getItem("users")) || {};
  // Find the logged-in user
  const loggedInUser = Object.values(users).find((user) => user.isLoggedIn);

  return (
    <div className="cake-header-links-container" >
      <div className="cake-header-links-title">
        <img src={CakeLogo} alt="Logo" className="cake-header-logo" />
      </div>
      <div className="cake-header-links-content">
        <ul className="cake-header-links">
          <li><a href="/cake">Cake Home</a></li>
          <li><a href="/cake">Shop List</a></li>
          <li><a href="/cakeAboutUs">About us</a></li>
          <li><a href="/cakeCreateUser">Login / Register</a></li>
          <li><a href="/cakeOrder">My Order</a></li>
          {loggedInUser && loggedInUser.isLoggedIn && (
            <li><a href="/cakeCreateUser" onClick={() => { localStorage.removeItem("users"); window.location.reload(); }}>Logout</a></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CakeHeaderLinks;