import React from "react";
import '../../css/Portfolio/portfolioContact.css';

const PortfolioContact = () => {

  return (
    <div className="portfolio-contact-body">
      <div className="portfolio-contact-container">
        <div className="portfolio-contact-links-container">
          <div className="portfolio-contact-links-title">
            <h1>Jhon Doe</h1>
          </div>
          <div className="portfolio-contact-links-links">
            <ul>
              <li><a href="/portfolioHome">Home</a></li>
              <li><a href="/portfolioAbout">About</a></li>
              <li><a href="/portfolioServices">Services</a></li>
              <li><a href="/portfolioWorks">Works</a></li>
              <li><a href="/portfolioContact" style={{ color: '#BACDB0', borderBottom: '3px solid #BACDB0' }}>Contact</a></li>
            </ul>
          </div>
          <div className="portfolio-contact-links-socials">
            <img src="https://via.placeholder.com/150" alt="Logo" className="portfolio-home-logo" />
          </div>
          <div className="portfolio-contact-links-footer">
            <p>copyright @whatever</p>
          </div>
        </div>
        <div className="portfolio-contact-content-container">
          <div className="portfolio-contact-content-card-container">
            <div className="portfolio-contact-content-card-">
              <h1 className="portfolio-contact-large">Contact Me</h1>
            </div>
            <div className="portfolio-contact-content-card">
              <div className="portfolio-contact-content-card-form">
                <h2>Any Project</h2>
                <input type="text" placeholder="Name" className="portfolio-contact-input" />
                <input type="email" placeholder="Email" className="portfolio-contact-input" />
                <input type="text" placeholder="Message" className="portfolio-contact-input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContact;