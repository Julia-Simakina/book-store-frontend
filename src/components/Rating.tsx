import React, { useState } from 'react';
import styled from 'styled-components';
import StarIcon from './StarIcon';

const StarRatingContainer = styled.div`
  display: inline-block;
`;

const Star = styled.span<{ highlighted: boolean }>`
  font-size: 2rem;
  cursor: pointer;
  color: ${props => (props.highlighted ? '#BFCC94' : 'lightgray')};
`;

const StarRating: React.FC = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <StarRatingContainer>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            highlighted={rating >= starValue}
            onClick={() => handleStarClick(starValue)}
          >
            {rating >= starValue ? <StarIcon fill='#BFCC94' /> : <StarIcon fill='none' />}
          </Star>
        );
      })}
    </StarRatingContainer>
  );
};

export default StarRating;
