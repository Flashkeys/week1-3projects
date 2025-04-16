import React from "react";
import "../css/cakeShopCart.css";
import xIcon from "../img/cake/x.png";

const CakeShopCart = ({ cart, totalPrice, closeCart, removeFromCart }) => {
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
    </div>
  );
};

export default CakeShopCart;