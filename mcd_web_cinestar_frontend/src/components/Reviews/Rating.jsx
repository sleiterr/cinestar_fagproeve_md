import clsx from "clsx";
import { IoStarSharp } from "react-icons/io5";

const Rating = ({ rating }) => {
  if (rating == null) return null;

  const stars = Array(5).fill(0);
  const colors = { yellow: "#FACC15", grey: "#a9a9a9" };

  return (
    <>
      <div className="flex items-start mb-4 gap-1">
        {stars.map((_, index) =>
          index < Math.round(rating) ? (
            <IoStarSharp
              key={index}
              size={24}
              color={colors.yellow}
              className="rotate-45"
            />
          ) : (
            <IoStarSharp
              key={index}
              size={24}
              color={colors.grey}
              className="rotate-45"
            />
          ),
        )}
      </div>
    </>
  );
};

export default Rating;
