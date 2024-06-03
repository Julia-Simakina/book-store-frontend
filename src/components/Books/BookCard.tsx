import { useState } from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
import StarRating from "../StarRating/StarRating";
import LikeIcon from "../LikeIcon";

type BookCardType = {
  color?: string;
  src: string;
  title: string;
  author: string;
};

const BookCard: React.FC<BookCardType> = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <StyledBookCard>
      <LikeIcon isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
      <img src={props.src} alt="" />

      <h3 className="book-title">{props.title}</h3>
      <p className="book-author">{props.author}</p>

      <StarRating />

      {/* d */}

      <CustomButton width="305px" fontSize="20px" marginTop="27px">
        $23.00 USD
      </CustomButton>
    </StyledBookCard>
  );
};

const StyledBookCard = styled.div`
  color: ${(props) => props.color || "#0D1821"};
  width: 305px;
  position: relative;

  .book-title {
    font-size: 20px;
    line-height: 25px;
    font-weight: 500;
    color: #344966;
    width: 300px;
    margin-top: 25px;
  }

  .book-author {
    width: 300px;
    font-size: 20px;
    line-height: 25px;
    font-weight: 500;
    margin-top: 8px;
    color: #b9bac3;
  }
`;

export default BookCard;
