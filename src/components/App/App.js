import "./App.css";
import { Register } from "../Registrer/Register";
import { Login } from "../Login/Login";
import { ErrorNotFound } from "../NotFoundError/NotFoundError";
import { Routes, Route, Link } from "react-router-dom";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { Navigation } from "../Navigation/Navigation";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";

export const App = () => {
  return (
    <div className="root">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="*" element={<ErrorNotFound />} />
          <Route path="nav-test" element={<Navigation />} />
        </Routes>
    </div>
  );
};
