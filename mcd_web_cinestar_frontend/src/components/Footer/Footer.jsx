import React from "react";
import clsx from "clsx";
import FooterCTA from "./FooterCTA";
import { ContactFooter } from "./ContactFooter";
import { LinkWrapper } from "./LinkWrapper";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-footer">
      <div
        className={clsx(
          "flex items-center flex-col gap-8 justify-between w-full py-24 px-8  md:py-12 md:px-20",
          "md:gap-0 md:flex-row md:items-center md:py-8",
        )}
      >
        <div className="flex flex-col items-center justify-center">
          <FooterCTA />
        </div>

        <ContactFooter />

        <div className="flex flex-col md:items-end gap-2">
          <LinkWrapper />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
