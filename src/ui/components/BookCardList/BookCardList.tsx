import BookCard from "../BookCard/BookCard";
import StyledBookCardList from "./BookCardList.styles";
import { getBooks } from "../../../api/http/bookApi";
import { useEffect, useState } from "react";
import { BookType } from "../../../types";
import { useNavigate } from "react-router-dom";

const BookCardList: React.FC = () => {
  const naigate = useNavigate();
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
      {bookList?.length !== 0 &&
        bookList?.map((book) => (
          <BookCard
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
