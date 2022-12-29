import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

const Star = ({selected = false}) => (
  <FaStar color={selected ? "red" : "grey"}></FaStar>
);

export default function StarRating({totalStars = 5}) {
  const [selectedStars] = useState(3);
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i}></Star>
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}