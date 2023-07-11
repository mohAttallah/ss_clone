import React from 'react';
import ProfessionalDetailsComponent from './ProfessionalDetailsComponent';
import ServicesComponent from './ServicesComponent';
import GeneralContractorComponent from './GeneralContractorComponent';
import PreviousWorkComponent from './PreviousWorkComponent';
import ProfessionalCardComponent from './ProfessionalCardComponent';
import PostsComponent from './PostsComponent';
import DescriptionComponent from './DescriptionComponent';
import "./profile.css";
import Head from './Head';
const Peofile = () => {
    return (
        <div>
            <Head />
            <ProfessionalDetailsComponent />
            <ServicesComponent />
            <GeneralContractorComponent />
            <PreviousWorkComponent />
            <ProfessionalCardComponent
                imgSrc="image/professional3.jpg"
                alt="Professional 1"
                title="Title"
                countryCity="Country City"
                category="Category"
            />
            <ProfessionalCardComponent
                imgSrc="image/professional4.jpg"
                alt="Professional 2"
                title="Title"
                countryCity="Country City"
                category="Category"
            />
            <ProfessionalCardComponent
                imgSrc="image/professional5.jpeg"
                alt="Professional 3"
                title="Title"
                countryCity="Country City"
                category="Category"
            />
            <hr className="divider" />
            <PostsComponent />
            <div className="edit">
                <a href="#">Edit</a>
            </div>
            <DescriptionComponent
                imgSrc="image/professional6.jpg"
                alt="Professional 4"
                description="Lorem ipsum lorem ipsum"
                postLink="#"
            />
            <DescriptionComponent
                imgSrc="image/professional3.jpg"
                alt="Professional 5"
                description="Lorem ipsum lorem ipsum"
                postLink="#"
            />
        </div>
    );
};

export default Peofile;
