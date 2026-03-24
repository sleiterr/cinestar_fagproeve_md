import React from "react";
import Section from "../Section/Section";
import AboutContent from "./AboutContent";
import AboutImg from "./AboutImg";

const AboutSection = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-20 px-4!">
      <AboutContent />
      <AboutImg />
    </Section>
  );
};

export default AboutSection;
