import { SearchForm } from "../SearchForm/SearchForm";
import { Navigation } from "../Navigation/Navigation";
import cardPoster from "../../images/33-dis.png";
import deleteCardButton from "../../images/delete-card.svg";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export const SavedMovies = () => {
  return (
    <>
      <header className="header header_theme_white">
      <Link to="/"><img src={logo} alt="Место" className="header__logo" /></Link> 
        <div className="header__links">
          <Link to="/movies" className="header__link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__link">
            Сохраненные фильмы
          </Link>
        </div>
        <div className="header__buttons">
          <Link to="/profile" className="header__button_account">
            Аккаунт
          </Link>
        </div>
      </header>
      <main>
      < Navigation />
      <SearchForm />
      <div className="card">
        <div className="card__info">
          <div className="card__text-info">
            <h2 className="card__title">33 слова о дизайне</h2>
            <p className="card__duration">1ч. 42м.</p>
          </div>
          <div className="card__like-container">
            <img className="card__like" src={deleteCardButton} alt="Картинка фильма" />
          </div>
        </div>
        <img className="card__poster" src={cardPoster} alt="Обложка фильма" />
      </div>
      </main>
      <footer className="footer_position_movie ">
        <p className="footer__project-info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <nav className="footer__row">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Сделал Александр Малых
          </p>
          <ul className="footer__row-links">
            <li><a className="footer__row-link" href="#">Яндекс.Практикум</a></li>
            <li><a className="footer__row-link" href="#">Github</a></li>
            <li><a className="footer__row-link" href="#">Facebook</a></li>
          </ul>
        </nav>
      </footer>
    </>
  );
};