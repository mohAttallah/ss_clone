import React from 'react';

const ProfessionalCard = ({ imgSrc, name, description }) => {
    return (
        <div className="professional-card">
            <img src={imgSrc} alt={name} />
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
