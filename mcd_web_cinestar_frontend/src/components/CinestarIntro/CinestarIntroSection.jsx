import React from "react";
import studioImg from "../../assets/cine_studio/studio3.jpg";
import Section from "../Section/Section";
import IntroContent from "./IntroContent";

const CinestarIntroSection = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-16 px-4!">
      <IntroContent />
      <div className="">
        <img
          src={studioImg}
          alt="Studio"
          className="w-full h-auto object-cover"
        />
      </div>
    </Section>
  );
};

export default CinestarIntroSection;
