import React from 'react';
import {Outlet} from 'react-router-dom'
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </>
    );
};

export default Layout;