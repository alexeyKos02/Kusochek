import React from 'react';
import {Outlet} from 'react-router-dom'
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main style={{padding:"3%"}}>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </>
    );
};

export default Layout;