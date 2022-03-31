import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const MoviesCard = ({ film, savedMoviesToggle, filmsSaved }) => {  
    const location = useLocation();
    const [fav, setFav] = useState(false);
    const filmPoster = `https://api.nomoreparties.co/${film.image.url}`;

    useEffect(() => {
        if (location.pathname !== '/saved-movies') {
            const savedFilm = filmsSaved.filter((likeFilm) => {
                return likeFilm.movieId === film.id;
            });

            if (savedFilm.length > 0) {
                setFav(true);
            } else {
                setFav(false);
            }
        }
    }, [filmsSaved]);

   

    const handleFavDelete = () => {
        savedMoviesToggle(film, false)
       }
      
    const handleFavChange = () => {
        const newFav = !fav;
        const savedFilm = filmsSaved.filter((likeFilm) => {
            return likeFilm.movieId === film.id;
        })
        savedMoviesToggle({ ...film, _id: savedFilm.length > 0 ? savedFilm[0]._id : null }, newFav);
       }

       const getTime = (mins) => {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + `ч ` + minutes + `м`;
       }

  
    return (
        <>
            <div className="card">
                <div className="card__info">
                    <div className="card__text-info">
                        <h2 className="card__title">{film.nameRU}</h2>
                        <p className="card__duration">{getTime(film.duration)}</p>
                    </div>
                    <div className="card__like-container">
                        {location.pathname === '/movies'
                            ? (<button className={`card__like card__like${fav ? '_active' : '_unactive'}`} alt="Картинка фильма" onClick={handleFavChange}></button>)
                            : (<button className="card__like card__like_delete" alt="Удалить фильм" onClick={handleFavDelete}></button>)
                        }
                    </div>
                </div>
                {location.pathname === '/movies'
                    ? (<a target="_blank" href={film.trailerLink || 'https://www.youtube.com/'} rel="noreferrer"><img className="card__poster" src={filmPoster} alt="Обложка фильма" /></a>)
                    : (<a target="_blank" href={film.trailer || 'https://www.youtube.com/'} rel="noreferrer"><img className="card__poster" src={film.image} alt="Обложка фильма" /></a>)
                }
            </div>
        </>
    );
};