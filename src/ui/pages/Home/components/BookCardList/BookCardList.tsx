import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import StyledBookCardList from "./BookCardList.styles";
import { fetchBooks } from "../../../../../store/BookThunk";
import { fetchGenres } from "../../../../../store/GenreThunk";
import { useAppDispatch, useAppSelector } from "../../../../../store/store";
import ArrowButton from "../ArrowButton/ArrowButton";
import PageSelectButton from "../PageSelectButton/PageSelectButton";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { selectGenre } from "../../../../../store/GenreSlice";

const ITEMS_PER_PAGE = 3;

const BookCardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedGenres = useAppSelector((state) => state.genres.selectedGenres);
  const bookList = useAppSelector((state) => state.books.bookList);
  const genreIdsArr = useAppSelector((state) => state.books.genreIdsArr);
  const numberOfPages = useAppSelector((state) => state.books.numberOfPages);

  const PageNumFromSearchParams = Number(searchParams.get("page"));

  const genresFromSearch = searchParams.get("genres");

  const initialCurrentPageState =
    PageNumFromSearchParams < 1 || isNaN(PageNumFromSearchParams)
      ? 1
      : PageNumFromSearchParams;

  const [currentPage, setCurrentPage] = useState(initialCurrentPageState);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageSelectClick = (n: number) => {
    setCurrentPage(n);
  };

  useEffect(() => {
    console.log("genresFromSearch", genresFromSearch);

    dispatch(
      fetchBooks({
        itemsPerPage: ITEMS_PER_PAGE,
        currentPage,
        selectedGenres:
          (genresFromSearch !== null &&
            genresFromSearch.split(",").map((i) => Number(i))) ||
          [],
      })
    );
  }, []);

  // useEffect(() => {
  //   setSearchParams({
  //     page: currentPage.toString(),
  //     genres: genreIdsArr.join(","),
  //   });
  //   dispatch(selectGenre(genreIdsArr));
  //   dispatch(
  //     fetchBooks({
  //       itemsPerPage: ITEMS_PER_PAGE,
  //       currentPage,
  //       selectedGenres: ggg?.split(",").map((i) => Number(i)) || [],
  //     })
  //   );
  // }, [currentPage, genreIdsArr]);

  useEffect(() => {
    console.log("genreIdsArr >>", genreIdsArr);
    setSearchParams({
      page: currentPage.toString(),
      genres: selectedGenres.join(","),
    });
    // dispatch(selectGenre(selectedGenres));
    dispatch(
      fetchBooks({
        itemsPerPage: ITEMS_PER_PAGE,
        currentPage,
        selectedGenres,
      })
    );
  }, [currentPage, selectedGenres]);

  return (
    <>
      <StyledPagination>
        <ArrowButton disabled={currentPage === 1} onClick={handlePrevPage} />
        <div className="page-button-container">
          {Array(numberOfPages)
            .fill(null)
            .map((_, num) => (
              <PageSelectButton
                key={num}
                onClick={() => handlePageSelectClick(num + 1)}
                select={currentPage === num + 1}
              />
            ))}
        </div>
        <ArrowButton
          transform="rotate(180deg)"
          disabled={currentPage === numberOfPages}
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
