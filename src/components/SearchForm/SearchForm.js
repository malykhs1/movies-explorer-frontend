import React from "react";
import { useEffect, useState } from "react";
import searchIcon from "../../images/search-icon.svg";

export const SearchForm = ({ handleGetMovies, filmsTumbler, filmsInputSearch, handleGetMoviesTumbler }) => {

    const [inputSearch, setInputSearch] = useState("");
    const [tumbler, setTumbler] = useState(false);


 
    const handleSubmit = async (e) => {
        e.preventDefault();
        handleGetMovies(inputSearch, tumbler)
      };

    const handleTumblerChange = () => {
        const newTumbler = !tumbler;
        setTumbler(newTumbler);
        handleGetMoviesTumbler(inputSearch, newTumbler);
    }

    const handleFilmChange = (e) => {
        setInputSearch(e.target.value);
      };

    useEffect(() => {
        setTumbler(filmsTumbler); 
        setInputSearch(filmsInputSearch); 

    }, [filmsTumbler, filmsInputSearch]); 

    return (
        <>
            <section className="film-search section_position_movie ">
                <div className="film-search__container">
                    <form onSubmit={handleSubmit} className="film-search__form">
                        <input
                            value={inputSearch}
                            onChange={handleFilmChange}
                            id="filmSearch"
                            className="film-search__input"
                            name="filmSearch"
                            type="search"
                            placeholder="Фильм"
                            required={true}
                        />
                        <button className="film-search__button">
                            <img className="film-search__button-pic" src={searchIcon} alt="Поиск" />
                        </button>
                    </form>
                    <div className="film-search__checkbox">
                        <p className="film-search__checkbox-tittle">Короткометражки</p>
                        <input className="film-search__checkbox-switcher"
                            type="checkbox"
                            value={tumbler}
                            checked={tumbler}
                            onChange={handleTumblerChange}
                        />
                    </div>
                </div>
            </section>

        </>
    );
};

