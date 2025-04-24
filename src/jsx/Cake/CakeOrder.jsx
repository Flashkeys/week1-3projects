import React, { useState, useEffect } from "react";
import '../../css/Cake/cakeOrder.css';
import CakeHeaderLinks from "./CakeHeaderLinks";
import CakeFooter from "./CakeFooter";

const CakeOrder = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};

    // Find the logged-in user
    const user = Object.values(users).find((user) => user.isLoggedIn);
    console.log(user);

    if (user) {
      setLoggedInUser(user.username);
      setCartDetails(user.cartDetails || []);
      setTotalPrice(user.totalPrice || 0);
    }
  }, []);

  const handleRemoveOrder = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};

    // Find the logged-in user
    const user = Object.values(users).find((user) => user.isLoggedIn);

    if (user) {
      // Clear the cart details and total price for the logged-in user
      users[user.username].cartDetails = [];
      users[user.username].totalPrice = 0;

      // Update localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // Clear the state
      setCartDetails([]);
      setTotalPrice(0);

      alert("Your order has been removed.");
    } else {
      alert("No logged-in user found.");
    }
  };

  return (
    <div>
      <CakeHeaderLinks />
      {loggedInUser ? (
        <div>
          <h1>Your Order</h1>
          {cartDetails.length === 0 ? (
            <p>No products in your order.</p>
          ) : (
            <div className="cake-order-list-cards">
              {cartDetails.map((cake, index) => (
                <div className="cake-order-list-card" key={index}>
                  <h2>{cake.name} {cake.quantity > 1 && `x${cake.quantity}`}</h2>
                  <img src={cake.image} alt={cake.name} />
                  <p>{cake.price * cake.quantity} Kr</p>
                </div>
              ))}
            </div>
          )}
          <h2>Total Price: {totalPrice} Kr</h2>
          {/* Show remove button if you have an order*/}
          {cartDetails.length > 0 && (
            <button onClick={handleRemoveOrder}>Remove order</button>
          )}
        </div>
      ) : (
        <div>
          <h1>Please log in to view your order.</h1>
        </div>
      )}
      <CakeFooter />
    </div>
  );
};

export default CakeOrder;