import React from "react";
import Section from "../Section/Section";

const introText = [
  {
    id: 1,
    subject: "Kontakt",
    title: "Book en samtale med os",
    desc: "Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig hurtigst muligt. Vi ser frem til at samarbejde med dig!",
    subjectClass:
      "font-bold font-teko text-primary text-xl md:text-2xl uppercase mb-2 md:mb-4",
    titleClass:
      "flex flex-col md:flex-row items-center font-bold font-cormorant text-secondary text-3xl md:text-4xl uppercase mb-4 md:mb-6 max-w-[320px] md:max-w-full",

    descClass:
      "font-normal text-secondary text-lg md:text-xl text-start md:text-center max-w-[320px] md:max-w-[555px]",
  },
];

const ContactIntro = () => {
  return (
    <Section className="px-4 py-16! md:py-20!">
      <IntroItem />
    </Section>
  );
};

const IntroItem = () => {
  return (
    <>
      {introText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start md:items-center justify-center"
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

export default ContactIntro;
