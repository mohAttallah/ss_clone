import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <h6 style={{ color: "black", backgroundColor: "white", padding: "10px" }}>
                            &copy; 2023 Snai3ey Group. All rights reserved.
                            <a href="https://github.com/mohAttallah/Sanai3ey" target="_blank" rel="noopener noreferrer">
                                <img src="github_logo.png" alt="GitHub" style={{ width: "20px", marginLeft: "10px" }} />
                            </a>
                        </h6>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
