import React from "react";
import '../css/home.css';

const Home = (count) => {
 
    console.log(count);

    return (
      <div className="home-background-body">
        <div className="home-container">
          <h1>Home page</h1>
          <ul className="home-header">
            <li><a href="/">Home</a></li>
            <li><a href="/cv">Cv</a></li>
            <li><a href="/cake">Cake</a></li>
            <li><a href="/portfolioHome">Portfolio Home</a></li>
          </ul>
        </div>
      </div>
    );

}

export default Home;