import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export const MainHeader = ({loggedIn}) => {

  return (
    <>
      {loggedIn && <header className="main-header">
        <Link to="/"><img src={logo} alt="Место" className="main-header__logo" /></Link>
        <div className="main-header__links">
          <Link to="/movies" className="main-header__link">
            Films
          </Link>
          <Link to="/saved-movies" className="main-header__link" href="/saved-movies">
            Saved films
          </Link>
        </div>
        <div className="main-header__buttons">
          <Link to="/profile" className="main-header__button_account">
            Account
          </Link>
        </div>
      </header>
      }

      {
        !loggedIn &&  <header className="main-header">
        <Link to="/"><img src={logo} alt="Место" className="main-header__logo" /></Link> 
        <div className="main-header__buttons">
        <Link to="sign-up" className="main-header__button_reg">
            Register
          </Link>
          <Link to="sign-in" className="main-header__button_entry">
            Login
          </Link>
        </div>
      </header>
      }
    </>
  );
}