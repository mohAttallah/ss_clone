import React from 'react'
import Header from './header/header'
import Main from './main/main'
import Head from './headFile/head'
import Footer from './footer/footer'
// import Footer from './Footer'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Layout({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <React.Fragment>

            <Head />
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </React.Fragment>

    )
}

export default Layout
