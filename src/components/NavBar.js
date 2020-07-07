import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logoWhite.png';
import Login from './session/Login';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaMapMarkerAlt, FaCity } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";




const NavBar = () => {
    return (
        <div className='nav-container' >
            <Navbar collapseOnSelect expand='md' bg='' variant='dark' className='nav-bar-all'>
                <Navbar.Brand className='nav-logo'><Link to='/'><img className='logo-white' src={logo} alt='logo' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='nav-bar'>
                        <Link className='nav-link' to='/map'>Mapa <FaMapMarkerAlt /></Link>
                        <Link className='nav-link' to='/places'>Lugares <FaCity /></Link>
                        <Link className='nav-link' to='/foro'>Foro <BsFillChatDotsFill /></Link>
                    </Nav>
                    <Login />
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;
