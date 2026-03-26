import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import clsx from "clsx";
import logo from "../../assets/logo/logo.png";

const FooterLogo = ({ scrollTarget = "hero" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    // scroll to top first to ensure the scroll works correctly when already on the homepage
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.pathname === "/") {
      scroller.scrollTo(scrollTarget, {
        smooth: true,
        duration: 250,
      });
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <img
        src={logo}
        alt="cinestar logo"
        className="w-51 h-auto mb-4 cursor-pointer"
        onClick={handleClick}
      />
      <p
        className={clsx(
          "flex items-center gap-4",
          "font-light text-lg text-primary-footer text-center uppercase",
        )}
      >
        Copyright 2025 &#169; cinestar. | Powered By Romethem e Studio
      </p>
    </>
  );
};

export default FooterLogo;
