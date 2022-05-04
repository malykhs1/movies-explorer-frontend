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
          <li><Link className="menu__item" to="/">Main</Link></li>
          <li><Link className="menu__item" to="/movies">Films</Link></li>
          <li><Link className="menu__item" to="/saved-movies">Saved films</Link></li>
          <li><Link className="menu__btn-account" to="/profile">Account</Link></li>
        </ul>
      </div>
    </>
  );
};

