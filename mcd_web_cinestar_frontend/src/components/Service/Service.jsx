import React from "react";
import clsx from "clsx";
import liquifer from "../../assets/service/liquifer.png";
import SectionWrapper from "../../components/Section/SectionWrapper";
import ServiceList from "./ServiceList";

const serviceText = [
  {
    id: 1,
    subject: "service",
    title: "Hvilken service tilbyder vi ?",
    subjectClass:
      "font-bold font-teko text-primary text-xl md:text-2xl uppercase mb-2 md:mb-4 text-center",
    titleClass:
      "flex flex-col md:flex-row items-center font-bold font-cormorant text-secondary text-center text-3xl md:text-4xl uppercase max-w-[320px] md:max-w-full",
  },
];

const Service = () => {
  return (
    <SectionWrapper bgSrc={liquifer}>
      <div className="absolute inset-0 bg-service z-0"></div>
      <div
        className={clsx(
          "relative z-10 w-full h-screen",
          "flex flex-col items-center justify-center",
        )}
      >
        <ServiceItem />
        <ServiceList />
      </div>
    </SectionWrapper>
  );
};

const ServiceItem = () => {
  return (
    <>
      {serviceText.map((item) => (
        <div key={item.id} className="flex items-center justify-center mb-14">
          <div>
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
