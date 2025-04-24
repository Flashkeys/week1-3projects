import React, { useState, useEffect } from "react";
import CakeHeaderLinks from "./CakeHeaderLinks";
import CakeFooter from "./CakeFooter";
import '../../css/Cake/cakeCreateUser.css';

const CakeCreateUser = () => {
  // Separate state for "Create User" and "Login"
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const loggedInUser = Object.values(users).find((user) => user.isLoggedIn);
    setIsLoggedIn(!!loggedInUser); // Set isLoggedIn to true if a user is logged in
  }, []);

  const handleCreateUser = () => {
    if (registerUsername && registerPassword) {
      const users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[registerUsername]) {
        alert("Username already exists. Please choose a different username.");
        return;
      }
      // Add the new user to the users object
      users[registerUsername] = { username: registerUsername, password: registerPassword, isLoggedIn: false };
      // Save the updated users object back to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      alert("User created successfully!");
      setRegisterUsername("");
      setRegisterPassword("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleLogin = () => {
    if (loginUsername && loginPassword) {
      const users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[loginUsername] && users[loginUsername].password === loginPassword) {
        users[loginUsername].isLoggedIn = true;

        // Save the updated users object back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert(`Welcome, ${loginUsername}! You are now logged in.`);
        setIsLoggedIn(true); // Update isLoggedIn state
        setLoginUsername("");
        setLoginPassword("");
      } else {
        alert("Invalid username or password. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleLogout = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};

    const loggedInUser = Object.values(users).find((user) => user.isLoggedIn);

    if (loggedInUser) {
      users[loggedInUser.username].isLoggedIn = false;

      // Save the updated users object back to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      alert(`Goodbye, ${loggedInUser.username}! You are now logged out.`);
      setIsLoggedIn(false); // Update isLoggedIn state
    } else {
      alert("No user is currently logged in.");
    }
  };

  return (
    <div className="cake-create-user-body">
      <CakeHeaderLinks />
      <div className="cake-create-user-container">
        <div>
          <h1>Create User</h1>
          <input
            type="text"
            placeholder="Enter username"
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={handleCreateUser}>Create Account</button>
        </div>
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Enter username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>

        {isLoggedIn && (
          <div>
            <h1>Logout</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <CakeFooter />
    </div>
  );
};

export default CakeCreateUser;