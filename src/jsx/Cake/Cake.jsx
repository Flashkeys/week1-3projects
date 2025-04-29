import React, { useState } from "react";
import { Link } from "react-router";
import "../../css/Cake/cake.css";
// cake img
import cheeseCake from "../../img/cake/cheesecake.jpg";
import chocolateCake from "../../img/cake/chockladecake.jpg";
import vanillaCake from "../../img/cake/vanillacake.jpg";
import lemonCake from "../../img/cake/lemoncake.jpg";
import chockladeCookies from "../../img/cake/Chockladecookies.jpg";
import rainbowCake from "../../img/cake/rainbowCake.jpg";
import snackBox1 from "../../img/cake/snackbox1.jpg";
import snackBox2 from "../../img/cake/snackbox2.jpg";
import snackBox3 from "../../img/cake/snackbox3.jpg";
import snackBox4 from "../../img/cake/snackbox4.jpg";
import shoppingCart from "../../img/cake/shoppingCart.jpg";
import birthdaycakeChocolate from '../../img/cake/birthdaycakeChocolate.jpg';
import snackBox5 from '../../img/cake/snackBox5.jpg';
import birthdaycakeRainbow from '../../img/cake/birthdaycakeRainbow.jpg';
import birthdaycakeRose from '../../img/cake/birthdaycakeRose.jpg';
import birthdaycakeStrawberry from '../../img/cake/birthdaycakeStrawberry.jpg';
import halfChocolateCookies from '../../img/cake/halfChocolateCookies.jpg';
import rainbowCookies from '../../img/cake/rainbowCookies.jpg';
import sugarCookies from '../../img/cake/sugarCookies.jpg';
import vanillaCookies from '../../img/cake/vanillaCookies.jpg';
import whiteChocolateCookies from '../../img/cake/whiteChocolateCookies.jpg';
// cake img
import cakes from "../../json/cakes.json";
import CakeShopCart from "./CakeShopCart";
import CakeFooter from "./CakeFooter";
import CakeHeaderLinks from "./CakeHeaderLinks";
import welcomeCake from '../../img/cake/welcomeCake.png';

const Cake = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const images = {
    chocolateCake, vanillaCake, lemonCake, cheeseCake, chockladeCookies, rainbowCake,
    snackBox1, snackBox2, snackBox3, snackBox4, shoppingCart, birthdaycakeChocolate,
    snackBox5, birthdaycakeRainbow, birthdaycakeRose, birthdaycakeStrawberry,
    halfChocolateCookies, rainbowCookies, sugarCookies, vanillaCookies, whiteChocolateCookies,
  };

  function handleClick(cakeId) {
    const selectedCake = cakes.find((cake) => cake.id === cakeId);
    if (selectedCake) {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === cakeId);
        if (existingItem) {
          // If the item already exists in the cart, increment its quantity
          return prevCart.map((item) =>
            item.id === cakeId ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // If the item doesn't exist, add it with a quantity of 1
          return [...prevCart, { ...selectedCake, image: images[cakeId], quantity: 1 }];
        }
      });
    }
  }
  function removeFromCart(cakeId) {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === cakeId
            ? { ...item, quantity: item.quantity - 1 } // Decrement quantity
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity 0
    });
  }

  // Filter cakes based on the search query
  const filteredCakes = cakes.filter((cake) =>
    cake.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cake-background-body">
      <div className="cake-container">
        <div className="cake-header">
          <CakeHeaderLinks />
          <img src={images.shoppingCart} alt="Shopping Cart" className="shopping-cart-icon" onClick={() => setIsCartVisible(!isCartVisible)} />
        </div>
        <img src={welcomeCake} alt="Welcome Cake" className="welcome-cake" />
        <div className="cake-search-container">
          <h2>Search for a cake!</h2>
          <input type="text" placeholder="Search for cakes..." className="cake-search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <div className="cake-cards">

          {/* Render all cakes from Json */}
          {filteredCakes.map((cake) => (
            <div className="cake-card" key={cake.id}>

              {/* Add a link to sub page for each cake and send info for that cake */}
              <Link to={`/cake/${cake.id}`} state={{ name: cake.name, description: cake.description, image: images[cake.id] }}>
                <img src={images[cake.id]} alt={cake.name} />
              </Link>

              <div className="cake-card-overlay-container">
                <h2>{cake.name}</h2>
                <p>{cake.description}</p>
                <div className="cake-card-footer">
                  <p>{cake.price} Kr</p>
                  <button onClick={() => handleClick(cake.id)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}

        </div>
        {isCartVisible && (
          <div className="shopping-cart-popup">
            <CakeShopCart cart={cart} totalPrice={totalPrice} closeCart={() => setIsCartVisible(false)} removeFromCart={removeFromCart} />
          </div>
        )}
        <CakeFooter />
      </div>
    </div>
  );
};

export default Cake;