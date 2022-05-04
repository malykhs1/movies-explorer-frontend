import React from "react";

export const Techs = () => {
  return (
    <section id="techs" className="techs section section_color_grey">
        <h2 className="section__title">Technologies</h2>
        <h3 className="techs__title">7 Technologies</h3>
        <h4 className="techs__subtitle">These technologies were used in the project</h4>
        <ul className="techs__list">
            <li className="techs__list-item">HTML</li>
            <li className="techs__list-item">CSS</li>
            <li className="techs__list-item">JS</li>
            <li className="techs__list-item">React</li>
            <li className="techs__list-item">Git</li>
            <li className="techs__list-item">Express.js</li>
            <li className="techs__list-item">MongoDB </li>
        </ul>
    </section>
  );
}