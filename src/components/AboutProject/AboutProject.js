import React from "react";

export const AboutProject = () => {
  return (
    <section id="about-project" className="about-project section">
      <h2 className="section__title">About project</h2>
      <ul className="about-project-info">
        <li className="about-project-paragraph">
          <h3 className="about-project-paragraph__title">
            The project includes three stages:
          </h3>
          <p className="about-project-paragraph__text">
          Drawing up a plan, back-end development, site layout, adding
          functionality and final improvements.
          </p>
        </li>
        <li className="about-project-paragraph">
          <h3 className="about-project-paragraph__title">
          The project took 5 weeks to realize.
          </h3>
          <p className="about-project-paragraph__text">
          Each stage had soft and hard deadlines that must be met on time.
          </p>
        </li>
      </ul>
      <div className="about-project__timeline">
        <div className="about-project__timeline_type_backend">
          <div className="about-project__timeline-title">1 week</div>
          <p className="about-project__timeline-text">Back-end</p>
        </div>
        <div className="about-project__timeline_type_fronted">
          <div className="about-project__timeline-title about-project__timeline-title_color_grey ">4 weeks</div>
          <p className="about-project__timeline-text">Front-end</p>
        </div>
      </div>
    </section>
  );
};
