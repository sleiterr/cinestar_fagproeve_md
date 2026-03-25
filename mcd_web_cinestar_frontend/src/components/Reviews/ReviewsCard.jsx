import React from "react";
import clsx from "clsx";

const ReviewsCard = ({ children, className }) => {
  return (
    <>
      <div
        className={clsx(
          "flex items-center justify-center",
          "max-w-[400px] md:max-w-[460px] w-full min-h-[280px] px-4 py-4 bg-card-bg ",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default ReviewsCard;
