import React, { useState } from 'react';
import { Formik } from 'formik';
import './Booking.css';
import { FaCalendarAlt, FaClock, FaUsers, FaTag, FaMapMarkerAlt } from 'react-icons/fa';
import {BiDrink} from "react-icons/bi"; // Import des icônes

const Booking = () => {
    const [step, setStep] = useState(1); // L'étape actuelle

    const handleStepChange = (stepNumber) => {
        setStep(stepNumber); // Change l'étape en fonction du clic
    };

    return (
        <section>
            <div className="section">
                <div className="title">
                    <h1>Réservez une table</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto at corporis culpa cumque cupiditate debitis est, impedit, in iusto maxime mollitia nemo possimus quas, quia quisquam recusandae tenetur vel.
                    </p>
                </div>
            </div>

            {/* Navigation des étapes */}
            <div className="steps-navigation">
                <ul>
                    <li onClick={() => handleStepChange(1)} className={step === 1 ? 'active' : ''}>Étape 1</li>
                    <li onClick={() => handleStepChange(2)} className={step === 2 ? 'active' : ''}>Étape 2</li>
                    <li onClick={() => handleStepChange(3)} className={step === 3 ? 'active' : ''}>Étape 3</li>
                </ul>
            </div>

            {/* Formulaire Formik */}
            <div className="form">
                <Formik
                    initialValues={{
                        date: '',
                        time: '',
                        startTime: '',
                        guests: '',
                        occasion: '',
                        location: '',
                        specialRequests: '',
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.date) {
                            errors.date = 'Date is required';
                        }
                        if (!values.time) {
                            errors.time = 'Time is required';
                        }
                        if (!values.guests || values.guests < 1) {
                            errors.guests = 'Number of guests must be at least 1';
                        }
                        if (!values.occasion) {
                            errors.occasion = 'Please select an occasion';
                        }
                        if (!values.location) {
                            errors.location = 'Please select a location';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2)); // Affiche les valeurs soumises
                            setSubmitting(false);
                        }, 400);
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
                            {/* Étape 1 */}
                            {step === 1 && (
                                <>
                                    <div className="filset">
                                        <div className="form-group">
                                            <div className="input-container">
                                                <FaCalendarAlt className="icon" />
                                                <input
                                                    type="date"
                                                    id="date"
                                                    name="date"
                                                    value={values.date}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <label htmlFor="date">Select date</label>
                                            </div>
                                            {errors.date && touched.date && <div className="error">{errors.date}</div>}
                                        </div>
                                        <div className="form-group">
                                            <div className="input-container">
                                                <FaClock className="icon" />
                                                <input
                                                    type="time"
                                                    id="time"
                                                    name="time"
                                                    value={values.time}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <label htmlFor="time">Select time</label>
                                            </div>
                                            {errors.time && touched.time && <div className="error">{errors.time}</div>}
                                        </div>

                                        {/* Nouveau champ "Pick start time" */}
                                        <div className="form-group">
                                            <div className="input-container">
                                                <FaClock className="icon" />
                                                <input
                                                    type="time"
                                                    id="startTime"
                                                    name="startTime"
                                                    value={values.startTime}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <label htmlFor="startTime">Pick start time</label>
                                            </div>
                                            {errors.startTime && touched.startTime && <div className="error">{errors.startTime}</div>}
                                        </div>

                                        <div className="form-group">
                                            <div className="input-container">
                                                <FaUsers className="icon" />
                                                <input
                                                    type="number"
                                                    id="guests"
                                                    name="guests"
                                                    value={values.guests}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    min="1"
                                                    required
                                                />
                                                <label htmlFor="guests">Number of guests</label>
                                            </div>
                                            {errors.guests && touched.guests &&
                                                <div className="error">{errors.guests}</div>}
                                        </div>
                                        <div className="form-group">
                                            <div className="input-container">
                                                <BiDrink className="icon" />
                                                <select
                                                    id="occasion"
                                                    name="occasion"
                                                    value={values.occasion}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                >
                                                    <option value="">Select occasion</option>
                                                    <option value="birthday">Birthday</option>
                                                    <option value="anniversary">Anniversary</option>
                                                    <option value="business">Business</option>
                                                </select>
                                                <label htmlFor="occasion">Select occasion</label>
                                            </div>
                                            {errors.occasion && touched.occasion &&
                                                <div className="error">{errors.occasion}</div>}
                                        </div>
                                        <div className="form-group">
                                            <div className="radio-group">
                                                <FaMapMarkerAlt className="icon" />
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="location"
                                                        value="indoor"
                                                        checked={values.location === 'indoor'}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    Indoor
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="location"
                                                        value="outdoor"
                                                        checked={values.location === 'outdoor'}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    Outdoor
                                                </label>
                                            </div>
                                            {errors.location && touched.location &&
                                                <div className="error">{errors.location}</div>}
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            id="specialRequests"
                                            name="specialRequests"
                                            value={values.specialRequests}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Add special requests"
                                        />
                                    </div>
                                </>

                            )}

                            {/* Étape 2 */}
                            {step === 2 && (
                                <div className="filset">
                                    {/* Contenu de l'étape 2 */}
                                </div>
                            )}

                            {/* Étape 3 */}
                            {step === 3 && (
                                <div className="filset">
                                    {/* Contenu de l'étape 3 */}
                                </div>
                            )}

                            <div className="buttons">
                                {step < 3 && <button type="button" onClick={() => setStep(step + 1)}>Next</button>}
                                {step === 3 && <button type="submit" disabled={isSubmitting}>Reserve table</button>}
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default Booking;
