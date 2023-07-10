import React from 'react';
import SearchContainer from './SearchContainer';
import ServiceCategory from './ServiceCategory';
import ProfessionalCard from './ProfessionalCard';

const mainPage = () => {
    return (
        <div>
            <SearchContainer />
            <ServiceCategory />
            <h2>Best Professionals</h2>
            <div className="best-professionals">
                <ProfessionalCard
                    imgSrc="image/Professional.jpeg"
                    name="Professional name"
                    description="A short description of the professional, his skills and experience"
                />
                <ProfessionalCard
                    imgSrc="image/Professional2.jpg"
                    name="Professional name"
                    description="A short description of the professional, his skills and experience"
                />
                <ProfessionalCard
                    imgSrc="image/Professional3.jpeg"
                    name="Professional name"
                    description="A short description of the professional, his skills and experience"
                />
                <ProfessionalCard
                    imgSrc="image/Professional4.jpeg"
                    name="Professional name"
                    description="A short description of the professional, his skills and experience"
                />
            </div>
        </div>
    );
};

export default mainPage;
