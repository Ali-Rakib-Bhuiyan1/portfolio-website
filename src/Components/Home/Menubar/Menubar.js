import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Menubar = () => {
    return (
     
            <div className="pt-3 mr-3 d-flex justify-content-end mt-3">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Link className='nav-link' to='/home'>Home</Link>
                        <Link className='nav-link' to='/projects'>Projects</Link>
                        <NavLink className='nav-link' to='/blogs'>Blogs</NavLink>
                        <NavLink className='nav-link' to='/about'>About me</NavLink>
                        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        <Link to="/resume"><button className='resume-btn'>Resume</button></Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
   
    );
};

export default Menubar;