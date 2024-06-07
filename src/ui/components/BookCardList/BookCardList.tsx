import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import StyledBookCardList from "./BookCardList.styles";
import { fetchBooks } from "../../../store/BookThunk";
import { useAppDispatch, useAppSelector } from "../../../store/store";

const BookCardList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const dispatch = useAppDispatch();
  const bookList = useAppSelector((state) => state.books.bookList);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    dispatch(fetchBooks({ startIndex, endIndex }));
  }, [dispatch, startIndex, endIndex]);

  return (
    <div>
      <div>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>
          Предыдущая страница
        </button>
        <button
          disabled={bookList.length < itemsPerPage}
          onClick={handleNextPage}
        >
          Следующая страница
        </button>
      </div>
      <StyledBookCardList>
        {bookList.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            to={`/product-page/${book.id}`}
            src={book.cover}
            title={book.name}
            author={book.authorName}
            hardCoverPrice={book.hardCoverPrice.toString()}
          />
        ))}
      </StyledBookCardList>
    </div>
  );
};
export default BookCardList;
