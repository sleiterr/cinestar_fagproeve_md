import React from "react";
import Section from "../Section/Section";
import ReviewsContent from "./ReviewsContent";
import Reviews from "./Reviews";

const ReviewsSection = () => {
  return (
    <Section className="px-4" id="reviews">
      <ReviewsContent />
      <Reviews />
    </Section>
  );
};

export default ReviewsSection;
