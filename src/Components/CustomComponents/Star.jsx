import React from "react";

const Star = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-yellow-400 text-2xl ${
            i < rating ? "fas fa-star" : "far fa-star"
          }`}
        ></span>
      ))}
    </>
  );
};

export default Star;
