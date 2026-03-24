import React from "react";

const introText = [
  {
    id: 1,
    subject: "cinestar studio",
    title: "Har du en idé til dit næste projekt ?",
    desc: "Lad os omsætte dine visioner til levende billeder, der fænger dit publikum. Hos os får du en professionel, kreativ proces fra idéudvikling til færdig produktion.",
    subjectClass:
      "font-bold font-teko text-primary text-xl md:text-2xl uppercase mb-2 md:mb-4",
    titleClass:
      "flex flex-col md:flex-row items-center font-bold font-cormorant text-secondary text-3xl md:text-4xl uppercase mb-4 md:mb-6",

    descClass:
      "font-medium text-secondary text-xl text-start max-w-[320px] md:max-w-[420px]",
  },
];

const IntroContent = () => {
  return (
    <>
      <IntroItem />
    </>
  );
};

const IntroItem = () => {
  return (
    <>
      {introText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start md:items-start justify-center"
        >
          {item.element}
          <h4 className={item.subjectClass}>{item.subject}</h4>
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.descClass}>{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default IntroContent;
