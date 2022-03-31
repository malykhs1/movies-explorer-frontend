import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

//если пользователь не залогинился, то нужно показать хэдэр, который № 1, если залогинился, то 2

export const Header = () => {
  return (
    <header className="header header_theme_white">
      <Link to="/"><img src={logo} alt="Место" className="header__logo" /></Link> 
        <div className="header__links">
          <Link to="/movies" className="header__link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__link" href="/saved-movies">
            Сохраненные фильмы
          </Link>
        </div>
        <div className="header__buttons">
          <Link to="/profile" className="header__button_account">
            Аккаунт
          </Link>
        </div>
      </header>
  );
}