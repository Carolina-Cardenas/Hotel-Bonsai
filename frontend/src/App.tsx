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
 
  const handleSelectReservation = (reservation: ReservationType) => {
   console.log("App.tsx" ,reservation);
    setSelectedReservation(reservation); 
   navigate('/reservation');
  };
  const onDeleteReservation = (reservationId: string) => {
    console.log("Reserva eliminada con ID:", reservationId);

  };

  return (
    <div className="home-page"> 
    <Header />
       <div className="routes">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/reservation"
            element={<Reservation selectedReservation={selectedReservation}
             />} />
          <Route
            path="/ListReservation"
            element={<ListReservation 
              onSelectReservation={handleSelectReservation}
              onDeleteReservation={onDeleteReservation} 
            />} />
        </Routes>
        </div>
        <Footer />
    </div>
  ); 
};
 export default App;
