import React, { useState } from "react";
import "../Home.css";

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav" aria-label="Menú">
          <a href="/home" className="header__logo-link">
            <figure className="header__logo">
              <img
                src="/frontend/src/assets/logo/bonz.ai-logo-white-portrait-full.png"
                alt="Bonz.ai Logo"
              />
            </figure>
          </a>
          <div className="container__menu">
            <button
              className="menu__btn nav-btn"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Abrir menú de navegación"
            >
              <span className="menu__article"></span>
              <span className="menu__article"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Menú lateral */}
      <nav
        className={`side-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/hotel">Our Hotel</a></li>
          <li><a href="/reservation">Reservation</a></li>
        </ul>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* Contenido principal */}
      <main>
        <section className="home">
          <article className="home__content">
            <h1 className="home__hotel">Welcome Bonzai hotel</h1>
          </article>
          <a href="/booking" className="home__btn">Book Now</a>
        </section>
      </main>
    </>
  );
};

export default Home;
