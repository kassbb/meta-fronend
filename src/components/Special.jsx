import React, { useState } from 'react';
import Arrows from "./Arrows";
import Button from "./Button";
import { book } from "../lib/special";

function Special(props) {
    // État pour suivre la position actuelle
    const [currentIndex, setCurrentIndex] = useState(0);

    // Nombre d'éléments visibles à la fois
    const visibleItems = 3;

    // Fonction pour aller à l'élément précédent
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? book.length - visibleItems : prevIndex - visibleItems
        );
    };

    // Fonction pour aller à l'élément suivant
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + visibleItems >= book.length ? 0 : prevIndex + visibleItems
        );
    };

    return (
        <section className="speciale">
            <div className="speciale-content">
                <div className="title">
                    <h1>This week's specials</h1>
                    <div className="arrows">
                        {/* Boutons pour défiler */}
                        <button onClick={handlePrevious}>&lt;</button>

                        <button onClick={handleNext}>&gt;</button>
                    </div>
                </div>
                <Button nom={"Online Menu"} />
            </div>
            <div className="cart">
                {/* Affichage des éléments en fonction de currentIndex */}
                {book.slice(currentIndex, currentIndex + visibleItems).map((item, index) => (
                    <div className="cart-item" key={index}>
                        <div className="cart-img">
                            <img src={item.image} alt={item.title} width={265} height={185} />
                        </div>
                        <div className="cart-content">
                            <div className="cart-title">
                                <h3>{item.title}</h3>
                                <h5>${item.price.toFixed(2)}</h5>
                            </div>
                            <div className="cart-text">
                                <p>{item.description}</p>
                            </div>
                            <a href="#">Order a delivery <i></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Special;
