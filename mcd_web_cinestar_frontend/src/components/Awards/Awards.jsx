import React from "react";
import Section from "../Section/Section";
import { awardsPng } from "../../assets/awards";

const Awards = () => {
  return (
    <Section className="px-4!">
      <AwardCard />
    </Section>
  );
};

const AwardCard = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-12 md:gap-8">
      {awardsPng.map((item, index) => (
        <li key={index}>
          <img
            src={item}
            alt={`Award ${index + 1}`}
            className="w-full h-31 md:h-40 object-contain"
          />
        </li>
      ))}
    </ul>
  );
};

export default Awards;
