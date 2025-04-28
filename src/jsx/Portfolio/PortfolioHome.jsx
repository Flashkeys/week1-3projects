import React from "react";
import '../../css/Portfolio/portfolioHome.css';
import profileIcon from '../../img/profilepic.png';

const PortfolioHome = () => {

  return (
    <div className="portfolio-home-body">
      <div className="portfolio-home-container">
        <div className="portfolio-home-links-container">
          <div className="portfolio-home-links-title">
            <h1>Jhon Doe</h1>
          </div>
          <div className="portfolio-home-links-links">
            <ul>
              <li><a href="/portfolioHome" style={{ color: '#BACDB0', borderBottom: '3px solid #BACDB0' }}>Home</a></li>
              <li><a href="/portfolioAbout">About</a></li>
              <li><a href="/portfolioServices">Services</a></li>
              <li><a href="/portfolioWorks">Works</a></li>
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
          <div className="portfolio-home-content-pic">
            <img src={profileIcon} alt="Profile" className="portfolio-about-profile-icon" />
            <h1>Jhon Doe</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHome;