import React from "react";
import clsx from "clsx";
import SectionWrapper from "../Section/SectionWrapper";
import studie from "../../assets/contact/studie2.jpg";
import Contact from "./Contact";
import ContactForm from "../ContactIntro/ContactForm";

const ContactIntroSection = () => {
  return (
    <SectionWrapper bgSrc={studie}>
      <div className="absolute inset-0 bg-contact z-0"></div>
      <div
        className={clsx(
          "relative z-10 h-screen",
          "w-full py-20 md:py-32 px-0 md:px-0 mx-auto md:max-w-7xl",
          "grid grid-cols-1 md:grid-cols-2 place-items-center gap-8",
        )}
      >
        <Contact />
        <ContactForm />
      </div>
    </SectionWrapper>
  );
};

export default ContactIntroSection;
