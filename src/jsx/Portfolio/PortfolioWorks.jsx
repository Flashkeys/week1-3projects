import React from "react";
import '../../css/Portfolio/portfolioWorks.css';
import CakeSite from '../../img/CakeSite.PNG';
import CvSite from '../../img/CvSite.PNG';

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
            <img src="https://via.placeholder.com/150" alt="Logo" className="portfolio-home-logo" />
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
              <p>description</p>
            </div>
            <div className="portfolio-works-projects-card">
              <div className="portfolio-works-projects-card-title">
                <h2>CV Website</h2>
                <p>2025-04-20</p>
              </div>
              <a href="/cv"><img src={CvSite} alt="Project 1" className="portfolio-works-project" /></a>
              <p>description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWorks;