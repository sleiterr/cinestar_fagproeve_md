import React, { useState } from "react";
import { useReviews } from "./useReviews";
import ReviewsCard from "./ReviewsCard";
import Rating from "./Rating";
import { IoMdQuote } from "react-icons/io";

import Pagination from "../Pagination/Pagination";

const Reviews = () => {
  const { reviews, loading, error } = useReviews();

  // Show 3 cards: center (active), left, right
  const [currentIndex, setCurrentIndex] = useState(0);
  // Total pages is the number of reviews, since we show 1 review at a time in the center
  const totalPage = reviews.length;

  // Calculate indices for left, center, right (cyclic)
  const getIndices = () => {
    if (reviews.length === 0) return [];
    // Use modulo to wrap around the indices
    const left = (currentIndex - 1 + reviews.length) % reviews.length;
    // currentIndex is the center, so we just return it as is
    const right = (currentIndex + 1) % reviews.length;
    // return in order: left, center, right
    return [left, currentIndex, right];
  };
  // Get the indices of the reviews to display based on currentIndex
  const visibleIndices = getIndices();

  if (loading)
    return (
      <p className="font-normal text-2xl text-yellow-500">Loading reviews...</p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 min-h-[320px]">
        {visibleIndices.map((idx, i) => {
          const item = reviews[idx];
          // Center card is bigger, sides are smaller
          const isCenter = idx === currentIndex;
          return (
            <ReviewsCard
              key={item._id || idx}
                 className={
                   isCenter
                     ? "scale-100 z-10 transition-all duration-300"
                     : "scale-90 opacity-70 z-0 transition-all duration-300"
                 }
            >
              <div className="flex flex-col items-start justify-center">
                <Rating rating={item.rating} />
                <p className="font-normal text-xs md:text-base text-secondary min-w-71.25 w-full pb-4">
                  {item.text}
                </p>
                <div className="flex flex-col items-start">
                  <h4 className="font-cormorant font-bold text-base md:text-lg text-primary uppercase">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-sm md:text-base text-secondary">
                      {item.position}
                    </span>
                    <IoMdQuote className="text-quote-bg" size={24} />
                  </div>
                </div>
              </div>
            </ReviewsCard>
          );
        })}
      </div>
      <Pagination
        currentPage={currentIndex + 1}
        totalPage={totalPage}
        setCurrentPage={(page) => setCurrentIndex(page - 1)}
        setDirection={() => {}}
        buttonClass="disabled:opacity-50 cursor-pointer text-xl"
      />
    </>
  );
};

export default Reviews;
