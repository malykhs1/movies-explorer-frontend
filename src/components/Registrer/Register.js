import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export const Register = () => {

  return (
    <section className="register__container">
      <img src={logo} alt="Место" className="register__logo" />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form  className="register__form">
      <label className="register__label" for="name">Имя</label>
      <input
          id="name"
          className="register__input"
          name="name"
          type="text"
        />
      <label className="register__label" for="email">Email</label>
        <input
          id="email"
          className="register__input"
          name="email"
          type="email"
        />
        <label className="register__label" for="password">Пароль</label>
        <input
          id="password"
          className="register__input"
          name="password"
          type="password"
        />
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin">
        <p className="register__login-link"> Уже зарегистрированы?</p>
        <Link to="sign-in" className="register__login-link">
          Войти
        </Link>
      </div>
    </section>
  );
};

