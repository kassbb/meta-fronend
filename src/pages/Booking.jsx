import React, { useReducer, useEffect, useState } from 'react';
import { Formik } from 'formik';
import './Booking.css';
import BookingForm from "../components/BookingForm"; // Import du formulaire
import { fetchAPI,submitAPI } from "../lib/Api"; // Import de la fonction fetchAPI

// Mise à jour de la fonction d'initialisation des horaires
export function initializeTimes() {
    const today = new Date().toISOString().split('T')[0]; // Date d'aujourd'hui
    return fetchAPI(today); // Appel à l'API pour récupérer les horaires disponibles
}

// Fonction de réduction pour gérer les horaires
function updateTimes(state, action) {
    if (action.type === "update") {
        return fetchAPI(action.payload); // Met à jour avec les horaires reçus de l'API
    }
    return state;
}

const Booking = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [selectedDate, setSelectedDate] = useState(""); // Date sélectionnée par l'utilisateur

    // Utilisation de useEffect pour récupérer les horaires disponibles dès qu'une date est sélectionnée
    useEffect(() => {
        if (selectedDate) {
            const times = fetchAPI(selectedDate); // Pas besoin de promesse puisque fetchAPI retourne un tableau directement
            dispatch({ type: "update", payload: times }); // Mise à jour des horaires
        }
    }, [selectedDate]); // Déclenche l'effet à chaque changement de la date sélectionnée

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value); // Mise à jour de la date
    };

    return (
        <section>
            <div className="section">
                <div className="title">
                    <h1>Réservez une table</h1>
                    <p>
                        Sélectionnez une date et choisissez une heure pour votre réservation.
                    </p>
                </div>
            </div>

            {/* Formulaire de réservation */}
            <BookingForm
                availableTimes={availableTimes} // Passe les horaires disponibles au formulaire
                dispatch={dispatch}
                handleDateChange={handleDateChange}
                submitAPI={submitAPI}

                // Passe la fonction handleDateChange au formulaire
            />
        </section>
    );
};

export default Booking;
