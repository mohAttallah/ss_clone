import React, { useEffect } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import layout
import Head from '../headFile/head';
import checkTokenInLocalStorage from '../../components/IsLoggedIn';
import handleLogout from '../../components/signout';

const logout = handleLogout();

const isLoggedIn = checkTokenInLocalStorage();

const Navbar = () => {
    useEffect(() => {
        function nextPage() {
            window.location.href = '/login';
        }

        const nextButton = document.getElementById('nextButton');
        nextButton.addEventListener('click', nextPage);

        // Clean up the event listener when the component is unmounted
        return () => {
            nextButton.removeEventListener('click', nextPage);
        };
    }, []); // Empty dependency array ensures the effect is run only once

    console.log('isLoggedIn', isLoggedIn);
    if (isLoggedIn !== false) {
        return (
            <React.Fragment>
                <Head />
                <div className="header-bar">
                    <div className="logo"></div>
                    <div className="search-box">
                        <input type="text" className="search-input" placeholder="Search About Technicans and Services" />
                        <button><i className="fa fa-search"></i></button>
                    </div>
                    <div className="nav-links">
                        <div className="flag">
                            <img src="https://w7.pngwing.com/pngs/337/177/png-transparent-computer-icons-flag-of-jordan-flag-of-jordan-flag-miscellaneous-angle-flag.png" alt="Jordan Flag" />
                        </div>
                        <div className="home-icon">
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="notification-icon">
                            <i className="fas fa-bell"></i>
                        </div>
                        <div className="explore-offer-container">
                            <div className="explore-text">Explore</div>
                            <div className="offer-text">Post</div>
                        </div>
                        <div className="request-service-container">
                            <div className="request-text">Request</div>
                            <div className="service-text">Service</div>
                        </div>
                        <div className="users">
                            Hi user
                        </div>
                        <div className="user-icon">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <Head />
                <div className="header-bar">
                    <div className="logo"></div>
                    <div className="search-box">
                        <input type="text" className="search-input" placeholder="Search About Technicans and Services" />
                        <button><i className="fa fa-search"></i></button>
                    </div>
                    <div className="nav-links">
                        <div className="flag">
                            <img src="https://w7.pngwing.com/pngs/337/177/png-transparent-computer-icons-flag-of-jordan-flag-of-jordan-flag-miscellaneous-angle-flag.png" alt="Jordan Flag" />
                        </div>

                        <div className="explore-offer-container">
                            <div className="explore-text">Explore</div>
                            <div className="offer-text">Post</div>
                        </div>
                        <div className="request-service-container">
                            <div className="request-text">Request</div>
                            <div className="service-text">Service</div>
                        </div>
                        <div className="login users ">
                            <button id="nextButton">Login</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default Navbar;
