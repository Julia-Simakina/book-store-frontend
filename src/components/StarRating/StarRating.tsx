import React, { useState } from "react";
import StarIcon from "../StarIcon";
import StarRatingContainer from "./StarRating.styles";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <StarRatingContainer>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <>
            <span
              className="star"
              key={index}
              onClick={() => handleStarClick(starValue)}
            >
              {rating >= starValue ? (
                <StarIcon fill="#BFCC94" />
              ) : (
                <StarIcon fill="none" />
              )}
            </span>
          </>
        );
      })}
      <p className="rating">{rating}</p>
    </StarRatingContainer>
  );
};

export default StarRating;
