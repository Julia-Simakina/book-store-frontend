import React, { useState } from "react";
import AuthBunner from "../../components/AuthBunner/AuthBunner";
import bookCover from "../../../images/unsplash_aZ_MmSmAcjg.png";
import LikeIcon from "../../components/LikeIcon";
import StyledProductContainer from "./Product.styles";
import Title from "../../components/Title/Title";
import StarRating from "../../components/StarRating/StarRating";

const Product: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <StyledProductContainer>
      <div className='book-container'>
        <div className='book-cover'>
          <LikeIcon
            right='30px'
            top='30px'
            size='large'
            isLiked={isLiked}
            onClick={() => setIsLiked(!isLiked)}
          />
          <img className='book-cover__img' src={bookCover} alt='Book Cover' />
        </div>

        <div className='book-container__description'>
          <Title>milk and honey</Title>
          <p className='book-author'>Rupi Kaur</p>
          <StarRating />
          <h2 className='description-title'>Description</h2>
          <p>
            The book is divided into four chapters, and each chapter serves a different purpose.
            Deals with a different pain. Heals a different heartache. milk and honey takes readers
            through a journey of the most bitter moments in life and finds sweetness in them because
            there is sweetness everywhere if you are just willing to look.
          </p>
        </div>
      </div>

      <AuthBunner />
    </StyledProductContainer>
  );
};

export default Product;
