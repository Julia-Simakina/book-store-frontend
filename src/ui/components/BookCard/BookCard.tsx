import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import StarRating from "../StarRating/StarRating";
import LikeIcon from "../LikeIcon";
import StyledBookCard from "./BookCard.styles";

type BookCardType = {
  color?: string;
  src: string;
  title: string;
  author: string;
};

const BookCard: React.FC<BookCardType> = props => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <StyledBookCard>
      <LikeIcon isLiked={isLiked} left='20px' onClick={() => setIsLiked(!isLiked)} />
      <img src={props.src} alt='' />

      <h3 className='book-title'>{props.title}</h3>
      <p className='book-author'>{props.author}</p>

      <StarRating />

      {/* d */}

      <CustomButton width='305px' fontSize='20px' marginTop='27px'>
        $23.00 USD
      </CustomButton>
    </StyledBookCard>
  );
};

export default BookCard;
