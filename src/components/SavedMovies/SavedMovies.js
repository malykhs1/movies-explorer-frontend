import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { Navigation } from "../Navigation/Navigation";
import { MoviesCardList } from "../MoviesCardList/MoviesCadList";
import { Preloader } from "../Preloader/Loader";
import { Footer } from "../Footer/Footer";
import { api } from "../../utils/api";

export const SavedMovies = () => {

  const [films, setFilms] = useState(null);
  const [preloader, setPreloader] = useState(false);
  const [filmsTumbler, setFilmsTumbler] = useState(false);
  const [filmsInputSearch, setFilmsInputSearch] = useState('');
  const [filmsShowed, setFilmsShowed] = useState([]);

  const [filmsWithTumbler, setFilmsWithTumbler] = useState([]);
  const [filmsShowedWithTumbler, setFilmsShowedWithTumbler] = useState([]);

  async function handleGetMovies(inputSearch, tumbler) {
    setPreloader(true);

    try {
      const data = films;
      let filterData = data.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
      if (tumbler)
        filterData.filter(({ duration }) => duration <= 40);
      setFilmsShowed(filterData);
      if (inputSearch) {
        localStorage.setItem('savedFilms', JSON.stringify(filterData)); // сохраняем в локалсторедж
        localStorage.setItem('savedFilmsTumbler', tumbler); // сохраняем в локалсторедж состояние тумблера
        localStorage.setItem('savedFilmsInputSearch', inputSearch); // сохраняем в локалсторедж то что ввели в поиск
      } else {
        localStorage.removeItem('savedFilms');
        localStorage.removeItem('savedFilmsTumbler');
        localStorage.removeItem('savedFilmsInputSearch');
      }
    } catch {

      setFilms([]);
      localStorage.removeItem('savedFilms');
      localStorage.removeItem('savedFilmsTumbler');
      localStorage.removeItem('savedFilmsInputSearch');
    } finally {
      setPreloader(false)
    }
  }

   
  async function handleGetMoviesTumbler(inputSearch, tumbler) {
    let filterDataShowed = [];
    let filterData = [];
    if (tumbler) {
      setFilmsShowedWithTumbler(filmsShowed);
      setFilmsWithTumbler(films);

      filterDataShowed = filmsShowed.filter(({ duration }) => duration <= 40);
      filterData = films.filter(({ duration }) => duration <= 40);

      handleGetMovies(inputSearch, tumbler)

    } else {
      filterDataShowed = filmsShowedWithTumbler;
      filterData = filmsWithTumbler;
      handleGetMovies(inputSearch, tumbler)
    }

    localStorage.setItem('savedFilmsTumbler', tumbler); // сохраняем в локалсторедж состояние тумблера
    handleGetMovies(inputSearch, tumbler)

    setFilmsShowed(filterDataShowed);
    setFilms(filterData)

  }

  async function savedMoviesToggle(film, fav) {
    if (!fav) {
      try {
        const token = localStorage.getItem('token');
        await api.removeNewCard(film._id, token)
        const newFilms = await api.getLikeMovies(token);
        setFilmsShowed(newFilms);
      } catch (err) {
        console.log(err);
      }
    }
  }


  useEffect(() => {
    const localStorageFilms = localStorage.getItem('savedFilms')
    if (localStorageFilms) {
      setFilms(JSON.parse(localStorageFilms));
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    api.getLikeMovies(token)
      .then((data) => {
        setFilms(data);
        setFilmsShowed(data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <Header />
      <Navigation />
      <SearchForm
        handleGetMovies={handleGetMovies}
        filmsTumbler={filmsTumbler}
        filmsInputSearch={filmsInputSearch}
        handleGetMoviesTumbler={handleGetMoviesTumbler}
      />
      {preloader && <Preloader />}

      {!preloader && films !== null &&
        <MoviesCardList
          filmsRemains={[]}
          savedMoviesToggle={savedMoviesToggle}
          films={filmsShowed}
        />
      }
      <Footer />
    </>
  );
};