import React from "react";
import searchIcon from "../../images/search-icon.svg";

export const SearchForm = () => {

    return (
        <>
        <section className="film-search section_position_movie ">
                <div className="film-search__container">
                <form className="film-search__form">
                    <input
                        id="film-search"
                        className="film-search__input"
                        name="film-search"
                        type="search"
                        placeholder="Фильм"
                    />
                    <button className="film-search__button">
                    <img className="film-search__button-pic" src={searchIcon} alt="Поиск" />
                    </button>
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

