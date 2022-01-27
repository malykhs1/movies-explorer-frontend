import React from "react";
import cardPoster from "../../images/33-dis.png";

export const MoviesCard = () => {

    return (
        <>
        <div className="card">
            <div className="card__info">
            <div className="card__text-info">
            <h2 className="card__title">33 слова о дизайне</h2>
            <p className="card__duration">1ч. 42м.</p>
            </div>
            <div className="card__like-container">
            <button className="card__like card__like_active" alt="Картинка фильма"/>
            </div>
            </div>
            <img className="card__poster" src={cardPoster} alt="Обложка фильма"/>
        </div>

        <div className="card">
            <div className="card__info">
            <div className="card__text-info">
            <h2 className="card__title">33 слова о дизайне</h2>
            <p className="card__duration">1ч. 42м.</p>
            </div>
            <div className="card__like-container">
            <button className="card__like card__like_unactive" alt="Картинка фильма"/>
            </div>
            </div>
            <img className="card__poster" src={cardPoster} alt="Обложка фильма"/>
        </div>

        <div className="card">
            <div className="card__info">
            <div className="card__text-info">
            <h2 className="card__title">33 слова о дизайне</h2>
            <p className="card__duration">1ч. 42м.</p>
            </div>
            <div className="card__like-container">
            <button className="card__like card__like_active" alt="Картинка фильма"/>
            </div>
            </div>
            <img className="card__poster" src={cardPoster} alt="Обложка фильма"/>
        </div>

        <div className="card">
            <div className="card__info">
            <div className="card__text-info">
            <h2 className="card__title">33 слова о дизайне</h2>
            <p className="card__duration">1ч. 42м.</p>
            </div>
            <div className="card__like-container">
            <button className="card__like card__like_unactive" alt="Картинка фильма"/>
            </div>
            </div>
            <img className="card__poster" src={cardPoster} alt="Обложка фильма"/>
        </div>

        <div className="card">
            <div className="card__info">
            <div className="card__text-info">
            <h2 className="card__title">33 слова о дизайне</h2>
            <p className="card__duration">1ч. 42м.</p>
            </div>
            <div className="card__like-container">
            <button className="card__like card__like_active" alt="Картинка фильма"/>
            </div>
            </div>
            <img className="card__poster" src={cardPoster} alt="Обложка фильма"/>
        </div>
        </>
    );
};