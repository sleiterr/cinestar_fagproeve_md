import React from "react";
import clsx from "clsx";
import { FaPlus } from "react-icons/fa6";

const statStats = [
  { id: 1, value: "250", label: "Film Produktion" },
  { id: 2, value: "78", label: "Musik Video" },
];

const StatItem = () => {
  return (
    <>
      <StatusItem />
    </>
  );
};

const StatusItem = () => {
  return (
    <>
      {statStats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <h3
            className={clsx(
              "flex items-center",
              "font-bold text-4xl md:text-5xl text-primary",
            )}
          >
            {stat.value}
            <FaPlus size={32} />
          </h3>
          <p className="font-bold text-xl md:text-2xl text-secondary uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </>
  );
};

export default StatItem;
