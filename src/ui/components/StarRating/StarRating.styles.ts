import styled from "styled-components";
import { StarRatingPropsType } from "./StarRating";

const StarRatingContainer = styled.div<StarRatingPropsType>`
  display: flex;
  gap: 30px;
  margin: ${(props) => props.margin || "0"};
  /* margin-top: 20px; */

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
