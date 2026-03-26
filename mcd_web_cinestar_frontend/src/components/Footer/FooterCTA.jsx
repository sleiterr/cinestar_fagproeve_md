import React from "react";

const footerText = [
  {
    id: 1,
    title: "Har du en idé i tankerne ? Lad os starte dit projekt sammen.",
    classTitle:
      "font-cormorant font-bold text-secondary text-3xl uppercase w-[280px] text-center md:text-left",
  },
];

const FooterCTA = () => {
  return (
    <>
      <FooterItem />
    </>
  );
};

const FooterItem = () => {
  return (
    <>
      {footerText.map((item) => (
        <h4 key={item.id} className={item.classTitle}>
          {item.title}
        </h4>
      ))}
    </>
  );
};

export default FooterCTA;
