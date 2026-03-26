import React from "react";
import Card from "../Card/Card";
import { useBlogs } from "./useBlogs";

const CardBlog = () => {
  const { blogs, loading, error } = useBlogs();

  // Define the target ID for the specific event we want to display
  const targetId = "69c0fcdacc2b766fccea91c4";
  // Find the event with the matching ID, or default to the first event if not found
  const uniqueEvent = blogs.find((item) => item._id === targetId) || blogs[0];

  // Format the date string to "day month, year" format
  const formatDate = (dateString) => {
    // Create a Date object from the input string
    const date = new Date(dateString);

    // Extract the day, month (in Danish), and year
    const day = date.getDate();
    // Use toLocaleString to get the month name in Danish
    const month = date.toLocaleString("da-DK", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  };

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-800">
        Loading list services...
      </p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  // return null if the specific event is not found to avoid rendering issues
  if (!uniqueEvent) return null;

  return (
    <>
      {uniqueEvent && (
        <Card key={uniqueEvent._id}>
          <div className="">
            <img
              src={uniqueEvent.image}
              alt={uniqueEvent.title}
              className="object-contain w-full h-auto"
            />
          </div>
          <div className="px-4 py-6 w-85 md:w-full flex flex-col items-start justify-start">
            <h4 className="font-medium text-xl text-primary uppercase mb-4 w-full md:w-3xs">
              {uniqueEvent.title}
            </h4>
            <p className="font-normal text-xl text-secondary mb-4">
              {uniqueEvent.teaser}
            </p>
            <div className="self-end">
              <p className="font-normal text-sm text-secondary">
                Oprettet d. {formatDate(uniqueEvent.created)}
              </p>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default CardBlog;
