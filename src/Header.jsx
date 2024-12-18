import React from 'react';
import logo from './assets/Logo.svg';
import './Header.css'; // Importer le fichier CSS

function Header() {
    return (
        <header> {/* Utilisation de la balise header pour le sémantique */}
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservation</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
