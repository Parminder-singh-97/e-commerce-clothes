import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FlyingUpArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  return (
    <>
      <div
        onClick={scrollToTop}
        className=" flex justify-center items-center fixed bottom-8 rounded-full right-10 bg-teal-600 w-10 h-10 z-50 cursor-pointer"
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-white text-xl" />
      </div>
    </>
  );
};

export default FlyingUpArrow;
