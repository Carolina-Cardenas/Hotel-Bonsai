import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import "./Reservation.css";


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  roomNumber: number;
  phone: string;
  guests: number;
  specialRequests: string;
  checkInDate: string;
  checkOutDate: string;
}
interface Room {
  id: string; 
  roomNumber: number;
  type: string;
}
export const Reservation: React.FC = () => {
 
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    roomNumber: 0,
    phone: '',
    guests: 1,
    specialRequests: '',
    checkInDate: '',
    checkOutDate: ''
  });

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedRoom, setSelectedRoom] = useState<number | string>("");
  const [rooms, setRooms] = useState<Room[]>([]);
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('/rooms');
        console.log(response.data);// Cambia según tu ruta real
        setRooms(response.data); // Suponiendo que `response.data` es un array de habitaciones
      } catch (error) {
        console.error('Error fetching rooms:', error);
        setErrorMessage('Error fetching rooms. Please try again later.');
      }
    };

    fetchRooms();
  }, []);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      roomNumber: Number(value), // Convertir a número porque roomNumber es numérico
    }));
  };
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
        [name]: name === "roomNumber" ? Number(value) : value, 
 
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
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
    
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          
          </div>
          <div>
            <label htmlFor="room-select">Select Room:</label>
             <select
            id="room-select"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleSelectChange}
            required
          >
            <option value="" disabled>
              -- Choose a Room Type --
            </option>
            {rooms.map((room) => (
              <option key={room.id} value={room.roomNumber}>
                {room.type} (Room {room.roomNumber})
              </option>
            ))}
          </select>
            
          </div>
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
