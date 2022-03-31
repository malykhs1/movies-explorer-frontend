import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import * as Auth from "../../utils/auth";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { api } from "../../utils/api";
import { Register } from "../Registrer/Register";
import { Login } from "../Login/Login";
import { ErrorNotFound } from "../NotFoundError/NotFoundError";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { Navigation } from "../Navigation/Navigation";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { isLoggedInContext } from "../../context/IsLoggedInContext";
import { InfoToolTip } from "../Popup/Popup";

export const App = () => {
  let navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //поп-ап с подсказкой
  const [isInfoToolTipOpened, setIsInfoToolTipOpened] = useState(false);
  const [isSuccseed, setSuccseed] = useState(true);

  
  //получаю данные пользователя
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .getUserInfo(token)
        .then((userData) => {
          setLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  const handleUpdateUser = ({ name, email }) => {
    const token = localStorage.getItem('token');
    api
      .setUserInfo(name, email, token)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onRegister = ({ email, password, name }) => {
    return Auth.register(email, password, name).then((res) => {
      if (res) {
        setSuccseed(true);
        setIsInfoToolTipOpened(true);
        navigate("/movies");
      } else {
        setSuccseed(false);
        setIsInfoToolTipOpened(true);
      }
    });
  };

  const onLogin = ({ email, password }) => {
    return Auth.login(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          navigate("/movies");
        } else {
          setLoggedIn(false);
          setSuccseed(false);
          setIsInfoToolTipOpened(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const onSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  };

  const closeAllPopups = () => {
    setIsInfoToolTipOpened(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <isLoggedInContext.Provider value={loggedIn}>
        <div className="root">
          <Routes>
          <Route path="*" element={<ErrorNotFound />} />
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route path="/sign-in" element={<Login onLogin={onLogin} />} />
            <Route
              path="/sign-up"
              element={<Register onRegister={onRegister} />}
            />

            <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route path="/profile" element={<Profile 
              onUpdateUser={handleUpdateUser}
                  onSignOut={onSignOut} />}
              />
              <Route path="nav-test" element={<Navigation />} />
            </Route>
          </Routes>

          <InfoToolTip
            id="reg-pic"
            isOpened={isInfoToolTipOpened}
            onClose={closeAllPopups}
            isSuccseed={isSuccseed}
          />
        </div>
      </isLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
};
