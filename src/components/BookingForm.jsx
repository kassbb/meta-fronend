import React from 'react';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import * as Yup from 'yup'; // Importer Yup pour la validation
import { submitAPI } from "../lib/Api"; // Assurez-vous que submitAPI est correctement importé

function BookingForm({ availableTimes, dispatch, submitAPI }) {
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        dispatch({ type: 'update', payload: selectedDate });
    };

    // Schéma de validation avec Yup
    const validationSchema = Yup.object({
        date: Yup.string().required('Date is required'),
        time: Yup.string().required('Time is required'),
        guests: Yup.number().min(1, 'At least one guest is required').required('Guests number is required'),
        occasion: Yup.string().required('Occasion is required'),
        location: Yup.string().required('Location is required'),
        seating: Yup.string().required('Seating preference is required'),
        specialRequests: Yup.string().max(300, 'Special requests cannot exceed 300 characters')
    });

    return (
        <div className="form">
            <Formik
                initialValues={{
                    date: '',
                    time: '',
                    guests: '',
                    occasion: '',
                    location: '',
                    specialRequests: '',
                    seating: '',
                }}
                validationSchema={validationSchema} // Ajouter la validation
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    // SweetAlert2 pour la confirmation
                    Swal.fire({
                        title: 'Confirm your booking',
                        text: 'Are you sure you want to submit this booking?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, confirm it!',
                        cancelButtonText: 'No, cancel',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Appeler la fonction submitAPI
                            const formData = {
                                date: values.date,
                                time: values.time,
                                guests: values.guests,
                                occasion: values.occasion,
                                location: values.location,
                                specialRequests: values.specialRequests,
                                seating: values.seating,
                            };

                            submitAPI(formData).then((isSuccessful) => {
                                if (isSuccessful) {
                                    // Affiche un message de succès
                                    Swal.fire(
                                        'Booking Confirmed!',
                                        'Your reservation has been successfully submitted.',
                                        'success'
                                    );
                                    resetForm(); // Réinitialiser le formulaire

                                    // Rediriger vers la page de confirmation
                                    navigate('/confirmation'); // Redirection vers Confirmation.jsx
                                } else {
                                    // Affiche un message d'échec
                                    Swal.fire(
                                        'Submission Failed',
                                        'There was an issue with your reservation. Please try again.',
                                        'error'
                                    );
                                }
                            }).catch(() => {
                                Swal.fire(
                                    'Submission Failed',
                                    'There was an issue with the submission. Please try again later.',
                                    'error'
                                );
                            });
                        } else {
                            // Affiche un message d'annulation
                            Swal.fire(
                                'Cancelled',
                                'Your reservation has not been submitted.',
                                'error'
                            );
                        }
                        setSubmitting(false);
                    });
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Date</label>
                            <input
                                type="date"
                                name="date"
                                value={values.date}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.date && touched.date && <div className="error">{errors.date}</div>}
                        </div>
                        <div className="form-group">
                            <label>Time</label>
                            <select
                                name="time"
                                value={values.time}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                {availableTimes.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            {errors.time && touched.time && <div className="error">{errors.time}</div>}
                        </div>
                        <div className="form-group">
                            <label>Guests</label>
                            <input
                                type="number"
                                name="guests"
                                value={values.guests}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.guests && touched.guests && <div className="error">{errors.guests}</div>}
                        </div>
                        <div className="form-group">
                            <label>Occasion</label>
                            <select
                                name="occasion"
                                value={values.occasion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value="">Select an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Casual">Casual</option>
                                <option value="Business">Business</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.occasion && touched.occasion && <div className="error">{errors.occasion}</div>}
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input
                                type="text"
                                name="location"
                                value={values.location}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.location && touched.location && <div className="error">{errors.location}</div>}
                        </div>

                        {/* Seating Preference as Radio Buttons */}
                        <div className="form-group">
                            <label>Seating Preference</label>
                            <div className="seating-radio">
                                <label>
                                    <input
                                        type="radio"
                                        name="seating"
                                        value="Indoor"
                                        checked={values.seating === "Indoor"}
                                        onChange={handleChange}
                                    />
                                    Indoor
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="seating"
                                        value="Outdoor"
                                        checked={values.seating === "Outdoor"}
                                        onChange={handleChange}
                                    />
                                    Outdoor
                                </label>
                            </div>
                            {errors.seating && touched.seating && <div className="error">{errors.seating}</div>}
                        </div>
                        <div className="form-area">
                            <label>Special Requests</label>
                            <textarea
                                name="specialRequests"
                                value={values.specialRequests}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.specialRequests && touched.specialRequests && <div className="error">{errors.specialRequests}</div>}
                        </div>

                        <div className="form-btn">
                            <button type="submit" disabled={isSubmitting}>
                                Confirm Reservation
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default BookingForm;
