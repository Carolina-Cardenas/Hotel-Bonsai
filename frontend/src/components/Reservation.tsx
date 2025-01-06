import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import "./Reservation.css";
import { Reservation as ReservationType } from '../Types'; 

interface Room {
  _id: string; 
  roomNumber: number;
  type: string;
}
interface ReservationProps {
  selectedReservation: ReservationType | null; 
}

const initialFormData: Omit<ReservationType, '_id'> = {
  firstName: '',
  lastName: '',
  email: '',
  roomNumber: 0,
  phone: '',
  guests: 1,
  specialRequests: '',
  checkInDate: '',
  checkOutDate: '',
};

export const Reservation: React.FC<ReservationProps> = ({selectedReservation}) => {
   console.log("Reservation.tsx", selectedReservation);
  const [formData, setFormData] = useState<ReservationType>({
    ...initialFormData,
    _id: '',
      });
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    if (selectedReservation) {
      setFormData(selectedReservation);
    } else {
      setFormData({
        ...initialFormData,
        _id: '', 
      });
    }
  }, [selectedReservation]);


  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('/rooms');
        console.log(response.data);
        setRooms(response.data); 
        console.log(rooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
        setErrorMessage('Error fetching rooms. Please try again later.');
      }
    };
    fetchRooms();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      roomNumber: Number(value), 
    }));
  };
   
  
  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...dataToSubmit } = formData;
      
  const formattedData = {
    ...dataToSubmit,
    checkInDate: dataToSubmit.checkInDate.split('T')[0],
    checkOutDate: dataToSubmit.checkOutDate.split('T')[0]
  };


       try {
      if (formData._id) {
        await axios.put(`/reservations/${formData._id}`, formattedData); 
        setSuccessMessage('Reservation successfully updated.');
      } else {
        console.log("Reservation.tsx", formData);
        await axios.post('/reservations', dataToSubmit) .then(() => {
        setSuccessMessage('Reservation successfully made.');
        setErrorMessage('');
          setFormData({
       
        _id: undefined,
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
      }
       setErrorMessage('');   
    } catch (error) {
         console.error('Error saving reservation:', error);
          setErrorMessage('There was an error processing the reservation.');
         setSuccessMessage('');
    }};

 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        // [name]: name === "roomNumber" ? Number(value) : value, 
        [name]: value 
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
                    <option key={room._id} value={room.roomNumber}>
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
           value={formData.checkInDate.split('T')[0]} 
           onChange={(e) => {
           const dateValue = e.target.value;
           setFormData((prevFormData) => ({
          ...prevFormData,
          checkInDate: dateValue, 
        }));
      }}
      className="input"
      required
    />
         </div>
          <div className="date-input">
           <label className="label">Check-Out Date</label>
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate.split('T')[0]} 
              onChange={(e) => {
                     const dateValue = e.target.value; 
                     setFormData((prevFormData) => ({
                     ...prevFormData,
                     checkOutDate: dateValue, 
                      }));
                      }}
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
