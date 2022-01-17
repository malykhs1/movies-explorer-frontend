import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export const Login = () => {

  return (
    <section className="login__container">
      <img src={logo} alt="Место" className="login__logo" />
      <h2 className="login__title">Рады вас видеть!</h2>
      <form className="login__form">
        <label className="login__label" for="email">Email</label>
        <input
          id="email"
          className="login__input"
          name="email"
          type="email"
        />
        <label className="login__label" for="password">Пароль</label>
        <input
          id="password"
          className="login__input"
          name="password"
          type="password"
        />
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
      <div className="login__signin">
        <p className="login__register-link"> Еще не зарегистрированы?</p>
        <Link to="sign-in" className="login__register-link">
          Регистрация
        </Link>
      </div>
    </section>
  );
};

