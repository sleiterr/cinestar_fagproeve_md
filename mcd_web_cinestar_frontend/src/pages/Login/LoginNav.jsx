import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";

const LoginNav = () => {
  return (
    <>
      <nav className="absolute top-12 right-20">
        <div
          aria-label="Go to home"
          className={clsx(
            "bg-icon-overlay",
            "rounded",
            "p-4 cursor-pointer",
            "transition-all duration-300 ease-in-out",
            "hover:bg-hover-icon hover:scale-105 hover:shadow-md",
          )}
        >
          <Link to="/">
            <ImHome className="text-white w-10 h-10" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default LoginNav;
