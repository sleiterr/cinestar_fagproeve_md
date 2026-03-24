import React from "react";

const portfolioText = [
  {
    id: 1,
    subject: "portfolio",
    title: "Udvalgte projekter",
    desc: [
      "Her præsenterer vi et udvalg af de produktioner, vi er stolte af at have skabt.",
      "Hvert projekt fortæller sin unikke historie og illustrerer vores ambition om at levere høj kvalitet, originalitet og visuel gennemslagskraft.",
      "Gå på opdagelse, og lad dig inspirere af vores arbejde.",
    ],
    subjectClass:
      "font-bold font-teko text-primary text-xl md:text-2xl uppercase mb-2 md:mb-4",
    titleClass:
      "flex flex-col md:flex-row items-center font-bold font-cormorant text-secondary text-3xl md:text-4xl uppercase mb-4 md:mb-6 max-w-[320px] md:max-w-full",

    descClass:
      "font-bold text-secondary text-xl text-start max-w-[320px] md:max-w-[560px]",
  },
];

// children - GallerySlider
const PortfolioContent = ({ children }) => {
  return (
    <>
      <PortfolioItem>{children}</PortfolioItem>
    </>
  );
};

const PortfolioItem = ({ children }) => {
  return (
    <>
      {portfolioText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center md:items-start justify-center"
        >
          <div>
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
          {children}
          <div className="space-y-4 mt-8">
            {item.desc.map((text, index) => (
              <p key={index} className={item.descClass}>
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioContent;
