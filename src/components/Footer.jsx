import React from 'react';
import logo from '../assets/Logo .svg';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo} alt="logo" style={{ width: "120px", height: "auto" }} />
            </div>
            <div>
                <h4>Doormat navigation</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h4>Social Media</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
