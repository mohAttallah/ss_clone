'use strict'

import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import layout

import Head from '../headFile/head'
import checkTokenInLocalStorage from '../../components/IsLoggedIn';
import handleLogout from '../../components/signout';
const logout = handleLogout();

const isLoggedIn = checkTokenInLocalStorage();

const Navbar = () => {
    console.log(`isLoggedIn`, isLoggedIn)
    if (isLoggedIn) {
        return (
            <React.Fragment>
                <Head />
                <div class="header-bar">
                    <div class="logo"></div>
                    <div class="search-box">
                        <input type="text" class="search-input" placeholder="Search About Technicans and Services" />
                        <button><i class="fa fa-search"></i></button>
                    </div>
                    <div class="nav-links">
                        <div class="flag">
                            <img src="https://w7.pngwing.com/pngs/337/177/png-transparent-computer-icons-flag-of-jordan-flag-of-jordan-flag-miscellaneous-angle-flag.png" alt="Jordan Flag" />
                        </div>
                        <div class="home-icon">
                            <i class="fas fa-home"></i>
                        </div>
                        <div class="notification-icon">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class="explore-offer-container">
                            <div class="explore-text">Explore</div>
                            <div class="offer-text">Post</div>
                        </div>
                        <div class="request-service-container">
                            <div class="request-text">Request</div>
                            <div class="service-text">Service</div>
                        </div>
                        <div class="users">
                            Hi user
                        </div>
                        <div class="user-icon">
                            <i class="fas fa-user-circle"></i>
                        </div>

                        <button onClick={(logout)}>Logout</button>

                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <Head />
                <div class="header-bar">
                    <div class="logo"></div>
                    <div class="search-box">
                        <input type="text" class="search-input" placeholder="Search About Technicans and Services" />
                        <button><i class="fa fa-search"></i></button>
                    </div>
                    <div class="nav-links">
                        <div class="flag">
                            <img src="https://w7.pngwing.com/pngs/337/177/png-transparent-computer-icons-flag-of-jordan-flag-of-jordan-flag-miscellaneous-angle-flag.png" alt="Jordan Flag" />
                        </div>

                        <div class="explore-offer-container">
                            <div class="explore-text">Explore</div>
                            <div class="offer-text">Post</div>
                        </div>
                        <div class="request-service-container">
                            <div class="request-text">Request</div>
                            <div class="service-text">Service</div>
                        </div>
                        <div class="login users ">
                            <button >Login</button>
                        </div>

                    </div>
                </div>
            </React.Fragment>)
    }
};


export default Navbar;

