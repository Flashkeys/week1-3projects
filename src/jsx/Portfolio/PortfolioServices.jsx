import React from "react";
import '../../css/Portfolio/portfolioServices.css';

const PortfolioServices = () => {

  return (
    <div className="portfolio-services-body">
      <div className="portfolio-services-container">
        <div className="portfolio-services-links-container">
          <div className="portfolio-services-links-title">
            <h1>Jhon Doe</h1>
          </div>
          <div className="portfolio-services-links-links">
            <ul>
              <li><a href="/portfolioHome">Home</a></li>
              <li><a href="/portfolioAbout">About</a></li>
              <li><a href="/portfolioServices" style={{ color: '#BACDB0', borderBottom: '3px solid #BACDB0' }}>Services</a></li>
              <li><a href="/portfolioWorks">Works</a></li>
              <li><a href="/portfolioContact">Contact</a></li>
            </ul>
          </div>
          <div className="portfolio-services-links-socials">
            <img src="https://via.placeholder.com/150" alt="Logo" className="portfolio-services-logo" />
          </div>
          <div className="portfolio-services-links-footer">
            <p>copyright @whatever</p>
          </div>
        </div>
        <div className="portfolio-services-content-container">
          <div className="portfolio-services-content-card-container">
            <div>
              <h1 className="portfolio-services-large">My Specialites</h1>
            </div>
            <div className="portfolio-services-content-card">
              <h2 className="portfolio-services-medium">Frontend developer</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</p>
            </div>

            <div className="portfolio-services-content-card">
              <h2 className="portfolio-services-medium">UI/UX Design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</p>
            </div>

            <div className="portfolio-services-content-card">
              <h2 className="portfolio-services-medium">Mobile Application</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</p>
            </div>

            <div className="portfolio-services-content-card">
              <h2 className="portfolio-services-medium">User Research</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioServices;