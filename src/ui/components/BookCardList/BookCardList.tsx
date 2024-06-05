import BookCard from "../BookCard/BookCard";
import StyledBookCardList from "./BookCardList.styles";
import { getBooks } from "../../../api/http/bookApi";
import { useEffect, useState } from "react";
import { BookType } from "../../../types";

const BookCardList: React.FC = () => {
  const [bookList, setBookList] = useState<BookType[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const books = await getBooks();
        setBookList(books);
        console.log("books>>>>>>>>>>>", books);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <StyledBookCardList>
      {bookList &&
        bookList?.map((book) => (
          <BookCard
            id={book.id}
            to={`/product-page/${book.id}`}
            key={book.id}
            src={book.cover}
            title={book.name}
            author={book.authorName}
            hardCoverPrice={book.hardCoverPrice.toString()}
          />
        ))}
    </StyledBookCardList>
  );
};

export default BookCardList;

//naigate(`/product-page/${book.id}`)
