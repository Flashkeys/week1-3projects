import React from "react";
import "../css/cakeShopCart.css";
import xIcon from "../img/cake/x.png";
import { useNavigate } from "react-router-dom";

const CakeShopCart = ({ cart, totalPrice, closeCart, removeFromCart }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};

    // Find the logged-in user
    const loggedInUser = Object.values(users).find((user) => user.isLoggedIn);

    if (!loggedInUser) {
      alert("You must be logged in to proceed with the purchase.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Save the cart details and total price to the logged-in user
    users[loggedInUser.username].cartDetails = cart;
    users[loggedInUser.username].totalPrice = totalPrice;

    // Update the users object in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert(`Cart details saved for ${loggedInUser.username}.`);
    navigate("/cakeOrder"); // Redirect to CakeOrder page
  };

  const isLoggedIn = Object.values(JSON.parse(localStorage.getItem("users")) || {}).some(
    (user) => user.isLoggedIn
  );

  return (
    <div className="cake-shop-cart">
      <img src={xIcon} alt="Close" className="close-icon" onClick={closeCart} />
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((cake, index) => (
            <li key={index}>
              <h2>
                {cake.name} {cake.quantity > 1 && `x${cake.quantity}`}
              </h2>
              <div className="cake-cart-item">
                <img src={cake.image} alt={cake.name} />
                <p>{cake.price * cake.quantity} Kr</p>
              </div>
              <button onClick={() => removeFromCart(cake.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total Price: {totalPrice} Kr</h2>
      {isLoggedIn ? (
        <>
          <p>
            Logged in as:{" "}
            {
              Object.values(JSON.parse(localStorage.getItem("users"))).find(
                (user) => user.isLoggedIn
              ).username
            }
          </p>
          <button onClick={handleBuyNow}>Buy now</button>
        </>
      ) : (
        <p>Please log in to proceed with the purchase.</p>
      )}
    </div>
  );
};

export default CakeShopCart;