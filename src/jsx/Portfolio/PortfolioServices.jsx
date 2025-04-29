import React from "react";
import '../../css/Portfolio/portfolioServices.css';
import instagramIcon from '../../img/instagram.png';
import facebookIcon from '../../img/facebook.png';

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
            <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={instagramIcon} alt="Logo" className="portfolio-about-logo" /></a>
            <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={facebookIcon} alt="Logo" className="portfolio-about-logo" /></a>
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
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className="portfolio-services-content-card">
              <h2 className="portfolio-services-medium">Mobile Application</h2>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
            </div>

            <div className="portfolio-services-content-card">
              <h2 className="portfolio-services-medium">User Research</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioServices;