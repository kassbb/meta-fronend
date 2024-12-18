import React from 'react';
import logo from './assets/Logo .svg'

const Footer = () => {
    return (<div>
            <img src={logo} alt="logo"/>
            <div>
                <h4>Doormat navigation</h4>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservation</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>adress</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>


            </div>
            <div>
                <h4>Social Media</h4>
                <ul>
                    <li>adress</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>);
};

export default Footer;