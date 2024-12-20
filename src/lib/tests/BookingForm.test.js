
import { render, screen } from "@testing-library/react";
import BookingForm from "../../components/BookingForm";
import { initializeTimes, updateTimes } from '../../pages/Booking';
import { fetchAPI } from "../Api";
import {BrowserRouter} from "react-router-dom"; // Importer la fonction fetchAPI

jest.mock("../Api", () => ({
    fetchAPI: jest.fn(),
}));



// Test de la fonction initializeTimes
test('initializeTimes returns the correct available times', async () => {
    const mockTimes = ["12:00", "14:00", "16:00"];
    fetchAPI.mockResolvedValue(mockTimes);

    const times = await initializeTimes();
    expect(times).toEqual(mockTimes);
});


