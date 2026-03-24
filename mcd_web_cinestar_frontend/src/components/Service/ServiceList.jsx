import React from "react";
import {
  film_production,
  kreativ_retning,
  musik_video,
  tv_production,
} from "../../assets/service/index";

const listData = [
  {
    id: 1,
    title: "Filmproduktion",
    Icon: film_production,
    iconClass: "w-auto  h-[72px] object-contain",
    description:
      "Vi skaber professionelle filmproduktioner, der formidler dit budskab klart, engagerende og visuelt overbevisende.",
  },
  {
    id: 2,
    title: "En Kreativ Retning",
    Icon: kreativ_retning,
    iconClass: "w-auto h-[90px] object-contain",
    description:
      "Vi sikrer en kreativ retning, der løfter dit projekt fra almindeligt til uforglemmeligt.",
  },
  {
    id: 3,
    title: "Tv Production",
    Icon: tv_production,
    iconClass: "w-full h-[64px] object-contain",
    description:
      "Vi leverer komplette løsninger inden for formatudvikling, optagelse og redigering.",
  },
  {
    id: 4,
    title: "Musik Video",
    Icon: musik_video,
    iconClass: "w-full h-[72px] object-contain",
    description:
      "Lad din musik træde frem i et visuelt univers, der forstærker din lyd og dit budskab.",
  },
];

const ServiceList = () => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {listData.map((item) => (
          <li
            key={item.id}
            className="flex flex-row items-start justify-center gap-6 w-[400px] h-auto"
          >
            <div className="w-20 h-20 flex items-center justify-center shrink-0 self-center">
              <img
                src={item.Icon}
                alt={item.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold font-cormorant text-secondary text-xl md:text-2xl uppercase mb-4">
                {item.title}
              </h3>
              <p className="font-medium text-secondary text-lg text-start">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceList;
