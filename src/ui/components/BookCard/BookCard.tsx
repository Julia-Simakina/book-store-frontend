import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import StarRating from "../StarRating/StarRating";
import LikeIcon from "../LikeIcon";
import StyledBookCard from "./BookCard.styles";
import { Link } from "react-router-dom";
import { addBookToCart } from "../../../api/http/cartApi";

type BookCardType = {
  color?: string;
  src: string;
  title: string;
  author: string;
  key: number;
  hardCoverPrice: string;
  id: number;
  to: any;
};

const BookCard: React.FC<BookCardType> = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <StyledBookCard>
      <LikeIcon isLiked={isLiked} left="20px" onClick={handleLikeClick} />
      <Link to={props.to} className="book-link">
        <img className="book-cover" src={props.src} alt="Book cover" />

        <h3 className="book-title">{props.title}</h3>
        <p className="book-author">{props.author}</p>
      </Link>
      <StarRating margin="20px 0 0 0" />

      <CustomButton
        onClick={() => addBookToCart(props.id)}
        width="305px"
        fontSize="20px"
        marginTop="27px"
      >
        {props.hardCoverPrice}
      </CustomButton>
    </StyledBookCard>
  );
};

export default BookCard;
