import React from "react";
import myPhoto from "../../images/bio.jpeg"

export const AboutMe = () => {
  return (
    <section className="about-me section">
        <h2 className="section__title">Обо мне</h2>
        <div className="biography_place">
            <div className="biography_place_text">
            <h3 className="biography_place_text__name">Александр Малых</h3>
            <p className="biography_place_text__job">Front-end developer, 26 лет</p>
            <p className="biography_place_text__bio-text">Заканчиваю курс веб-разработки в Яндекс Практикуме и параллельно изучаю когнитивные исследования на магистерской программе в московском государственном педагогическом университе. Во время работы в научной организации и учебы в вузе понял, что стремление строить научную карьеру меня покинуло, год занимаюсь изучением веб-разработкой и все силы направлены на построение карьерного трека, связанного с созданием веб-приложений.</p>
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