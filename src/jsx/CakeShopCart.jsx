import React from "react";
import "../css/cakeShopCart.css";

const CakeShopCart = ({ cart }) => {
  let totalPrice = 0;
  cart.forEach((cake) => {
    totalPrice += cake.price;
  });
  return (
    <div className="cake-shop-cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((cake, index) => (
            <div className="cake-cart-item">
              <li key={index}>
                <h2>{cake.name}</h2>
                <img src={cake.image} alt={cake.name} />
              </li>
            </div>
          ))}
          <li>Total price: {totalPrice}</li>
        </ul>
      )}
    </div>
  );
};

export default CakeShopCart;