import React from "react";
import logo from "../../images/logo.svg";
import searchIcon from "../../images/search-icon.svg";

export const SearchForm = () => {

    return (
        <>
            <header className="header header_theme_white">
                <img src={logo} alt="Место" className="header__logo" />
                <div className="navigation-tab__links">
                    <a className="navigation-tab__link" href="#">
                        Фильмы
                    </a>
                    <a className="navigation-tab__link" href="#">
                        Сохраненные фильмы
                    </a>
                </div>
                <div className="header__buttons">
                    <button className="header__button_account">
                        Аккаунт
                    </button>
                </div>
            </header>

            <section className="film-search section">
                <div className="film-search__container">
                <form className="film-search__form">
                    <input
                        id="film-search"
                        className="film-search__input"
                        name="film-search"
                        type="search"
                        placeholder="Фильм"
                    />
                    <img className="film-search__button" src={searchIcon} alt="Поиск" />
                </form>
                <div className="film-search__checkbox">
                <p className="film-search__checkbox-tittle">Короткометражки</p>
                        <input className="film-search__checkbox-switcher" type="checkbox" />
                    </div>
                </div>
            </section>

        </>
    );
};

