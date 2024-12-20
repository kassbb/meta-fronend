import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../../components/BookingForm";

// Mock des fonctions fetchAPI et submitAPI
jest.mock("../Api", () => ({
    fetchAPI: jest.fn().mockResolvedValue(["18:00", "19:00"]),  // Simule la récupération des horaires
    submitAPI: jest.fn().mockResolvedValue(true)  // Simule une soumission réussie
}));

describe("BookingForm Component", () => {
    test("renders the form heading", () => {
        render(<BookingForm availableTimes={["18:00", "19:00"]} dispatch={jest.fn()} submitAPI={jest.fn()} />);
        const headingElement = screen.getByText(/Select date/i);
        expect(headingElement).toBeInTheDocument();
    });

    test("renders available times in the dropdown", async () => {
        // Attendre que fetchAPI soit appelé pour récupérer les horaires
        render(<BookingForm availableTimes={["18:00", "19:00"]} dispatch={jest.fn()} submitAPI={jest.fn()} />);

        // Attendez que l'option de temps soit affichée
        const timeOption = await screen.findByText("18:00"); // Utilisez findByText pour attendre le rendu dynamique
        expect(timeOption).toBeInTheDocument();
    });

    test("submits the form successfully", async () => {
        const mockSubmitAPI = jest.fn().mockResolvedValue(true);  // Mock de submitAPI
        render(
            <BookingForm
                availableTimes={["18:00", "19:00"]}
                dispatch={jest.fn()}
                submitAPI={mockSubmitAPI}
            />
        );

        // Simuler la sélection d'une date et d'une heure
        const dateInput = screen.getByLabelText(/Select date/i);
        fireEvent.change(dateInput, { target: { value: "2024-12-20" } });

        const timeSelect = screen.getByLabelText(/Select time/i);
        fireEvent.change(timeSelect, { target: { value: "18:00" } });

        // Simuler la soumission du formulaire
        const submitButton = screen.getByText(/Submit/i);
        fireEvent.click(submitButton);

        // Attendre que submitAPI soit appelé et vérifier que la soumission a réussi
        await waitFor(() => expect(mockSubmitAPI).toHaveBeenCalled());
        expect(mockSubmitAPI).toHaveBeenCalledWith({
            date: "2024-12-20",
            time: "18:00"
        });
    });
});
