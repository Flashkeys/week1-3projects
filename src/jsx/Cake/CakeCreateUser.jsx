import React, { useState } from "react";

const CakeCreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = () => {
    if (username && password) {
      const users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[username]) {
        alert("Username already exists. Please choose a different username.");
        return;
      }
      // Add the new user to the users object
      users[username] = { username, password, isLoggedIn: false };
      // Save the updated users object back to localStorage
      localStorage.setItem("users", JSON.stringify(users));
    
      alert("User created successfully!");
      setUsername("");
      setPassword("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleLogin = () => {
    if (username && password) {
      const users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[username] && users[username].password === password) {
        users[username].isLoggedIn = true;

        // Save the updated users object back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert(`Welcome, ${username}! You are now logged in.`);
        setUsername("");
        setPassword("");
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
    } else {
      alert("No user is currently logged in.");
    }
  }
  //localStorage.removeItem("user");
  return (
    <div>
      <div>
        <h1>Create User</h1>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleCreateUser}>Create Account</button>
      </div>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CakeCreateUser;