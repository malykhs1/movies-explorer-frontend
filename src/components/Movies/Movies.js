import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { Navigation } from "../Navigation/Navigation";
import { MoviesCardList } from "../MoviesCardList/MoviesCadList";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export const Movies = () => {
  return (
    <>
      <header className="header header_theme_white">
        <Link to="/"><img src={logo} alt="Место" className="header__logo" /></Link>
        <div className="header__links">
          <Link to="/movies" className="header__link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__link" href="/saved-movies">
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
        < MoviesCard />
        < MoviesCardList />
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