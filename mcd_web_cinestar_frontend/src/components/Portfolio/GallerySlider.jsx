import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import { galleryImages } from "../../assets/gallery_slider/index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const GallerySlider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);
  const totalPage = Math.ceil(galleryImages.length / itemsPerPage);

  const paginatedImages = galleryImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="relative w-full">
      <ul className="">
        {paginatedImages.map((image, index) => (
          <li key={index}>
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover relative"
            />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
        containerClass="absolute -top-1/3 md:top-0 left-0 right-0 bottom-0 flex items-center justify-between!"
        leftIcon={
          <IoIosArrowBack className="text-[32px] md:text-[62px] text-arrow-slider " />
        }
        rightIcon={
          <IoIosArrowForward className="text-[32px] md:text-[62px] text-arrow-slider " />
        }
        buttonClass="disabled:opacity-50 cursor-pointer bg-arrow-bg px-2 py-2 md:px-6 md:py-4"
        setDirection={() => {}}
      />
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPage }).map((_, index) => (
          <GoDotFill
            key={index}
            className={`text-2xl md:text-3xl cursor-pointer transition-colors ${currentPage === index + 1 ? "text-arrow-active" : "text-arrow-dot"}`}
            onClick={() => setCurrentPage(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
