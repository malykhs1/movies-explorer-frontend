import React from "react";
import myPhoto from "../../images/bio.jpeg"

export const AboutMe = () => {
  return (
    <section id="about-me" className="about-me section">
        <h2 className="section__title">About me</h2>
        <div className="biography_place">
            <div className="biography_place_text">
            <h3 className="biography_place_text__name">Alex Malykh</h3>
            <p className="biography_place_text__job">Front-end developer</p>
            <p className="biography_place_text__bio-text">I graduated from the Pedagogical University, but now I am building a career in the field of web development. I got development skills in a ten-month Yandex bootcapm. I like neurophysiology, the acquired knowledge helps me to effectively build the educational process, which allowes me not to go crazy during learnong web development. I practice yoga and meditation. I am crazy about football and Tel Aviv food.</p>
            <div className="biography_place_text__links">
                <a href="#" className="biography_place__link">Facebook</a>
                <a href="#" className="biography_place__link">Github</a>
            </div>
            </div>
            <div className="biography_place_photo">
            <img src={myPhoto} alt="Фото разработчика" className="biography_place_photo__dev"/>
            </div>
        </div>
        
    </section>
  );
}