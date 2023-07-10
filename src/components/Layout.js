import React from 'react';
import IsLoggedIn from './IsLoggedIn';


import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <IsLoggedIn />
            <Outlet /> {/* Render the child components */}
        </div>
    );
};


export default Layout;
