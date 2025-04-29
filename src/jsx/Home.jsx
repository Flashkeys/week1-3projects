import React from "react";
import '../css/home.css';

const Home = (count) => {
 
    console.log(count);

    return (
      <div className="home-background-body">
        <div className="home-container">
          <ul className="home-header">
            <li className="home-links"><a href="/">Home</a></li>
            <li className="home-links"><a href="/cv">Cv</a></li>
            <li className="home-links"><a href="/cake">Cake</a></li>
            <li className="home-links"><a href="/portfolioHome">Portfolio Home</a></li>
          </ul>
        </div>
      </div>
    );

}

export default Home;