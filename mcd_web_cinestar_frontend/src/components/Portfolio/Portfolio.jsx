import React from "react";
import Section from "../Section/Section";
import PortfolioContent from "./PortfolioContent";
import GallerySlider from "./GallerySlider";

const Portfolio = () => {
  return (
    <Section style={{ background: "var(--color-portfolio)" }}>
      <PortfolioContent>
        <GallerySlider />
      </PortfolioContent>
    </Section>
  );
};

export default Portfolio;
