import React from "react";

const introBlog = [
  {
    id: 1,
    subject: "Blog",
    title: "Vores sneste blog",
    desc: "Hold dig opdateret med de seneste nyheder, indblik og historier fra Cinestar. Vi deler inspiration, tips og bag kulisserne fra vores spændende projekter og produktioner.",
    subjectClass:
      "font-bold font-teko text-primary text-xl md:text-2xl uppercase mb-2 md:mb-4",
    titleClass:
      "flex flex-col md:flex-row items-center font-bold font-cormorant text-secondary text-3xl md:text-4xl uppercase mb-4 md:mb-6 max-w-[320px] md:max-w-full",

    descClass:
      "font-normal text-secondary text-lg md:text-xl text-start max-w-[320px] md:max-w-[540px]",
  },
];

const BlogIntro = () => {
  return (
    <>
      <BlogItem />
    </>
  );
};

const BlogItem = () => {
  return (
    <>
      {introBlog.map((item) => (
        <div key={item.id} className="flex flex-col items-start justify-center">
          {item.element}
          <h4 className={item.subjectClass}>{item.subject}</h4>
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.descClass}>{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default BlogIntro;
