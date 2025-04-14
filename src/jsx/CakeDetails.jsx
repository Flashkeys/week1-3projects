import React from "react";
import { useLocation } from "react-router-dom";
import "../css//cakeDetails.css";


const CakeDetails = () => {
    
    const location = useLocation();
    const { name, description, image } = location.state || {};

    return (
        <div className="cake-details">
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>{description}</p>
        </div>
    );
};

export default CakeDetails;