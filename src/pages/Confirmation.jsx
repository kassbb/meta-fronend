import React from 'react';
import HeroImage from "../assets/restaurant.jpg";
import { Link } from "react-router-dom";
import './confirmation.css'
export default function Confirmation() {
    return (
        <header className="confirmation-header">
            <img
                className="confirmation-image"
                src={HeroImage}
                alt="Little Lemon Ingredients"
            />
            <section className="reserve-header-text">
                <h1>Your Reservation is Confirmed!</h1>

                <h4>Thanks for dining with us!</h4>
            </section>

            <section className="redirect-buttons">

                <Link className="redirect-button" to="/">
                    Order Online
                </Link>
                <Link className="redirect-button" to="/">
                    Home Page
                </Link>
            </section>
        </header>
    );
}
