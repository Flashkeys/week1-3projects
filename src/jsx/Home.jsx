import React from "react";
import '../css/home.css';

const Home = (count) => {
 
    console.log(count);

    return (
      <div>
        <div>
          <h1>Home page</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/cv">Cv</a></li>
            <li><a href="/Chatt">Chatt</a></li>
          </ul>
        </div>
      </div>
    );

}

export default Home;