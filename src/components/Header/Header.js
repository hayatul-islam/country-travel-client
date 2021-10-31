import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {

    const { user, logOut } = useFirebase();
    const handleLogOut = () => {
        logOut()
    }


    return (

        <Navbar className="mt-3" bg="dark" variant="dark" expand="lg" sticky="top" >
            <Container>
                <Navbar.Brand href="#home">
                    <img className="header-menu" src={'https://i.ibb.co/3h4jyLK/logo-r.png'} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink activeClassName="selected" to="/home">Home</NavLink>
                        <NavLink activeClassName="selected" to="/about">About</NavLink>
                        <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
                        {
                            user?.email ? <>
                                <NavLink activeClassName="selected" to="/manageOrders">All Booking</NavLink>
                                <NavLink activeClassName="selected" to="/myOrders">My Booking</NavLink>
                                <NavLink activeClassName="selected" to="/addNewTravel">Add New Travel</NavLink>
                            </> : ''
                        }
                    </Nav>
                    {
                        user?.email ?
                            <div className="py-3">
                                <img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={user?.photoURL} alt="" />
                                <span className="text-white px-2">{user?.displayName}</span>
                            </div> : ''
                    }

                    {user?.email ?
                        <button onClick={handleLogOut} className="btn btn-outline-light">log out</button> :
                        <NavLink className="btn btn-light" to="/login">Login</NavLink>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};



export default Header;