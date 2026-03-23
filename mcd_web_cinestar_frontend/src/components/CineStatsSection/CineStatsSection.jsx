import React from "react";
import Section from "../Section/Section";
import StatItem from "./StatItem";

const statsText = [
  {
    id: 1,
    title: "Har du en idé til dit næste projekt ?",
    desc: "Hos Cinestar kombinerer vi vores passion for historiefortælling med et skarpt øje for detaljen. Med moderne udstyr og et erfarent team sikrer vi, at din produktion løfter sig fra skitse til strålende slutresultat – hver gang.",
    titleClass:
      "flex flex-col md:flex-row items-center font-bold font-cormorant text-secondary text-3xl md:text-4xl uppercase mb-4 md:mb-6 md:max-w-[520px]",

    descClass:
      "font-normal text-secondary text-xl text-start max-w-[320px] md:max-w-[420px]",
  },
];

const CineStatsSection = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-16 px-4!">
      <div className="flex flex-col md:flex-row items-center justify-start gap-6 md:gap-8 order-2 md:order-1">
        <StatItem />
      </div>
      <div className="order-1 md:order-2">
        <StatsItem />
      </div>
    </Section>
  );
};

const StatsItem = () => {
  return (
    <>
      {statsText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start md:items-start justify-center"
        >
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.descClass}>{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default CineStatsSection;
