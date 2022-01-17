import React from "react";

export const NavTab = () => {
  return (
    <nav className="navigation-tab">
      <div className="navigation-tab__links">
      <a className="navigation-tab__link" href="#">
         О проекте
        </a>
        <a className="navigation-tab__link" href="#">
          Технологии
        </a>
        <a className="navigation-tab__link" href="#">
          Студент
        </a>
      </div>
    </nav>
  );
}