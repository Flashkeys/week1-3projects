import React from "react";
import '../../css/Portfolio/portfolioWorks.css';
import CakeSite from '../../img/CakeSite.PNG';
import CvSite from '../../img/CvSite.PNG';
import instagramIcon from '../../img/instagram.png';
import facebookIcon from '../../img/facebook.png';

const PortfolioWorks = () => {

  return (
    <div className="portfolio-works-body">
      <div className="portfolio-works-container">
        <div className="portfolio-works-links-container">
          <div className="portfolio-works-links-title">
            <h1>Jhon Doe</h1>
          </div>
          <div className="portfolio-works-links-links">
            <ul>
              <li><a href="/portfolioHome">Home</a></li>
              <li><a href="/portfolioAbout">About</a></li>
              <li><a href="/portfolioServices">Services</a></li>
              <li><a href="/portfolioWorks" style={{ color: '#BACDB0', borderBottom: '3px solid #BACDB0' }}>Works</a></li>
              <li><a href="/portfolioContact">Contact</a></li>
            </ul>
          </div>
          <div className="portfolio-works-links-socials">
            <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={instagramIcon} alt="Logo" className="portfolio-about-logo" /></a>
            <a href="https://www.google.com/search?client=opera-gx&q=facebook&sourceid=opera&ie=UTF-8&oe=UTF-8"><img src={facebookIcon} alt="Logo" className="portfolio-about-logo" /></a>
          </div>
          <div className="portfolio-works-links-footer">
            <p>copyright @whatever</p>
          </div>
        </div>
        <div className="portfolio-works-content-container">
          <div>
            <h1>Recent Projects</h1>
          </div>
          <div className="portfolio-works-projects">
            <div className="portfolio-works-projects-card">
              <div className="portfolio-works-projects-card-title">
                <h2>Cake Website</h2>
                <p>2025-04-27</p>
              </div>
              <a href="/cake"><img src={CakeSite} alt="Project 1" className="portfolio-works-project" /></a>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="portfolio-works-projects-card">
              <div className="portfolio-works-projects-card-title">
                <h2>CV Website</h2>
                <p>2025-04-20</p>
              </div>
              <a href="/cv"><img src={CvSite} alt="Project 1" className="portfolio-works-project" /></a>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWorks;