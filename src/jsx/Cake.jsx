import React from "react";
import "../css/cake.css";
import cheeseCake from "../img/cake/cheesecake.jpg"
import chocolateCake from "../img/cake/chockladecake.jpg";
import vanillaCake from "../img/cake/vanillacake.jpg";
import lemonCake from "../img/cake/lemoncake.jpg";
import chockladeCookies from "../img/cake/Chockladecookies.jpg";
import rainbowCake from "../img/cake/rainbowCookies.jpg";
import snackBox1 from "../img/cake/snackbox1.jpg";
import snackBox2 from "../img/cake/snackbox2.jpg";
import snackBox3 from "../img/cake/snackbox3.jpg";
import snackBox4 from "../img/cake/snackbox4.jpg";

const Cake = () => {

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
        <div className="cake-cards">
          <div className="cake-card">
            <img src={chocolateCake} alt="Cake 1" />
            <h2>Chocolate Cake</h2>
            <p>Delicious chocolate cake with rich frosting.</p>
            <button>Add to Cart</button>
          </div>
          <div className="cake-card">
            <img src={vanillaCake} alt="Cake 2" />
            <h2>Vanilla Cake</h2>
            <p>Classic vanilla cake with creamy icing.</p>
            <button>Add to Cart</button>
          </div>
          <div className="cake-card">
            <img src={lemonCake} alt="Cake 3" />
            <h2>Lemon Cake</h2>
            <p>Classic vanilla cake with creamy icing.</p>
            <button>Add to Cart</button>
          </div>
          <div className="cake-card">
            <img src={cheeseCake} alt="Cake 4" />
            <h2>Cheese Cake</h2>
            <p>Classic vanilla cake with creamy icing.</p>
            <button>Add to Cart</button>
          </div>
          <div className="cake-card">
            <img src={chockladeCookies} alt="Cake 5" />
            <h2>Chocolate Cookies</h2>
            <p>Classic vanilla cake with creamy icing.</p>
            <button>Add to Cart</button>
          </div>
          <div className="cake-card">
            <img src={rainbowCake} alt="Cake 6" />
            <h2>Rainbow Cake</h2>
            <p>Classic vanilla cake with creamy icing.</p>
            <button>Add to Cart</button>
          </div>
          <div className="cake-card">
            <img src={snackBox1} alt="Cake 7" />
            <h2>Snack box 1</h2>
            <p>Classic vanilla cake with creamy icing.</p>
            <button>Add to Cart</button>
          </div>
          <div className="cake-card">
            <img src={snackBox2} alt="Cake 8" />
            <h2>Snack box 2</h2>
            <p>Classic vanilla cake with creamy icing.</p>
            <button>Add to Cart</button>
          </div>
          <div className="cake-card">
            <img src={snackBox3} alt="Cake 9" />
            <h2>Snack box 3</h2>
            <p>Classic vanilla cake with creamy icing.</p>
            <button>Add to Cart</button>
          </div>
          <div className="cake-card">
            <img src={snackBox4} alt="Cake 10" />
            <h2>Snack box 4</h2>
            <p>Classic vanilla cake with creamy icing.</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cake;