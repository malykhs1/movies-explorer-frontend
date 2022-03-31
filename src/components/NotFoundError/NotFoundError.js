import React from "react";
import { useNavigate } from "react-router-dom";


export const ErrorNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="error-not-found">
        <h2 className="error-not-found__title">404</h2>
        <p className="error-not-found__subtitle">Страница не найдена</p>
        <div className="error-not-found__links">
          <button onClick={() => navigate(-1)} className="error-not-found__link">Назад</button>
        </div>
      </div>
    </>
  );
};

