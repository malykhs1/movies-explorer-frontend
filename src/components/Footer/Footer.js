import React from "react";

export const Footer = () => {
  return (
    <footer className="footer section section_color_grey">
        <p className="footer__project-info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <nav className="footer__row">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Сделал Александр Малых
      </p>
          <ul className="footer__row-links">
              <li><a className="footer__row-link" href="#">Яндекс.Практикум</a></li>
              <li><a className="footer__row-link" href="#">Github</a></li>
              <li><a className="footer__row-link" href="#">Facebook</a></li>
          </ul>
      </nav>
    </footer>
  );
}

