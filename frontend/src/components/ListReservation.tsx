import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import "./ListReservation.css";



interface Reservation {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roomNumber: number;
  phone: string;
  guests: number;
  checkInDate: string;
  checkOutDate: string;
}


const ListReservation: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]); 
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('/reservations'); 
        setReservations(response.data); 
      } catch (error) {
            console.error('Error fetching rooms:', error);
        setErrorMessage('Error fetching reservations. Please try again later.');
      }
    };

    fetchReservations();
  }, []); 

  return (
    <div className="reservation-list-container">
      <h2>Reservations List</h2>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

    
      {reservations.length > 0 ? (
        <ul className="reservation-list">
          {reservations.map((reservation) => (
            <li key={reservation.id} className="reservation-item">
              <h3>{reservation.firstName} {reservation.lastName}</h3>
              <p>Email: {reservation.email}</p>
              <p>Room Number: {reservation.roomNumber}</p>
              <p>Check-In Date: {reservation.checkInDate}</p>
              <p>Check-Out Date: {reservation.checkOutDate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reservations available.</p>
      )}
    </div>
  );
};

export default ListReservation;
