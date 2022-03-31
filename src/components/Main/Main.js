import { Footer } from "../Footer/Footer";
import { MainHeader } from "../MainHeader/MainHeader"
import { NavTab } from "../NavTab/NavTab";
import { Promo } from "../Promo/Promo.js";
import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { AboutMe } from "../AboutMe/AboutMe";
import { Portfolio } from "../Portfolio/Portfolio";

export const Main = () => {
    return (
      <>
      <MainHeader  />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
      </>
    );
  };