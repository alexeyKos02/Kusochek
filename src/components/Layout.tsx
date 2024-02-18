import React from 'react';
import {Outlet} from 'react-router-dom'
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main style={{padding:"3%", paddingBottom:"13%"}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;