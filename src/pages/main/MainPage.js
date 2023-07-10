import React from 'react';
import "./main.css";
import SearchContainer from './SearchContainer.js';
import ServiceCategory from './ServiceCategory.js';
import ProfessionalCard from './ProfessionalCard';
import PageHead from './head';
const MainPage = () => {
    return (
        <React.Fragment>
            <PageHead />
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
                    imgSrc="../../assets/images/Professional2.jpg"
                    name="Professional name"
                    description="A short description of the professional, his skills and experience"
                />
                <ProfessionalCard
                    imgSrc="../../assets/images/Professional3.jpg"
                    name="Professional name"
                    description="A short description of the professional, his skills and experience"
                />
                <ProfessionalCard
                    imgSrc="../../assets/images/Professional4.jpg"
                    name="Professional name"
                    description="A short description of the professional, his skills and experience"
                />
            </div>
            </React.Fragment>
    );
};

export default MainPage;
