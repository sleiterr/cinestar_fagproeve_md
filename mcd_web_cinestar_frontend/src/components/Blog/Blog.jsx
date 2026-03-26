import React from "react";
import clsx from "clsx";
import Section from "../Section/Section";
import BlogIntro from "./BlogIntro";
import CardBlog from "./CardBlog";

const Blog = () => {
  return (
    <Section
      style={{ background: "var(--color-blog)" }}
      className={clsx(
        "grid grid-cols-1 md:grid-cols-2 gap-8 px-4!",
        "place-items-center",
      )}
    >
      <BlogIntro />
      <CardBlog />
    </Section>
  );
};

export default Blog;
