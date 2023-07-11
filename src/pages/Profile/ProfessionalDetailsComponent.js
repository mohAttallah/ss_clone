import "./profile.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfessionalDetailsComponent = () => {
    const [professionalData, setProfessionalData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const email = localStorage.getItem('token');

                const response = await axios.post('http://localhost/sanai3ey/server/customer_ID.php', { email });
                setProfessionalData(response.data);
                setLoading(false);
            } catch (error) {
                setError('An error occurred');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Rest of the code...
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="professional-details">
            <img src={professionalData.image} alt="Professional 1" />
            <div className="professional-user">{professionalData.username}</div>
            <div className="rating">
                {[...Array(professionalData.rating)].map((_, index) => (
                    <span key={index} className="star">
                        &#9733;
                    </span>
                ))}
            </div>
            <div className="lorem-ipsum">{professionalData.description}</div>
            <div className="lorem-ipsum">{professionalData.description}</div>
            <div className="country">{professionalData.country}</div>
            <div className="city">{professionalData.city}</div>
            <div className="district">{professionalData.district}</div>
            <div className="join-date">Data Join: {professionalData.joinDate}</div>
            <div className="bottom-info">
                <div className="order">Order</div>
                <div className="follow">Follow</div>
            </div>
        </div>)

};

export default ProfessionalDetailsComponent;
