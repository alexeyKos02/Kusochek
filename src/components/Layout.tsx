import React from 'react';
import {Outlet} from 'react-router-dom'
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/layoutStyles.css"

const Layout = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh"
        }}>
            <header>
                <NavBar/>
            </header>
            <main style={{padding: "3%", paddingBottom: "13%", flexGrow: 1}}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;