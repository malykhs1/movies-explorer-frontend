import React from "react";

export const NavTab = () => {
  return (
    <nav className="navigation-tab">
      <div className="navigation-tab__links">
      <a className="navigation-tab__link" href="#about-project">
         About project
        </a>
        <a className="navigation-tab__link" href="#techs">
          Technologies
        </a>
        <a className="navigation-tab__link" href="#about-me">
          About me
        </a>
      </div>
    </nav>
  );
}