import React from "react";
import clsx from "clsx";
import SectionWrapper from "../../components/Section/SectionWrapper";
import studie from "../../assets/contact/studie2.jpg";
import Contact from "./Contact";

const СontactForm = () => {
  return (
    <SectionWrapper bgSrc={studie}>
      <div className="absolute inset-0 bg-contact z-0"></div>
      <div
        className={clsx(
          "relative z-10 w-full h-screen",
          "flex flex-col items-center justify-center",
        )}
      >
        <div className="">
          <Contact />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default СontactForm;
