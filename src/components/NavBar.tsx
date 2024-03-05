import React from 'react';
import {Container, Nav, Navbar as NavBarComponent} from "react-bootstrap";
import CustomLink from "./CustomLink";
import "../styles/NavBarStyle.css"
import {useMediaQuery} from "react-responsive";

const NavBar = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({query: '(min-width: 1824px)'})
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'})
    const isRetina = useMediaQuery({query: '(min-resolution: 2dppx)'})

    return (
        <NavBarComponent
            bg="dark"
            data-bs-theme="dark"
            expand="lg"
            className="bg-body-tertiary nav_bar_custom">
            <Container>
                <NavBarComponent.Brand
                    href="#home"
                    className={`${isDesktopOrLaptop ? "position-absolute" : ""}`}>
                    KUSOCHEK
                </NavBarComponent.Brand>
                <NavBarComponent.Toggle/>
                <NavBarComponent.Collapse className="justify-content-center">
                    <Nav>
                        <CustomLink className="nav-link" to="/">Главная</CustomLink>
                        <CustomLink className="nav-link" to={"info"}>Инфо</CustomLink>
                        <CustomLink className="nav-link" to={"shop"}>Магазин</CustomLink>
                    </Nav>
                </NavBarComponent.Collapse>
            </Container>
        </NavBarComponent>
    );
};

export default NavBar;