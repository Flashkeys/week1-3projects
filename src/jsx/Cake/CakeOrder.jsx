import React, { useState, useEffect } from "react";
import '../../css/Cake/cakeOrder.css';
import CakeHeaderLinks from "./CakeHeaderLinks";
import CakeFooter from "./CakeFooter";
import CakeSideBar from '../../img/cake/cakeSideBar.png';

const CakeOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};

    // Find the logged-in user
    const user = Object.values(users).find((user) => user.isLoggedIn);

    if (user) {
      setLoggedInUser(user.username);
      setOrders(user.orders || []); // Load all orders for the logged-in user
    }
  }, []);

  return (
    <div className="cake-order-body">
      <CakeHeaderLinks />
      <div className="cake-order-container">
        <div>
          <img src={CakeSideBar} alt="cakeSideBar" className="cake-side-bar" />
        </div>
        {loggedInUser ? (
          <div>
            <h1>Your Orders</h1>
            {orders.length === 0 ? (
              <p>No orders found.</p>
            ) : (
              <div className="cake-order-list">
                {orders.map((order, index) => (
                  <div key={index} className="cake-order-item">
                    <h2>Order #{index + 1}</h2>
                    <p>Date: {order.date}</p>
                    <ul>
                      <div className="cake-order-list-card-container">
                        {order.cartDetails.map((cake, i) => (
                          <div className="cake-order-list-card" key={i}>
                            <h3>
                              {cake.name} {cake.quantity > 1 && `x${cake.quantity}`}
                            </h3>
                            <div className="cake-order-list-card-image">
                              <img src={cake.image} alt={cake.name} /> {/* Ensure image is displayed */}
                            </div>
                            <p>{cake.price * cake.quantity} Kr</p>
                          </div>
                        ))}
                      </div>
                    </ul>
                    <h3>Total Price: {order.totalPrice} Kr</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <h1>Please log in to view your orders.</h1>
          </div>
        )}
        <div>
          <img src={CakeSideBar} alt="cakeSideBar" className="cake-side-bar" />
        </div>
      </div>
      <CakeFooter />
    </div>
  );
};

export default CakeOrder;