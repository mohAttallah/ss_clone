import React from 'react';
import "./main.css";
import photo from "../../assets/images/Professional.jpeg";

const ProfessionalCard = ({  name, description }) => {
    return (
        <div className="professional-card">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
            </div>
            <br />
            <button>More</button>
        </div>
    );
};

export default ProfessionalCard;
