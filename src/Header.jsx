import React, { useState, useEffect } from 'react';
import logo from './assets/Logo.svg';
import './Header.css';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    // Note: Log dans le console pour le débogage n'est pas nécessaire en production
    useEffect(() => {
        console.log(isMenuOpen ? "Menu ouvert" : "Menu fermé");
    }, [isMenuOpen]);

    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav>
                <ul className={isMenuOpen ? 'open' : ''}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;