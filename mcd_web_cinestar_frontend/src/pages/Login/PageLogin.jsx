import React from "react";
import clsx from "clsx";
import LoginForm from "./LoginForm";
import LoginNav from "./LoginNav";

const pageText = [
  {
    id: 1,
    title: "Login",
    titleClass: "font-bold font-cormorant text-primary text-7xl",
  },
];

const PageLogin = ({ onLogin }) => {
  return (
    <section
      className={clsx("flex items-center justify-center", "relative h-screen")}
    >
      <LoginNav />

      <div
        className={clsx(
          "flex flex-col items-center-center",
          "px-4 py-16 mx-auto md:max-w-7xl",
        )}
      >
        <PageItem />
        <LoginForm onLogin={onLogin} />
      </div>
    </section>
  );
};

const PageItem = () => {
  return (
    <div className="mb-8">
      {pageText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          {item.element}
          <h2 className={item.titleClass}>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PageLogin;
