import React from "react";
import { useLocation } from "react-router-dom";
import "../../css/Cake/cakeDetails.css";
import CakeHeaderLinks from "./CakeHeaderLinks";
import CakeFooter from "./CakeFooter";
import CakeSideBar from '../../img/cake/cakeSideBar.png';

const CakeDetails = () => {

  const location = useLocation();
  const { name, description, image } = location.state || {};

  return (
    <div className="cake-details-body">
      <CakeHeaderLinks />
      <div className="cake-details-container">
        <div>
          <img src={CakeSideBar} alt="cakeSideBar" className="cake-side-bar" />
        </div>
        <div className="cake-details-content">
          <h1>{name}</h1>
          <img src={image} alt={name} />
          <p>{description}</p>
        </div>
        <div>
          <img src={CakeSideBar} alt="cakeSideBar" className="cake-side-bar" />
        </div>
      </div>
      <CakeFooter />
    </div>
  );
};

export default CakeDetails;