import React from "react";
import CakeHeaderLinks from "./CakeHeaderLinks";
import CakeFooter from "./CakeFooter";
import '../../css/Cake/cakeAboutUs.css'
import CakeSideBar from '../../img/cake/cakeSideBar.png';

const CakeAboutUs = () => {

  //localStorage.removeItem("users");
  return (
    <div className="cake-about-us-body">
      <CakeHeaderLinks />
      <div className="cake-about-us-container">
        <div>
          <img src={CakeSideBar} alt="cakeSideBar" className="cake-side-bar" />
        </div>
        <div className="cake-about-us-content">
          <h1>About Us</h1>
          <p>Welcome to our cake shop! We are passionate about creating delicious and beautiful cakes for all occasions. Our team of skilled bakers and decorators work tirelessly to ensure that every cake is made with the finest ingredients and attention to detail.</p>
          <p>Whether you're celebrating a birthday, wedding, or any special event, we have the perfect cake for you. From classic flavors to unique designs, we strive to exceed your expectations and make your celebration unforgettable.</p>
          <p>Thank you for choosing us for your cake needs!</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

          <div className="cake-about-us-bottom">

            <div className="cake-location-list">
              <ul>
                <h2>Location</h2>
                <li>The Cakery Bakery</li>
                <li>1420 Tamm Ave</li>
                <li>Saint Louis, Missouri 63139</li>
                <li>(314) 647-6000</li>
                <li>info@thecakerybakery.net</li>
                <li>Get directions</li>
              </ul>
            </div>

            <div className="cake-open-hours-list">
              <ul className="cake-open-hours-list-left">
                <h2>Open</h2>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>
              <ul className="cake-open-hours-list-right">
                <h2>Hours</h2>
                <li>Closed</li>
                <li>10:00 AM - 6:00 PM</li>
                <li>10:00 AM - 6:00 PM</li>
                <li>10:00 AM - 6:00 PM</li>
                <li>10:00 AM - 6:00 PM</li>
                <li>10:00 AM - 6:00 PM</li>
                <li>Closed</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img src={CakeSideBar} alt="cakeSideBar" className="cake-side-bar" />
        </div>
      </div>
      <CakeFooter />
    </div>
  );
};

export default CakeAboutUs;