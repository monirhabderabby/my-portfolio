import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='nav-container'>
                <ul>
                <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#aboutme">About</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                    <li>
                        <a href="#testmonials">Testmonials</a>
                    </li>
                    <li>
                        <a href="#contactme">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;