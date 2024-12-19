import React, { useState } from 'react';
import axios from 'axios';
import "./Reservation.css";


interface FormData {
  phone: string;
  guests: number;
  specialRequests: string;
  checkInDate: string;
  checkOutDate: string;
}

 export const BookingForm: React.FC = () => {
 
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    guests: 1,
    specialRequests: '',
    checkInDate: '',
    checkOutDate: ''
  });

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();



    axios.post('/api/reservations', formData)
        .then(() => { 
            setSuccessMessage('Reservation successfully made.');
            setErrorMessage(''); 
        })
        .catch(() => {
            setErrorMessage('There was an error processing the reservation.');
            setSuccessMessage('');
        });
  };

 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Display success or error messages */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Reservation form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Guests</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Special Requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Check-In Date</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Check-Out Date</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Reserve</button>
        </div>
      </form>
    </div>
  );
};


