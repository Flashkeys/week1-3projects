import React from "react";
import '../../css/Cake/cakeHeaderLinks.css';
import CakeLogo from '../../img/cake/cakeLogo.png';

const CakeHeaderLinks = () => {
  const users = JSON.parse(localStorage.getItem("users")) || {};
  // Find the logged-in user
  const loggedInUser = Object.values(users).find((user) => user.isLoggedIn);

  const handleLogout = () => {
    if (loggedInUser) {
      // Set the logged-in user's isLoggedIn property to false
      users[loggedInUser.username].isLoggedIn = false;

      // Update the users object in localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // Reload the page to reflect the changes
      window.location.reload();
    }
  };

  return (
    <div className="cake-header-links-container">
      <div className="cake-header-links-title">
        <img src={CakeLogo} alt="Logo" className="cake-header-logo" />
      </div>
      <div className="cake-header-links-content">
        <ul className="cake-header-links">
          <li><a href="/cake">Cake Home</a></li>
          <li><a href="/cake">Shop List</a></li>
          <li><a href="/cakeAboutUs">About us</a></li>
          {loggedInUser && loggedInUser.isLoggedIn ? (
            <li><a href="/cakeCreateUser">Account</a></li>
          ) : (
            <li><a href="/cakeCreateUser">Login / Register</a></li>
          )}
          <li><a href="/cakeOrder">My Order</a></li>
          {loggedInUser && loggedInUser.isLoggedIn && (<li><a href="/cakeCreateUser" onClick={handleLogout}>Logout</a></li>)}
        </ul>
      </div>
    </div>
  );
};

export default CakeHeaderLinks;