import React, { Fragment, useState } from "react";
import Nav from "../components/Nav/Nav";
import Introduction from "../components/Introduction/Introduction";
import Purpose from "../components/Purpose/Purpose";
import AboutMe from "../components/AboutMe/AboutMe";
import Mission from "../components/Mission/Mission";
import Certificates from "../components/Certificates/Certificates";
import Pricing from "../components/Pricing/Pricing";
import Reviews from "../components/Reviews/Reviews";
import Photos from "../components/Photos/Photos";
import FAQ from "../components/FAQ/FAQ";
import MessageMe from "../components/MessageMe/MessageMe";
import Footer from "../components/Footer/Footer";

import NavEN from "../components/Nav/NavEN";
import IntroductionEN from "../components/Introduction/IntroductionEN";
import PurposeEN from "../components/Purpose/PurposeEN";
import AboutMeEN from "../components/AboutMe/AboutMeEN";
import MissionEN from "../components/Mission/MissionEN";
import PricingEN from "../components/Pricing/PricingEN";
import ReviewsEN from "../components/Reviews/ReviewsEN";
import FAQEN from "../components/FAQ/FAQEN";
import MessageMeEN from "../components/MessageMe/MessageMeEN";
import FooterEN from "../components/Footer/FooterEN";

import Language from "../components/Language/Language";

function PrimaryPage(props) {
  const RUS = true;
  const ENG = false;
  const [lang, setLang] = useState(ENG);

  function switchLang() {
    setLang((state) => {
      return !state;
    });
  }

  // RUSSIAN
  if (lang === RUS) {
    return (
      <Fragment>
        <Nav />
        <Language lang={lang} switchLang={switchLang} />
        <Introduction />
        <Purpose />
        <AboutMe />
        <Mission />
        <Certificates />
        <Pricing />
        <Reviews />
        {/* <Photos /> */}
        <FAQ />
        <MessageMe />
        <Footer />
      </Fragment>
    );
  }

  // ENGLISH
  return (
    <Fragment>
      <NavEN />
      <Language lang={lang} switchLang={switchLang} />
      <IntroductionEN />
      <PurposeEN />
      <AboutMeEN />
      <MissionEN />
      <Certificates lang={lang} />
      <PricingEN />
      <ReviewsEN />
      {/* <Photos /> */}
      <FAQEN />
      <MessageMeEN />
      <FooterEN />
    </Fragment>
  );
}

export default PrimaryPage;
