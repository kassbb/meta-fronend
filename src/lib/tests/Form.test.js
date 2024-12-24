import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from "../../components/BookingForm";

describe('BookingForm', () => {
    const availableTimes = ['18:00', '19:00', '20:00'];

    test('renders the form with all fields', () => {
        render(
            <MemoryRouter initialEntries={['/']}>  {/* Ajout d'un chemin fictif */}
                <BookingForm availableTimes={availableTimes} />
            </MemoryRouter>
        );

        // Vérification que tous les champs sont présents dans le formulaire
        expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/seating preference/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/special requests/i)).toBeInTheDocument();
    });
});
