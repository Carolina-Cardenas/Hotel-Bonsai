import React from 'react';
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <article className="footer-grid">
        <article className="footer-grid__item footer-grid__contact">
          <h4>Contact us</h4>
          <address>
            <p>
             
              <a href="mailto:info@bonzaihotel.com"> Email:{" "} info@bonzaihotel.com</a>
            </p>
            <p>
              <a href="tel:+4607234567890">Phone: +46 07 234 567 890</a>
            </p>
            <p>
              
              <a
                href="https://www.google.com/maps/place/Centralvägen+145,+Kiruna,+Sweden"
                target="_blank"
                rel="noopener noreferrer"
              >
               Address:{" "} Centralvägen 145, Kiruna, Sweden
              </a>
            </p>
          </address>
        </article>
        <article className="footer-grid__item footer-grid__social">
          <h4>Follow us</h4>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/social-media/facebook.svg"
                  alt="Facebook Icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/social-media/Instagram_dark.svg"
                  alt="Instagram Icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="src/assets/social-media/X_dark.svg"
                  alt="Twitter Icon"
                />
              </a>
            </li>
          </ul>
        </article>
      </article>
    </footer>
  );
};

export default Footer;
