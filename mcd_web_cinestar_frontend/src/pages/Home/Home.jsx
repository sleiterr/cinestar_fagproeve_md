import React from "react";
import Hero from "../../components/Hero/Hero";
import Awards from "../../components/Awards/Awards";
import CinestarIntroSection from "../../components/CinestarIntro/CinestarIntroSection";
import CineStatsSection from "../../components/CineStatsSection/CineStatsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Awards />
      <CinestarIntroSection />
      <CineStatsSection />
    </>
  );
};

export default Home;
