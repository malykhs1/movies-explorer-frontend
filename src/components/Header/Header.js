import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <header className="header header_theme_white">
      <Link to="/"><img src={logo} alt="Место" className="header__logo" /></Link> 
        <div className="header__links">
          <Link to="/movies" className="header__link">
            Films
          </Link>
          <Link to="/saved-movies" className="header__link" href="/saved-movies">
            Saved films
          </Link>
        </div>
        <div className="header__buttons">
          <Link to="/profile" className="header__button_account">
            Account
          </Link>
        </div>
      </header>
  );
}