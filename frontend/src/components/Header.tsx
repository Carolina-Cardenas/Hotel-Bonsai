import { useState } from "react";
import "./Header.css"
export const Header = () => {
     const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>      <header className="header">
        <nav className="header__nav" aria-label="Menú">
          <a href="/home" className="header__logo-link">
            <figure className="header__logo">
              <img
                src="/src/assets/logo/bonz.ai-logo-white-portrait-full.png"
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

     
      <nav
        className={`side-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/reservation">Make Reservation</a></li>
          <li><a href="/ListReservation">List Reservation</a></li>
        </ul>
      </nav>

 
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
          </>
  )
}
