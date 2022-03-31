import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="Место" className="header__logo" /></Link> 
      <div className="header__buttons">
      <Link to="sign-up" className="header__button_reg">
          Регистрация
        </Link>
        <Link to="sign-in" className="header__button_entry">
          Войти
        </Link>
      </div>
    </header>
  );
}