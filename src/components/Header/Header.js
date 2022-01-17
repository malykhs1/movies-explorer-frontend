import React from "react";
import logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Место" className="header__logo" />
      <div className="header__buttons">
      <button className="header__button_reg">
          Регистрация
        </button>
        <button className="header__button_entry">
          Войти
        </button>
      </div>
    </header>
  );
}