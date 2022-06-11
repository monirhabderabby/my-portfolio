import React from 'react';
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
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#testmonials">Testmonials</a>
                    </li>
                    <li>
                        <a href="#contactme">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;