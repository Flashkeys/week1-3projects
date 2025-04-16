import React from "react";

const CakeShopCart = ({ cart, totalPrice }) => {
  return (
    <div className="cake-shop-cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((cake, index) => (
            <li key={index}>
              <h2>{cake.name}</h2>
              <img src={cake.image} alt={cake.name} />
              <p>{cake.price} Kr</p>
            </li>
          ))}
        </ul>
      )}
      <h2>Total Price: {totalPrice} Kr</h2>
    </div>
  );
};

export default CakeShopCart;