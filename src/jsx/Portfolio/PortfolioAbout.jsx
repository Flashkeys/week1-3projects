import React from "react";
import '../../css/Portfolio/portfolioAbout.css';
import profileIcon from '../../img/profilepic.png';
import instagramIcon from '../../img/instagram.png';
import facebookIcon from '../../img/facebook.png';

const PortfolioAbout = () => {

  return (
    <div className="portfolio-about-body">
      <div className="portfolio-about-container">
        <div className="portfolio-about-links-container">
          <div className="portfolio-about-links-title">
            <h1>Jhon Doe</h1>
          </div>
          <div className="portfolio-about-links-links">
            <ul>
              <li><a href="/portfolioHome">Home</a></li>
              <li><a href="portfolioAbout" style={{ color: '#BACDB0', borderBottom: '3px solid #BACDB0' }}>About</a></li>
              <li><a href="/portfolioServices">Services</a></li>
              <li><a href="/portfolioWorks">Works</a></li>
              <li><a href="/portfolioContact">Contact</a></li>
            </ul>
          </div>
          <div className="portfolio-about-links-socials">
          <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={instagramIcon} alt="Logo" className="portfolio-about-logo" /></a>
          <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={facebookIcon} alt="Logo" className="portfolio-about-logo" /></a>
          </div>
          <div className="portfolio-about-links-footer">
            <p>copyright @whatever</p>
          </div>
        </div>
        <div className="portfolio-about-content-container">
          <div className="portfolio-about-content-left-container">
            <div className="portfolio-about-content-left-container-title">
              <h1>About</h1>
            </div>
            <img src={profileIcon} alt="Profile" className="portfolio-about-profile-icon" />
            <div className="portfolio-about-content-left-container-title">
              <h2>Jhon Doe</h2>
              <p>Frontend Developer based in Sweden</p>
            </div>
          </div>
          <div className="portfolio-about-content-right-container">
            <div className="portfolio-about-content-right-top">
              <div className="portfolio-about-content-right-contact">
                <div className="portfolio-about-content-right-top-space">
                  <p>+073-456 78 90</p>
                  <p>jhon_doe@gmail.com</p>
                </div>
                <div>
                  <p>24 years</p>
                  <p>123 Main St, City, Country</p>
                </div>
              </div>
            </div>
            <div className="portfolio-about-content-right-mid-box"></div>
            <div className="portfolio-about-content-right-mid-mid">
              <div className="portfolio-about-content-right-mid-mid-left">
                <h1>6 years</h1>
                <p>Hello there, My name is Jhon doe and im a frontend developer and designer. Im very passionate and dedicated to my work</p>
              </div>
              <div className="portfolio-about-content-right-mid-mid-left">
                <h1>29 Clients</h1>
                <p>With 06+ years experience as a professional UI/UX designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
              </div>
            </div>
            <div className="portfolio-about-content-right-bot">
              <p>"Simplicity, calrity, and beauty: the pillars of great UI/UX design."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAbout;