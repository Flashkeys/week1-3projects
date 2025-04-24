import React from "react";
import CakeHeaderLinks from "./CakeHeaderLinks";
import CakeFooter from "./CakeFooter";
import '../../css/Cake/cakeAboutUs.css'

const CakeAboutUs = () => {
  return (
    <div className="cake-about-us-body">
      <CakeHeaderLinks />
      <div>
        <h1>About Us</h1>
        <p>Welcome to our cake shop! We are passionate about creating delicious and beautiful cakes for all occasions. Our team of skilled bakers and decorators work tirelessly to ensure that every cake is made with the finest ingredients and attention to detail.</p>
        <p>Whether you're celebrating a birthday, wedding, or any special event, we have the perfect cake for you. From classic flavors to unique designs, we strive to exceed your expectations and make your celebration unforgettable.</p>
        <p>Thank you for choosing us for your cake needs!</p>
        </div>
        <CakeFooter />
    </div>
  );
};

export default CakeAboutUs;