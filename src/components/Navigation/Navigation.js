import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {

    return (
        <>
        <div className="hamburger-menu">
  <input id="menu__toggle" type="checkbox" />
  <label className="menu__btn" htmlFor="menu__toggle">
    <span></span>
  </label>
  <ul className="menu__box">
    <li><Link className="menu__item" to="/">Главная</Link></li>
    <li><Link className="menu__item" to="/movies">Фильмы</Link></li>
    <li><Link className="menu__item" to="/saved-movies">Сохраненные фильмы</Link></li>
    <li><Link className="menu__btn-account" to="/profile">Аккаунт</Link></li>
  </ul>
</div>
        </>
    );
};

