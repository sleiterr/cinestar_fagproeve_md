import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import clsx from "clsx";

const ContactConfirmation = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <section
      className={clsx(
        "flex items-center justify-center",
        "h-screen bg-confirmation",
      )}
    >
      <div className="px-4 py-16 mx-auto md:max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-12">
          <BoxText name={name} />
          <Button
            to="/"
            className="self-center py-2 px-16 text-xl md:text-4xl md:py-4 md:px-34 mt-0!"
          >
            Tilbage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactConfirmation;

const BoxText = ({ name }) => {
  const confirmText = [
    {
      id: 1,
      text: `Tak for din besked ${name || "ven !"} `,
      titleClass:
        "font-bold text-secondary text-2xl md:text-3xl text-center mb-8 mx-auto",
    },
    {
      id: 2,
      text: "Vi bestræber os på at kontakte dig via din email indenfor 24 timer.",
      titleClass:
        "font-bold text-secondary text-base md:text-xl text-center mx-auto max-w-[400px]",
    },
  ];

  return (
    <div>
      {confirmText.map((item) => (
        <div key={item.id} className="">
          <p className={item.titleClass}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
