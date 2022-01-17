import "./App.css";
import { Register } from "../Registrer/Register";
import { Login } from "../Login/Login";
import { ErrorNotFound } from "../NotFoundError/NotFoundError";
import { Routes, Route, Link } from "react-router-dom";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";

export const App = () => {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/movies-search" element={<Movies />}/>
        <Route path="/sign-in" element={ <Login/>} />
        <Route path="/sign-up" element={ <Register/>} />
        <Route path="*" element={ <ErrorNotFound/>} />
      </Routes>
    </div>
  );
};
