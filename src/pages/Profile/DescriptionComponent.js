import React from 'react';
import "./profile.css";

const DescriptionComponent = ({ imgSrc, alt, description, postLink }) => {
    return (
        <div className="professional-card">
            <img src={imgSrc} alt={alt} />
            <hr className="divider" />
            <h3>Description</h3>
            <p>{description}</p>
            <p>
                {description} <a href={postLink}>View Post</a>
            </p>
        </div>
    );
};

export default DescriptionComponent;
