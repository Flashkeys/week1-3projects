import React from "react";
import '../../css/Cake/cakeShopCart.css';
import xIcon from "../../img/cake/x.png";
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
  
    // Create a new order with the current cart details, total price, and purchase date
    const newOrder = {
      cartDetails: cart.map((cake) => ({
        ...cake, // Ensure all properties, including `image`, are included
      })),
      totalPrice: totalPrice,
      date: new Date().toLocaleString(), // Add the current date and time
    };
  
    // Initialize the orders array if it doesn't exist
    if (!users[loggedInUser.username].orders) {
      users[loggedInUser.username].orders = [];
    }
  
    // Add the new order to the orders array
    users[loggedInUser.username].orders.push(newOrder);
  
    // Update the users object in localStorage
    localStorage.setItem("users", JSON.stringify(users));
  
    alert(`Order placed successfully on ${newOrder.date}.`);
    navigate("/cakeOrder"); // Redirect to CakeOrder page
  };

  const isLoggedIn = Object.values(JSON.parse(localStorage.getItem("users")) || {}).some(
    (user) => user.isLoggedIn
  );
  
  console.log("Users in localStorage:", JSON.parse(localStorage.getItem("users")));
  console.log("Is any user logged in?", isLoggedIn);

  return (
    <div className="cake-shop-cart-container">
      <div className="cake-cart-header">
        <h1>Shopping Cart</h1>
        <img src={xIcon} alt="Close" className="close-icon" onClick={closeCart} />
      </div>
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
      {cart.length > 0 && (
        <div className="cake-cart-total">
          <h2>Total Price: {totalPrice} Kr</h2>
        </div>
      )}
      {isLoggedIn ? (
        <div>
          <p>
            Logged in as:{" "}
            {
              Object.values(JSON.parse(localStorage.getItem("users"))).find(
                (user) => user.isLoggedIn
              ).username
            }
          </p>
          <button onClick={handleBuyNow}>Buy now</button>
        </div>
      ) : (
        <p>Please log in to proceed with the purchase.</p>
      )}
    </div>
  );
};

export default CakeShopCart;