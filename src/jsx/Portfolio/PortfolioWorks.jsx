import React from "react";
import '../../css/Portfolio/portfolioHome.css';

const PortfolioWorks = () => {

  return (
    <div className="portfolio-home-body">
      <div className="portfolio-home-container">
        <div className="portfolio-home-links-container">
          <div className="portfolio-home-links-title">
            <h1>Jhon Doe</h1>
          </div>
          <div className="portfolio-home-links-links">
            <ul>
              <li><a href="/portfolioHome">Home</a></li>
              <li><a href="/portfolioAbout">About</a></li>
              <li><a href="/portfolioServices">Services</a></li>
              <li><a href="/portfolioWorks"  style={{color: '#BACDB0', borderBottom: '3px solid #BACDB0' }}>Works</a></li>
              <li><a href="/portfolioContact">Contact</a></li>
            </ul>
          </div>
          <div className="portfolio-home-links-socials">
            <img src="https://via.placeholder.com/150" alt="Logo" className="portfolio-home-logo" />
          </div>
          <div className="portfolio-home-links-footer">
            <p>copyright @whatever</p>
          </div>
        </div>
        <div className="portfolio-home-content-container">

        </div>
      </div>
    </div>
  );
};

export default PortfolioWorks;