import React from "react";
import arrowPic from '../../images/arrow.svg'

export const Portfolio = () => {
  return (
    <section className="portfolio section">
        <h2 className="section__title">Мое портфолио</h2>
        <div className="project-item">
            <h3 className="project-item__name">Адаптивный сайт</h3>
            <a className="project-item__link" href="https://github.com/malykhs1/russian-travel"> <img className="project-item__picture" src={arrowPic} alt="Ссылка на сайт проекта"/></a>
        </div>
        <div className="project-item">
            <h3 className="project-item__name">Одностраничное приложение</h3>
            <a className="project-item__link" href="https://github.com/malykhs1/react-mesto-api-full"> <img className="project-item__picture" src={arrowPic} alt="Ссылка на сайт проекта"/></a>
        </div>
    </section>
  );
}