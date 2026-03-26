import React from "react";
import clsx from "clsx";
import FooterCTA from "./FooterCTA";
import { ContactFooter } from "./ContactFooter";
import { LinkWrapper } from "./LinkWrapper";
import FooterLogo from "./FooterLogo";
import liquifer from "../../assets/service/liquifer.png";

const Footer = () => {
  return (
    <footer
      className="relative flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${liquifer})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-footer-overlay"></div>
      <div
        className={clsx(
          "relative flex items-center flex-col gap-8 justify-between w-full py-24 px-8 md:py-12 md:px-20 z-10",
          "md:gap-0 md:flex-row md:items-center md:py-8 bg-footer",
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
      <div
        className={clsx("relative grid place-items-center py-6 px-8 w-full")}
      >
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
