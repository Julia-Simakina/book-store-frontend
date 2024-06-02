import React, { useState } from "react";
import styled from "styled-components";
import StarIcon from "./StarIcon";

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
            <span className='star' key={index} onClick={() => handleStarClick(starValue)}>
              {rating >= starValue ? <StarIcon fill='#BFCC94' /> : <StarIcon fill='none' />}
            </span>
          </>
        );
      })}
      <p className='rating'>{rating}</p>
    </StarRatingContainer>
  );
};

const StarRatingContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;

  .rating {
    font-size: 16px;
    font-weight: 500;
    left: 24px;
    color: #b9bac3;
  }

  .star {
    cursor: pointer;
  }
`;

export default StarRating;
