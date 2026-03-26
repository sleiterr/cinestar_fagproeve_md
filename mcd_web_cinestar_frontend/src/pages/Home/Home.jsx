import React from "react";
import Hero from "../../components/Hero/Hero";
import Awards from "../../components/Awards/Awards";
import CinestarIntroSection from "../../components/CinestarIntro/CinestarIntroSection";
import CineStatsSection from "../../components/CineStatsSection/CineStatsSection";
import Portfolio from "../../components/Portfolio/Portfolio";
import Service from "../../components/Service/Service";
import AboutSection from "../../components/AboutSection/AboutSection";
import ReviewsSection from "../../components/Reviews/ReviewsSection";
import ContactIntro from "../../components/ContactIntro/ContactIntro";
import ContactIntroSection from "../../components/Сontact/ContactIntroSection";
import Blog from "../../components/Blog/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Awards />
      <CinestarIntroSection />
      <CineStatsSection />
      <Portfolio />
      <Service />
      <AboutSection />
      <ReviewsSection />
      <ContactIntro />
      <ContactIntroSection />
      <Blog />
    </>
  );
};

export default Home;
