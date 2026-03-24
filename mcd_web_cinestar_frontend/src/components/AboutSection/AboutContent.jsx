import React from "react";

const aboutText = [
  {
    id: 1,
    subject: "Historien",
    title: "Historien bag Cinestar",
    desc: "Cinestar blev grundlagt med en passion for at fortælle historier, der fanger og bevæger sit publikum. Virksomheden begyndte som en lille uafhængig film- og tv-produktionsenhed med et klart fokus på originalt og visuelt engagerende indhold.",
    subjectClass:
      "font-bold font-teko text-primary text-xl md:text-2xl uppercase mb-2 md:mb-4",
    titleClass:
      "flex flex-col md:flex-row items-center font-bold font-cormorant text-secondary text-3xl md:text-4xl uppercase mb-4 md:mb-6 max-w-[320px] md:max-w-full",

    descClass:
      "font-normal text-secondary text-lg md:text-xl text-start max-w-[320px] md:max-w-[590px]",
  },
];

const AboutContent = () => {
  return (
    <>
      <AboutItem />
    </>
  );
};

const AboutItem = () => {
  return (
    <>
      {aboutText.map((item) => (
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

export default AboutContent;
