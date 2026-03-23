import React from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ handleLinkClick, isLoggedIn, token }) => {
  const role = token ? jwtDecode(token).role : null;

  return (
    <div className="mt-12 ml-4 md:mt-0 md:ml-0">
      <ul className="flex flex-col items-start gap-6 w-30">
        <li>
          <a
            href="#"
            smooth={true.toString()}
            duration={800}
            className={clsx(
              "relativeking-wide cursor-pointer",
              "font-bold text-secondary text-2xl md:text-4xl tracking-wide",
              "hover:font-light transition-all duration-300",
            )}
            onClick={handleLinkClick}
          >
            Forside
          </a>
        </li>
        <li>
          <a
            href="#"
            smooth={true.toString()}
            duration={800}
            offset={-100}
            className={clsx(
              "relative cursor-pointer",
              "font-bold text-secondary text-2xl md:text-4xl tracking-wide",
              "hover:font-light transition-all duration-300",
            )}
            onClick={handleLinkClick}
          >
            Blog
          </a>
        </li>
        <li className="hidden md:block">
          <a
            href="#price"
            smooth={true.toString()}
            duration={800}
            offset={-100}
            className={clsx(
              "relative cursor-pointer",
              "font-bold text-secondary text-2xl md:text-4xl tracking-wide",
              "hover:font-light transition-all duration-300",
            )}
            onClick={handleLinkClick}
          >
            Faq
          </a>
        </li>
        <li>
          <a
            href="#"
            smooth={true.toString()}
            duration={800}
            offset={-100}
            className={clsx(
              "relative cursor-pointer",
              "font-bold text-secondary text-2xl md:text-4xl tracking-wide",
              "hover:font-light transition-all duration-300",
            )}
            onClick={handleLinkClick}
          >
            Kontakt
          </a>
        </li>
        {isLoggedIn && role === "admin" && (
          <>
            <li>
              <Link
                to="/backoffice"
                smooth={true.toString()}
                duration={800}
                offset={-100}
                className={clsx(
                  "relative cursor-pointer ",
                  "font-bold text-secondary text-2xl md:text-4xl tracking-wide",
                  "hover:font-light transition-all duration-300",
                )}
                onClick={() => {
                  handleLinkClick();
                }}
              >
                Dashboard
              </Link>
            </li>
          </>
        )}
        {isLoggedIn && role === "member" && (
          <>
            <li>
              <Link
                to="/my-page"
                smooth={true.toString()}
                duration={800}
                offset={-100}
                className={clsx(
                  "relative cursor-pointer ",
                  "font-bold text-secondary text-2xl md:text-4xl tracking-wide",
                  "hover:font-light transition-all duration-300",
                )}
                onClick={() => {
                  handleLinkClick();
                }}
              >
                My Page
              </Link>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li>
            <Link
              to="#"
              smooth={true.toString()}
              duration={800}
              offset={-100}
              className={clsx(
                "relative cursor-pointer ",
                "font-bold text-secondary text-2xl md:text-4xl tracking-wide",
                "hover:font-light transition-all duration-300",
              )}
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <Link
              to="/auth-landing"
              smooth={true.toString()}
              duration={800}
              offset={-100}
              className={clsx(
                "relative cursor-pointer ",
                "font-bold text-secondary text-2xl md:text-4xl tracking-wide",
                "hover:font-light transition-all duration-300",
              )}
              onClick={handleLinkClick}
            >
              Log out
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
