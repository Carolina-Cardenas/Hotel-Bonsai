
import './index.css';
import './components/Home.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import  Home from './components/Home';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { Reservation } from './components/Reservation'; 
import  ListReservation from './components/ListReservation';

const App = () => {
  return (
    <div className="home-page">
      <Router>
      <Header />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          
        <Route path="/ListReservation" element={<ListReservation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  ); 
};
 export default App;



