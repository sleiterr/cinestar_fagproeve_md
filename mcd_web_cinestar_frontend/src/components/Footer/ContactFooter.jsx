import React from "react";

const contactData = [
  {
    id: 1,
    href: "mailto:hello@awesomesite.com",
    text: "hello@awesomesite.com",
    textClass: "font-bold text-xl md:text-2xl text-secondary-footer",
  },
  {
    id: 2,
    href: "tel:+123-456-789",
    text: "+123-456-789",
    textClass: "font-bold text-xl md:text-2xl text-secondary-footer",
  },
];

export const ContactFooter = () => {
  return (
    <div>
      <h4 className="font-bold text-xl md:text-2xl text-secondary-footer text-center">
        Cinestar Studio
      </h4>
      <ul className="flex flex-col items-center justify-center gap-2 mt-4">
        {contactData.map((item) => (
          <li key={item.id} className="flex flex-col md:items-end">
            <a href={item.href} className={item.textClass}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
