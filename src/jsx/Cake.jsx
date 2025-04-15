import React, { useState } from "react";
import "../css/cake.css";
import cheeseCake from "../img/cake/cheesecake.jpg";
import chocolateCake from "../img/cake/chockladecake.jpg";
import vanillaCake from "../img/cake/vanillacake.jpg";
import lemonCake from "../img/cake/lemoncake.jpg";
import chockladeCookies from "../img/cake/Chockladecookies.jpg";
import rainbowCake from "../img/cake/rainbowCookies.jpg";
import snackBox1 from "../img/cake/snackbox1.jpg";
import snackBox2 from "../img/cake/snackbox2.jpg";
import snackBox3 from "../img/cake/snackbox3.jpg";
import snackBox4 from "../img/cake/snackbox4.jpg";
import { Link } from "react-router-dom";
import cakes from "../json/cakes.json";
import CakeShopCart from "./CakeShopCart";
import CakeFooter from "./CakeFooter";

const Cake = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const images = {
    chocolateCake,
    vanillaCake,
    lemonCake,
    cheeseCake,
    chockladeCookies,
    rainbowCake,
    snackBox1,
    snackBox2,
    snackBox3,
    snackBox4,
  };

  function handleClick(cakeId) {
    const selectedCake = cakes.find((cake) => cake.id === cakeId);
    if (selectedCake) {
      setCart((prevCart) => [...prevCart, { ...selectedCake, image: images[cakeId] }]);
    }
  }

  const filteredCakes = cakes.filter((cake) =>
    cake.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="cake-background-body">
      <div className="cake-container">
        <div className="cake-header">
          <h1>Cake Store</h1>
          <ul className="cake-header-links">
            <li><a href="/cake">Cake Home</a></li>
            <li><a href="/cake">Shop List</a></li>
            <li><a href="/cake">About us</a></li>
            <li><a href="/cake">Register</a></li>
            <li><a href="/cake">Login</a></li>
            <li><a href="/cake">My account</a></li>
          </ul>
        </div>
        <div className="cake-search-container">
          <input type="text"
            placeholder="Search for cakes..."
            className="cake-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="cake-search-button" onClick={() => setSearchQuery("cake")}>Cakes</button>
          <button className="cake-search-button" onClick={() => setSearchQuery("cookie")}>Cookies</button>
          <button className="cake-search-button" onClick={() => setSearchQuery("snack box")}>Snackboxes</button>
        </div>
        <div className="cake-cards">
          {filteredCakes.map((cake) => (
            <div className="cake-card" key={cake.id}>
              <Link to={`/cake/${cake.id}`} state={{ name: cake.name, description: cake.description, image: images[cake.id] }}>
                <img src={images[cake.id]} alt={cake.name} />
              </Link>
              <h2>{cake.name}</h2>
              <div className="cake-card-overlay">
                <p>{cake.description}</p>
                <p>{cake.price}Kr</p>
                <button onClick={() => handleClick(cake.id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <CakeShopCart cart={cart} />
          <CakeFooter />
      </div>
    </div>
  );
};

export default Cake;