import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { Navigation } from "../Navigation/Navigation";
import { MoviesCardList } from "../MoviesCardList/MoviesCadList";
import { Footer } from "../Footer/Footer";
import { apiFilm } from "../../utils/MoviesApi";
import { api } from "../../utils/api";
import { Preloader } from "../Preloader/Loader";
import { InfoToolTip } from "../Popup/Popup";


export const Movies = () => {

  const imageURL = 'https://api.nomoreparties.co';

  //all films from server
  const [films, setFilms] = useState(null)
  //фильмы, которые мы будем отображать!
  const [filmsShowed, setFilmsShowed] = useState(null);
  //залайканные фильмы
  const [filmsSaved, setFilmsSaved] = useState(null);

  //устанавливаем кол-вол карточек для отображения
  const [visible, setVisible] = useState(10);

  //прелоадер
  const [preloader, setPreloader] = useState(false);


  const [filmsTumbler, setFilmsTumbler] = useState(false);
  const [filmsInputSearch, setFilmsInputSearch] = useState('');

  const [isSuccseed, setSuccseed] = useState(true);
  const [isInfoToolTipOpened, setIsInfoToolTipOpened] = useState(false);

  const closeAllPopups = () => {
    setIsInfoToolTipOpened(false);
  };

  async function handleGetMovies(inputSearch, tumbler) {
    // localStorage.setItem('filmsTumbler', false);
    setPreloader(true);
    try {
      const token = localStorage.getItem('token')
      const data = await apiFilm.getFilmInfo(token);
      let filterData = data.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
      if (tumbler === true) {
        localStorage.setItem('films', JSON.stringify(filterData)); 
        localStorage.setItem('filmsInputSearch', inputSearch); 
        const shortFilms = filterData.filter(({ duration }) => duration <= 40);
        setFilmsShowed(shortFilms);
        const spliceData = shortFilms.splice(0, visible);
        localStorage.setItem('savedResults',JSON.stringify(spliceData)); 
        setFilmsShowed(spliceData);
        setFilms(spliceData);
       
      }
      else {
        localStorage.setItem('films', JSON.stringify(filterData)); 
        localStorage.setItem('filmsInputSearch', inputSearch);
        const spliceData = filterData.splice(0, visible);
        localStorage.setItem('savedResults',JSON.stringify(spliceData)); 
        setFilmsShowed(spliceData);
        setFilms(filterData);

      }
    } catch (err) {
      setFilms([]);
      localStorage.removeItem('films');
      localStorage.removeItem('filmsTumbler');
      localStorage.removeItem('filmsInputSearch');
    } finally {
      setPreloader(false)
    }
  }


  async function handleGetMoviesTumbler(keyword, tumbler) {
    let filterDataShowed = [];
    let filterData = [];
   
    handleGetMovies(keyword, tumbler)

    localStorage.setItem('films', JSON.stringify(filterDataShowed.concat(filterData)));
    localStorage.setItem('filmsTumbler', tumbler); 

    setFilmsShowed(filterDataShowed);
    setFilms(filterData)
  }

  // добавляем количество фильмов при нажатии на кнопку
  const handleMore = () => {
    const newFilmsShowed = filmsShowed.concat(films.splice(0, visible));
    setFilmsShowed(newFilmsShowed);
  }

  async function savedMoviesToggle(movie, fav) {
    if (fav) {
      const token = localStorage.getItem('token')
      const savedMovie = {
        country: movie.country || 'none',
        director: movie.director || 'none',
        duration: movie.duration,
        year: movie.year,
        description: movie.description || 'none',
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        image: `${imageURL}${movie.image.url}` || 'https://www.youtube.com/',
        trailer: movie.trailerLink || 'https://www.youtube.com',
        thumbnail: `${imageURL}${movie.image.url}` || 'https://www.youtube.com/',
        movieId: movie.id,
      }
      try {
        await api.addNewCard(savedMovie, token);
        const newSaved = await api.getLikeMovies(token);
        setFilmsSaved(newSaved);
      } catch (error) {
        setSuccseed(false)
                setIsInfoToolTipOpened(true);
                console.log(error);
      }
    } else {
      try {
        const token = localStorage.getItem('token')
        await api.removeNewCard(movie._id, token);
        const newSaved = await api.getLikeMovies(token);
        setFilmsSaved(newSaved);
      } catch (error) {
        setSuccseed(false)
        setIsInfoToolTipOpened(true);
        console.log(error);      }
    }
  }

  //монтируем 
  useEffect(() => {
    //фильмы с сервака
    const token = localStorage.getItem('token');
    api.getLikeMovies(token)
      .then((data) => {
        setFilmsSaved(data);
      })
      .catch((err) => console.log(err));

    const localStorageSaveFilms = localStorage.getItem('savedResults');
    const localStorageFilms = localStorage.getItem('films');  

    if (localStorageSaveFilms) {
      const filterData = JSON.parse(localStorageSaveFilms);
      const allFindFilms = JSON.parse(localStorageFilms);
      console.log(filterData);
      setFilmsShowed(filterData);
      setFilms(allFindFilms.splice(10));
      setPreloader(false)
    }
    const localStorageFilmsInputSearch = localStorage.getItem('filmsInputSearch');
    const localStorageFilmsTumbler = localStorage.getItem('filmsTumbler');  
    if (localStorageFilmsTumbler) {
      setFilmsTumbler(localStorageFilmsTumbler === 'true');
     }    
    if (localStorageFilmsInputSearch) {
      setFilmsInputSearch(localStorageFilmsInputSearch);
    }    
  }, []);

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

      {!preloader && films !== null && filmsSaved !== null && filmsShowed !== null &&

        <MoviesCardList
          handleMore={handleMore}
          filmsRemains={films}
          films={filmsShowed}
          savedMoviesToggle={savedMoviesToggle}
          filmsSaved={filmsSaved}
        />
      }
      <Footer />


      <InfoToolTip
            id="reg-pic"
            isOpened={isInfoToolTipOpened}
            onClose={closeAllPopups}
            isSuccseed={isSuccseed}
          />
    </>
  );
};