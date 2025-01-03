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

  const [rooms, setRooms] = useState<Room[]>([]);
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('/rooms');
        console.log(response.data);
        setRooms(response.data); 
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
      roomNumber: Number(value), 
    }));
  };
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();



      axios.post('/reservations', formData)
        .then(() => {
          setSuccessMessage('Reservation successfully made.');
          setErrorMessage('');

          setFormData({
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
    <div className="booking-page">
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <div className="booking-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="hotel">
            <h2 className="title">Book Your Stay</h2>
            
            <div className="contact-details">
              <div className="contact-input">
                <label className="label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="contact-input">
                <label className="label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="contact-input">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="contact-input">
                <label className="label" htmlFor="room-select">Select Room:</label>
                <select
                  id="room-select"
                  name="roomNumber"
                  value={formData.roomNumber}
                  onChange={handleSelectChange}
                  className="input"
                  required
                >
                  <option value="" disabled>-- Choose a Room Type --</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.roomNumber}>
                      {room.type} (Room {room.roomNumber})
                    </option>
                  ))}
                </select>
              </div>
              <div className="contact-input">
                <label className="label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="contact-input">
                <label className="label">Guests</label>
                <input
                  type="number"
                  name="guests"
                  placeholder="Number of Guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="contact-input">
                <label className="label">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="input input--textarea"
                />
              </div>
              <div className="date-inputs">
                <div className="date-input">
                  <label className="label">Check-In Date</label>
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
                <div className="date-input">
                  <label className="label">Check-Out Date</label>
                  <input
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="actions">
              <button type="submit" className="btn btn--submit">Reserve</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
