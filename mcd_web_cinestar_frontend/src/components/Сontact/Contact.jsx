import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";

const contactData = [
  {
    id: 1,
    href: "mailto: cinestar@production.dk",
    text: " cinestar@production.dk",
    clasText: "font-meium text-xl text-content",
    icon: <MdEmail className="text-form-icon w-10 h-10" />,
    className: "footer-item flex items-center gap-2",
  },
  {
    id: 2,
    href: "tel:+45 12 34 56 78",
    text: "+45 12 34 56 78",
    clasText: "font-meium text-xl text-content",
    icon: <FaPhoneAlt className="text-form-icon w-10 h-10" />,
    className: "footer-item flex items-center justify-center gap-2",
  },
  {
    id: 3,
    text: "Fotovej 66, 8456 Cineby",
    clasText: "font-meium text-xl text-content",
    icon: <MdPlace className="text-form-icon w-10 h-10" />,
    className: "footer-item flex items-center justify-center gap-2",
  },
];

const Contact = () => {
  return (
    <ul className="flex flex-col items-start justify-center gap-4 lg:gap-8">
      {contactData.map((item) => (
        <li key={item.id} className={item.className}>
          {item.icon}
          {item.href ? (
            <a href={item.href} className={item.clasText}>
              {item.text}
            </a>
          ) : (
            <p className={item.clasText}>{item.text}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Contact;
