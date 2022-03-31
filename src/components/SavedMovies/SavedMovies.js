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
        // setFilms(newFilms);
      } catch (err) {
        console.log(err);
      }
    }
  }


  useEffect(() => {
    const localStorageFilms = localStorage.getItem('savedFilms')
    if (localStorageFilms) {
      setFilms(JSON.parse(localStorageFilms));
      // const localStorageFilmsTumbler = localStorage.getItem('savedFilmsTumbler');
      const localStorageFilmsInputSearch = localStorage.getItem('savedFilmsInputSearch');

      // if (localStorageFilmsTumbler) {
      //   setFilmsTumbler(localStorageFilmsTumbler === 'true');
      // }
      if (localStorageFilmsInputSearch) {
        setFilmsInputSearch(localStorageFilmsInputSearch);
      }
    }
    // else {
    //   try {
    //     const token = localStorage.getItem('token')
    //     const data = await api.getLikeMovies(token);
    //     setFilms(data);
    //     setFilmsShowed(data);
    //   }
    //   catch (err) {
    //     console.log(err);
    //   }
    // }
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

  //  const getSavedMovies = () => {
  //   const token = localStorage.getItem('token');
  //   api.getLikeMovies(token)
  //     .then((data) => {
  //       setFilms(data);
  //       setFilmsShowed(data);
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }



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

// handleClickAddCards={handleClickAddCards} 
// showAddFilmsButton={showAddFilmsButton}

// let filmSearch = JSON.parse(localStorage.getItem("filmSearch"));
// console.log(filmSearch);

// useEffect(() => {
//   if (filmSearch) {
//     setFilmsShowed(filmSearch)
//   }
// }, [])

 //получаем все фильмы и записываем их в localstorage
  // useEffect(() => {
  //   apiFilm.getFilmInfo()
  //     .then((filmData) => {
  //       localStorage.setItem("filmData", JSON.stringify(filmData));
  //       filmData = JSON.parse(localStorage.getItem("filmData"));
  //       // setFilms(filmData)
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   if (films) {
  //     onMovieSearch()
  //   }
  // })

// let resultSearchShort = films.filter(({ duration, nameRU }) => duration <= 40 && nameRU.toLowerCase().includes(keyword.toLowerCase()));

// useEffect(() => {
  //   let filmsShowedLocal = JSON.parse(localStorage.getItem ("filmSearch"));
  //   setFilmsShowed(filmsShowedLocal)
  // }, [setFilmsShowed])


  // useEffect(() => {
  //   let localFilmsSearch = JSON.parse(localStorage.getItem ("filmSearch"));
  //   if (localFilmsSearch) {
  //     onMovieSearch(localFilmsSearch, tumbler)
  //   }
  // }, [])
// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
// import { Header } from "../Header/Header";
// import { SearchForm } from "../SearchForm/SearchForm";
// import { Navigation } from "../Navigation/Navigation";
// import { Footer } from "../Footer/Footer";
// import { MoviesCardList } from "../MoviesCardList/MoviesCadList";


// export const SavedMovies = () => {
//   const [filmsShowed, setFilmsShowed] = useState(null);

//   const [visible, setVisible] = useState(10);


//   let filmsSaved = JSON.parse(localStorage.getItem("favFilmData"));

//   const onMoviesSearch = (keyword, tumbler) => {
//     const localStorageFilmsData = localStorage.getItem("favFilmData");
//     if (localStorageFilmsData) {
//       const filmsShowedLocal = JSON.parse(localStorageFilmsData)
//     let resultSearch = filmsShowedLocal.filter(({nameRU}) => {
//        return nameRU.toLowerCase().includes(keyword.toLowerCase());
//     });
//     if (!tumbler) {
//       localStorage.setItem("filmSearch", JSON.stringify(resultSearch)); //фильмы, найденные по ключу
//       localStorage.setItem('filmsSavedInputSearch', keyword); // сохранаяем строку поиска
//       const spliceData = resultSearch.splice(0, visible);
//       setFilmsShowed(spliceData);
//     } if (tumbler) {
//       let resultSearchShort = filmsShowedLocal.filter(({duration, nameRU}) => {
//         return duration <= 40 && nameRU.toLowerCase().includes(keyword.toLowerCase());
//       })
//       localStorage.setItem("filmSearch", JSON.stringify(resultSearchShort)); //фильмы, найденные по ключу
//       localStorage.setItem('filmsSavedInputSearch', keyword); // сохранаяем строку поиска
//       setFilmsShowed(resultSearchShort);
//     } 
//     }
//   }

//   // useEffect(async ()=>{
//   //   const localStorageFilms = localStorage.getItem('favFilmData');
//   //   if (localStorageFilms) {
//   //     setFilmsShowed(JSON.parse(localStorageFilms));
//   //   console.log(filmsShowed);
//   //   const localStorageInputState = localStorage.getItem('filmsSavedInputSearch');
//   //   const localStorageTumblerState = localStorage.getItem('tumblerState');
//   //   if (localStorageTumblerState) {
//   //     const tumblerState = JSON.parse(localStorageTumblerState);
//   //     const inputState = localStorageInputState;
//   //     onMovieSearch(inputState, tumblerState)
//   //   } 
//   //   }
//   // })




//    // добавляем количество фильмов при нажатии на кнопку
//   //  const addMoreFilms = () => {
//   //   const spliceFilms = films;
//   //   const newFilmsShowed = filmsShowed.concat(spliceFilms.splice(0, visible));
//   //   setFilmsShowed(newFilmsShowed);
//   //   setFilms(spliceFilms);
//   // }


//   return (
//     <>
//      <Header />
//       <Navigation />
//       <SearchForm onMoviesSearch={onMoviesSearch} />
//       {/* <MoviesCardList filmsShowed={filmsShowed} /> */}
//       <Footer />
//     </>
//   );
// };

  //   useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     api.getMovies(token)
  //       .then((filmData) => {
  //         console.log(filmData);
  //         localStorage.setItem("favFilmData", JSON.stringify(filmData)); //фильмы, найденные по ключу
  //         setLikeFilms(filmData)
  //       })
  //       .catch((err) => console.log(err));
  //       const localStorageInputState = localStorage.getItem('filmsInputSearch');
  //       const localStorageTumblerState = localStorage.getItem('tumblerState');
  //       if (localStorageInputState) {
  //         const tumblerState = JSON.parse(localStorageTumblerState);
  //         const inputState = localStorageInputState;
  //         // onMovieSearch(inputState, tumblerState)
  //       }
  // }, []);


  //sometimes ago its work



//  //all films from server
//  const [likeFilms, setLikeFilms] = useState(null)
//  //фильмы, которые мы будем отображать!
//  const [filmsShowedLike, setFilmsShowedLike] = useState(null);


//  //новая логика поиска фильмов

//  //устанавливаем кол-вол карточек для отображения
//  const [visible, setVisible] = useState(10);





  // useEffect(() => {
  //   getSavedMovies();
  // }, [])

  // добавляем количество фильмов при нажатии на кнопку
  // const addMoreFilms = () => {
  //   const spliceFilms = likeFilms;
  //   const newFilmsShowed = filmsShowedLike.concat(spliceFilms.splice(0, visible));
  //   setFilmsShowedLike(newFilmsShowed);
  //   setLikeFilms(spliceFilms);
  // }

  // const getSavedMovies = () => {
  //   const token = localStorage.getItem('token');
  //   api.getLikeMovies(token)
  //     .then((filmData) => {
  //       setLikeFilms(filmData);
  //       setFilmsShowedLike(filmData)
  //       console.log(filmData);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // функция поиска фильма в хранилище
  // const onMovieSearch = (keyword, tumbler) => {
  //   const likeFilmsFromServer = filmsShowedLike;
  //   if (likeFilmsFromServer) {
  //     if (!tumbler) {
  //       let resultSearchLike = likeFilmsFromServer.filter(({ duration, nameRU }) => {
  //         return duration > 40 && nameRU.toLowerCase().includes(keyword.toLowerCase());
  //       });
  //       localStorage.setItem("filmSearchLike", JSON.stringify(resultSearchLike)); //фильмы, найденные по ключу
  //       localStorage.setItem('filmsInputSearchLike', keyword); // сохранаяем строку поиска
  //       const spliceData = resultSearchLike.splice(0, visible);
  //       setFilmsShowedLike(spliceData);
  //     } if (tumbler) {
  //       let resultSearchShort = likeFilmsFromServer.filter(({ duration, nameRU }) => {
  //         return duration <= 40 && nameRU.toLowerCase().includes(keyword.toLowerCase());
  //       })
  //       localStorage.setItem("filmSearchLike", JSON.stringify(resultSearchShort)); //фильмы, найденные по ключу
  //       localStorage.setItem('filmsInputSearchLike', keyword); // сохранаяем строку поиска
  //       setFilmsShowedLike(resultSearchShort);
  //     }
  //   }
  // }


  // const handleDeleteFilm = (movieId) => {
  //   const token = localStorage.getItem('token');
  //   api.removeNewCard(movieId, token)
  //     .then(() => getSavedMovies())
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }