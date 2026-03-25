import React from "react";

const reviewsText = [
  {
    id: 1,
    subject: "Udtalelser",
    title: "Hvad siger vores samarbejdspartnere om os ?",
    desc: "“Cinestar er en fantastisk samarbejdspartner, der formår at kombinere kreativitet med professionalisme. Deres evne til at skabe unikke og engagerende produktioner er imponerende, og resultatet taler altid for sig selv.”",
    subjectClass:
      "font-bold font-teko text-primary text-xl md:text-2xl uppercase mb-2 md:mb-4",
    titleClass:
      "font-bold font-cormorant text-secondary text-3xl md:text-4xl text-center uppercase mb-4 md:mb-6 max-w-[320px] md:max-w-[560px]",

    descClass:
      "font-medium text-secondary text-lg md:text-xl text-center max-w-[360px] md:max-w-[540px]",
  },
];

const ReviewsContent = () => {
  return (
    <>
      <ReviewsItem />
    </>
  );
};

const ReviewsItem = () => {
  return (
    <>
      {reviewsText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center md:items-center justify-center mb-12"
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

export default ReviewsContent;
