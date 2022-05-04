import React from "react";

export const Footer = () => {
  return (
    <footer className="footer section footer_position_main">
        <p className="footer__project-info">Malykh A. portfolio х BeatFilm.</p>
      <nav className="footer__row">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Made by Aleksandr Malykh
      </p>
          <ul className="footer__row-links">
              <li><a className="footer__row-link" href="https://github.com/malykhs1">Github</a></li>
              <li><a className="footer__row-link" href="https://www.facebook.com/malykhs">Facebook</a></li>
          </ul>
      </nav>
    </footer>
  );
}

