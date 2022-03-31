import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import logo from "../../images/logo.svg";

export const Profile = () => {
  return (
    <>
      <header className="header header_theme_white">
      <Link to="/"><img src={logo} alt="Место" className="header__logo" /></Link> 
        <div className="header__links">
          <Link to="/movies" className="header__link">
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="header__link"
            href="/saved-movies"
          >
            Сохраненные фильмы
          </Link>
        </div>
        <div className="header__buttons">
          <Link to="/profile" className="header__button_account">
            Аккаунт
          </Link>
        </div>
      </header>
      <Navigation />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Александр!</h2>
          <div className="profile__user-data">
            <div className="profile__name-container">
              <p className="profile__name">Имя</p>
              <p className="profile__name-data">Александр</p>
            </div>
            <div className="profile__email-container">
              <p className="profile__email">Email</p>
              <p className="profile__email-data">ma@xxx.com</p>
            </div>
          </div>
          <div className="profile__links">
            <Link to="/sign-in" className="profile__register-link">
              Редактировать
            </Link>
            <Link to="/" className="profile__register-link">
              Выйти из аккауна
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
