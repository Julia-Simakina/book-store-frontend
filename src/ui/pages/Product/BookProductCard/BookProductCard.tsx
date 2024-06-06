import React, { useEffect, useState } from "react";
import LikeIcon from "../../../components/LikeIcon";
import Title from "../../../components/Title/Title";
import StarRating from "../../../components/StarRating/StarRating";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useParams } from "react-router-dom";
import { getBookById } from "../../../../api/http/bookApi";
import { BookType } from "../../../../types";
import { addBookToCart } from "../../../../api/http/cartApi";

const BookProductCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [book, setBook] = useState<BookType | null>(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const currentBook: BookType = await getBookById(Number(id));
        setBook(currentBook);
        console.log("currentBook >>", currentBook);
        return currentBook;
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  console.log(">>>>>>>>>>>>", book);

  return !book ? (
    <h1>Book not found</h1>
  ) : (
    <section className="book-section">
      <div className="book-cover">
        <LikeIcon
          right="30px"
          top="30px"
          size="large"
          isLiked={isLiked}
          onClick={() => setIsLiked(!isLiked)}
        />
        <img className="book-cover__img" src={book.cover} alt="Book Cover" />
      </div>

      <div className="book-section__description">
        <Title>{book.name}</Title>
        <p className="book-author">{book.authorName}</p>
        <StarRating margin="30px 0" />
        <h3 className="description-title">Description</h3>
        <p>{book.description}</p>
        <div className="book-section__buttons">
          <div className="button-wrapper">
            <h3 className="button-title">Paperback</h3>
            <CustomButton backgroundColor="#B9BAC3">Not available</CustomButton>
          </div>

          <div className="button-wrapper">
            <h3 className="button-title">Hardcover</h3>
            <CustomButton onClick={() => addBookToCart(book.id)}>
              ${book.hardCoverPrice.toString()} USD
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookProductCard;
