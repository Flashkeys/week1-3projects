import React from "react";
import '../../css/Portfolio/portfolioHome.css';
import profileIcon from '../../img/profilepic.png';
import instagramIcon from '../../img/instagram.png';
import facebookIcon from '../../img/facebook.png';

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
            <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={instagramIcon} alt="Logo" className="portfolio-about-logo" /></a>
            <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={facebookIcon} alt="Logo" className="portfolio-about-logo" /></a>
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