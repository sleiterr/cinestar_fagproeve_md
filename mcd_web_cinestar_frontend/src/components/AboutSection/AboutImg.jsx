import React from "react";
import filming from "../../assets/about/filming.jpg";

const aboutText = [
  {
    id: 1,
    title: "Dyas Kardinal",
    subject: "Ceo af Cinestar",
    Image: filming,
    subjectClass: "font-medium text-secondary text-xl md:text-2xl uppercase",
    titleClass:
      "flex flex-col md:flex-row items-center font-bold font-cormorant text-3xl text-primary md:text-4xl uppercase",
  },
];

const AboutImg = () => {
  return (
    <>
      <AboutItemText />
    </>
  );
};

const AboutItemText = () => {
  return (
    <>
      {aboutText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start md:items-start justify-center"
        >
          <div className="mb-2 md:mb-4">
            <h2 className={item.titleClass}>{item.title}</h2>
            <h4 className={item.subjectClass}>{item.subject}</h4>
          </div>
          <div className="">
            <img
              src={item.Image}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutImg;
