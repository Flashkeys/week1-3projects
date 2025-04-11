import React from "react";
import '../css/cv.css';
import pic from '../img/profilepic.png';

const Cv = () => {
  
  return (
    <div className="cv-background-body">
      <div className="cv-inner-body">
        <div className="cv-container">
          <div className="cv-profile-container">
            <div className="cv-profile-image">
              <img src={pic} alt="Profile" />
            </div>
            <div className="cv-profile-info-header">
              <h3 className="cv-profileHeader">Contact info</h3>
              <div className="cv-profile-links">
                <ul>Email
                  <li>jhon_doe@gmail.com</li>
                </ul>
                <ul>Phone
                  <li>073-456 78 90</li>
                </ul>
                <ul>Full address
                  <li>123 Main St, City, Country</li>
                </ul>
                <ul>Birth date
                  <li>30 september 1995</li>
                </ul>
                <ul>Webbpage
                  <li>www.jhondoe.com</li>
                </ul>
                <ul>LinkedIn
                  <li>www.linkedin.com/in/jhondoe</li>
                </ul>
                <ul>GitHub
                  <li>www.github.com/jhondoe</li>
                </ul>
              </div>
            </div>
            <div className="cv-profile-info-footer">
              <h3 className="cv-profileHeader">Skills</h3>
              <div className="cv-profile-links">
                <ul>
                  <li>Programming language (JS, PHP, Java, Python, C++, C#)</li>
                </ul>
                <div class="cv-progressbar">
                  <div className="cv-progressbar-95"></div>
                </div>
                <ul>
                  <li>Frameworks (React, Angular, Django)</li>
                </ul>
                <div class="cv-progressbar">
                  <div className="cv-progressbar-85"></div>
                </div>
                <ul>
                  <li>Database handling (SQL, NoSQL)</li>
                </ul>
                <div class="cv-progressbar">
                  <div className="cv-progressbar-90"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="cv-info-container">
            <h1>John Doe</h1>
            <h2>Frontend Developer</h2>
            <h3 className="cv-header">Profile</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
              not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h3 className="cv-header">Experience</h3>
            <div className="cv-card">
              <h3>2025</h3>
              <p>Frontend Developer</p>
              <span>Ikea, Malmö</span>
            </div>
            <div className="cv-card">
              <h3>2024</h3>
              <p>Intern, Programming</p>
              <span>Ikea, Malmö</span>
            </div>
            <div className="cv-card">
              <h3>2020</h3>
              <p>Teacher Programming C#</p>
              <span>Helsingborg University, Helsingborg</span>
            </div>
            <div className="card">
              <h3>2018</h3>
              <p>Extra Teacher Programming Javascript</p>
              <span>Malmö University, Malmö</span>
            </div>

            <h3 className="cv-header">Education</h3>
            <div className="cv-card">
              <h3>2016</h3>
              <p>Frontend Developer</p>
              <span>Malmö University, Malmö</span>
            </div>
            <div className="cv-card">
              <h3>2014</h3>
              <p>Programming C#</p>
              <span>Helsingborg University, Helsingborg</span>
            </div>
            <div className="cv-card">
              <h3>2011</h3>
              <p>Webbdeveloper</p>
              <span>Malmö Gymnasium, Malmö</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cv;