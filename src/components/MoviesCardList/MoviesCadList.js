
import React from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";


export const MoviesCardList = ({ films, savedMoviesToggle, filmsSaved, filmsRemains, handleMore, handleDeleteFilm, filmsButton }) => {



    const location = useLocation();

    return (
        <>
            <section className="movies-card-list section_position_movie ">
                {films.length > 0 ?
                    <div className="moviesCardList">
                        {films.map((film ) => (
                            <MoviesCard
                                key={film._id || film.movieId}
                                film={film}
                                filmsSaved={filmsSaved}
                                savedMoviesToggle={savedMoviesToggle}
                                handleDeleteFilm={handleDeleteFilm}
                            />
                        ))}
                    </div> : <div className="movies-card-list__text">Not found</div>
                }
                {
                     filmsRemains.length > 9 && location.pathname !== '/saved-movies' && filmsButton.length > 9 &&
                        <button onClick={handleMore} className="movies-card-list__button-more-cards">More</button>
                }
            </section>

        </>
    );
};





