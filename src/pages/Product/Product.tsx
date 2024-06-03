import React, { useState } from "react";
import AuthBunner from "../../components/AuthBunner/AuthBunner";
import bookCover from "../../images/unsplash_aZ_MmSmAcjg.png";
import BigLikeIcon from "../../components/BigLikeIcon";
import StyledProductContainer from "./Product.styles";

const Product: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <StyledProductContainer>
      <div className="book-cover">
        <BigLikeIcon fill="none" onClick={() => setIsLiked(true)} />
        {isLiked && (
          <BigLikeIcon
            className="like-icon"
            fill="white"
            opacity="1"
            onClick={() => setIsLiked(false)}
          />
        )}
        <img className="book-cover__img" src={bookCover} alt="Book Cover" />
      </div>
      <AuthBunner />
    </StyledProductContainer>
  );
};

export default Product;
