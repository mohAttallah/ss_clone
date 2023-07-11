import React from 'react';
import "./profile.css";

const ProfessionalCardComponent = ({ imgSrc, alt, title, countryCity, category }) => {
    return (
        <div className="professional-card">
            <img src={imgSrc} alt={alt} />
            <hr className="divider" />
            <h3>{title}</h3>
            <p>{countryCity}</p>
            <h3>
                {category} <a href="#">View Work</a>
            </h3>
        </div>
    );
};

export default ProfessionalCardComponent;
