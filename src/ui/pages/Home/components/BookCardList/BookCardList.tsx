import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import StyledBookCardList from "./BookCardList.styles";
import { fetchBooks } from "../../../../../store/BookThunk";
import { useAppDispatch, useAppSelector } from "../../../../../store/store";
import ArrowButton from "../ArrowButton/ArrowButton";
import PageSelectButton from "../PageSelectButton/PageSelectButton";
import styled from "styled-components";
import {
  incrementCurrentPage,
  decrementCurrentPage,
  setCurrentPage,
} from "../../../../../store/BookSlice";

const BookCardList: React.FC = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.books.currentPage);
  const bookList = useAppSelector((state) => state.books.bookList.slicedCards);
  const pageNumbers = useAppSelector((state) => state.books.bookList.numbers);

  console.log("pageNumbers", pageNumbers);

  const handleNextPage = () => {
    dispatch(incrementCurrentPage());
  };

  const handlePrevPage = () => {
    dispatch(decrementCurrentPage());
  };

  const handlePageSelectClick = (n: number) => {
    dispatch(setCurrentPage(n));
  };

  useEffect(() => {
    dispatch(fetchBooks({ itemsPerPage, currentPage }));
  }, [dispatch, itemsPerPage, currentPage]);

  return (
    <>
      <StyledPagination>
        <ArrowButton disabled={currentPage === 1} onClick={handlePrevPage} />
        <div className="page-button-container">
          {pageNumbers.map((num) => (
            <PageSelectButton
              key={num}
              onClick={() => handlePageSelectClick(num)}
              select={currentPage === num}
            />
          ))}
        </div>
        <ArrowButton
          transform="rotate(180deg)"
          disabled={currentPage === pageNumbers.length}
          onClick={handleNextPage}
        />
      </StyledPagination>
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
    </>
  );
};

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  .page-button-container {
    display: flex;

    gap: 30px;
  }
`;

export default BookCardList;
