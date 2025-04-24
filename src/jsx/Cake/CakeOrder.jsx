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

  return (
    <div>
      <CakeHeaderLinks />
      {loggedInUser ? (
        <div>
          <h1>Your Order</h1>
          {cartDetails.length === 0 ? (
            <p>No products in your order.</p>
          ) : (
            <ul className="cake-order-list">
              {cartDetails.map((cake, index) => (
                <li key={index}>
                  <h2>
                    {cake.name} {cake.quantity > 1 && `x${cake.quantity}`}
                  </h2>
                  <div>
                    <img src={cake.image} alt={cake.name} />
                    <p>{cake.price * cake.quantity} Kr</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <h2>Total Price: {totalPrice} Kr</h2>
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