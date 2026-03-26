import React from "react";
import clsx from "clsx";

const wrapperData = [
  {
    id: 1,
    href: "#",
    title: "Facebook",
    hoverColor: "hover:text-[#1877f3]",
  },
  {
    id: 2,
    href: "#",
    title: "Twitter",
    hoverColor: "hover:text-[#1da1f2]",
  },
  {
    id: 3,
    href: "#",
    title: "LinkedIn",
    hoverColor: "hover:text-[#0077b5]",
  },
  {
    id: 4,
    href: "#",
    title: "Instagram",
    hoverColor: "hover:text-[#e4405f]",
  },
  {
    id: 5,
    href: "#",
    title: "YouTube",
    hoverColor: "hover:text-[#ff0000]",
  },
];

export const LinkWrapper = () => {
  return (
    <>
      <ul className="grid grid-cols-2 gap-4 md:flex md:flex-col">
        {wrapperData.map((item) => (
          <li
            key={item.id}
            className={clsx(
              "flex flex-col items-center justify-center md:items-end ",
              "font-cormorant font-bold text-2xl uppercase cursor-pointer",
              "last:col-span-2 last:text-center",
            )}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "transition-colors duration-300 ease-out",
                item.hoverColor,
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
