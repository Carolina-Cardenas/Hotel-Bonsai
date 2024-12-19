
import './index.css';
import './components/Home.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <div className="home-page">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

