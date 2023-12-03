import React from 'react';
import {NavLink, Outlet} from 'react-router-dom'
import CustomLink from "./CustomLink";
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