import React from 'react';
import {Container, Nav, Navbar as NavBarComponent} from "react-bootstrap";
import CustomLink from "./CustomLink";

const NavBar = () => {
    return (
        <NavBarComponent expand="lg" className="bg-body-tertiary">
            <Container>
                <NavBarComponent.Brand href="#home">React-Bootstrap</NavBarComponent.Brand>
                <NavBarComponent.Toggle aria-controls="basic-navbar-nav"/>
                <NavBarComponent.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
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