import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";

const contactData = [
  {
    id: 1,
    href: "mailto: cinestar@production.dk",
    text: " cinestar@production.dk",
    clasName: "footer-link font-light text-lg tracking-wide text-content",
    icon: <MdEmail className="text-white w-6 h-6" />,
    className: "footer-item flex items-center gap-2",
  },
  {
    id: 2,
    href: "tel:+45 12 34 56 78",
    text: "+45 12 34 56 78",
    clasName: "footer-link font-light text-lg tracking-wide text-content",
    icon: <FaPhoneAlt className="text-white w-6 h-6" />,
    className: "footer-item flex items-center justify-center gap-2",
  },
  {
    id: 3,
    text: "Fotovej 66, 8456 Cineby",
    clasName: "footer-link font-light text-lg tracking-wide text-content",
    icon: <MdPlace className="text-white w-6 h-6" />,
    className: "footer-item flex items-center justify-center gap-2",
  },
];

const Contact = () => {
  return (
    <ul className="flex flex-col items-start md:flex-row md:items-center justify-center gap-4 lg:gap-6">
      {contactData.map((item) => (
        <li key={item.id} className={item.className}>
          {item.icon}
          {item.href ? (
            <a
              href={item.href}
              className="footer-link font-light text-lg tracking-wide text-content"
            >
              {item.text}
            </a>
          ) : (
            <p className={item.className}>{item.text}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Contact;
