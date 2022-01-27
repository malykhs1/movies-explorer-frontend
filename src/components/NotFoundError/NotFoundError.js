import React from "react";
import { Link } from "react-router-dom";


export const ErrorNotFound = () => {

  return (
    <>
    <div className="error-not-found">
          <h1 className="error-not-found__title">404</h1>
          <p className="error-not-found__subtitle">Страница не найдена</p>
      <div className="error-not-found__links">
              <Link to="/" className="error-not-found__link">Назад</Link>
          </div>
          </div>
          </>
  );
};

