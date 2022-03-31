import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { NavTab } from "../NavTab/NavTab";
import { Promo } from "../Promo/Promo.js";
import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { AboutMe } from "../AboutMe/AboutMe";
import { Portfolio } from "../Portfolio/Portfolio";

export const Main = () => {
    return (
      <>
      <Header />
      <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      </main>
      <Footer />
      </>
    );
  };