import React from "react";

export const AboutProject = () => {
  return (
    <section id="about-project" className="about-project section">
      <h2 className="section__title">О проекте</h2>
      <ul className="about-project-info">
        <li className="about-project-paragraph">
          <h3 className="about-project-paragraph__title">
            Дипломный проект включал в себя три этапа
          </h3>
          <p className="about-project-paragraph__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project-paragraph">
          <h3 className="about-project-paragraph__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project-paragraph__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__timeline">
        <div className="about-project__timeline_type_backend">
          <div className="about-project__timeline-title">1 Неделя</div>
          <p className="about-project__timeline-text">Back-end</p>
        </div>
        <div className="about-project__timeline_type_fronted">
          <div className="about-project__timeline-title about-project__timeline-title_color_grey ">4 Недели</div>
          <p className="about-project__timeline-text">Front-end</p>
        </div>
      </div>
    </section>
  );
};
