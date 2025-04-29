import React from "react";
import '../../css/Portfolio/portfolioContact.css';
import instagramIcon from '../../img/instagram.png';
import facebookIcon from '../../img/facebook.png';

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
            <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={instagramIcon} alt="Logo" className="portfolio-about-logo" /></a>
            <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={facebookIcon} alt="Logo" className="portfolio-about-logo" /></a>
          </div>
          <div className="portfolio-contact-links-footer">
            <p>copyright @whatever</p>
          </div>
        </div>
        <div className="portfolio-contact-content-container">
          <div className="portfolio-contact-content-card-container">
            <div className="portfolio-contact-content-card-left">
              <h1 className="portfolio-contact-large">Contact Me</h1>
              <p>+073-456 78 90</p>
              <p>jhon_doe@gmail.com</p>
            </div>
            <div className="portfolio-contact-content-card">
              <div className="portfolio-contact-content-card-form">
                <h2>Any Project ?</h2>
                <div className="portfolio-contact-content-card-form-inputs">
                  <input type="text" placeholder="Name" className="portfolio-contact-input" />
                  <input type="email" placeholder="Email" className="portfolio-contact-input" />
                </div>
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