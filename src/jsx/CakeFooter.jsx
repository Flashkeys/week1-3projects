import React from "react";
import "../css/cakeFooter.css";

const CakeFooter = () => {
  return (
    <div className="cake-footer-container">
      <p>&copy; 2023 Cake Shop. All rights reserved.</p>
          <ul className="cake-footer-links">
            <li><a href="/cake">Privacy Policy</a></li>
            <li><a href="/cake">Terms of Service</a></li>
            <li><a href="/cake">Contact Us</a></li>
          </ul>
    </div>
  );
};

export default CakeFooter;