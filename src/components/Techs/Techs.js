import React from "react";

export const Techs = () => {
  return (
    <section className="techs section section_color_grey">
        <h2 className="section__title">Технологии</h2>
        <h3 className="techs__title">7 технологий</h3>
        <h4 className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h4>
        <div className="techs__list">
            <div className="techs__list_item">HTML</div>
            <div className="techs__list_item">CSS</div>
            <div className="techs__list_item">JS</div>
            <div className="techs__list_item">React</div>
            <div className="techs__list_item">Git</div>
            <div className="techs__list_item">Express.js</div>
            <div className="techs__list_item">MongoDB </div>
        </div>
    </section>
  );
}