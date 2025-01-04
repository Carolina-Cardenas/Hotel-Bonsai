import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom'; 
import './index.css';
import './components/Home.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import  Home from './components/Home';
import { Reservation as ReservationType } from './Types';


import { Reservation } from './components/Reservation'; 
import  ListReservation from './components/ListReservation';

const App = () => {
 const [selectedReservation, setSelectedReservation] = useState<ReservationType | null>(null);
 const navigate = useNavigate();
  // Manejar la selección de reservaciones
  const handleSelectReservation = (reservation: ReservationType) => {
   console.log("App.tsx" ,reservation);
    setSelectedReservation(reservation); 
   navigate('/reservation');
  };

  return (
    <div className="home-page"> 
      <Header />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/reservation"
            element={<Reservation selectedReservation={selectedReservation} />} />
          <Route
            path="/ListReservation"
            element={<ListReservation onSelectReservation={handleSelectReservation} />} />
        </Routes>
        <Footer />
    </div>
  ); 
};
 export default App;
