import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="img-fluid w-25" src={'http://www.nicdarkthemes.com/themes/travel/wp/demo/intro/img/logos/logo-r.png'} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink activeClassName="selected" to="/home">Home</NavLink>
                            <NavLink activeClassName="selected" to="/travel">Travel</NavLink>
                            <NavLink activeClassName="selected" to="/about">About</NavLink>
                            <NavLink activeClassName="selected" to="/home">Home</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};



export default Header;