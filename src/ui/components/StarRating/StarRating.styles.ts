import styled from "styled-components";

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

export default StarRatingContainer;
