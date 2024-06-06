import BookCard from "../BookCard/BookCard";
import StyledBookCardList from "./BookCardList.styles";
import { useEffect } from "react";
import { fetchBooks } from "../../../store/BookThunk";
import { useAppDispatch, useAppSelector } from "../../../store/store";

const BookCardList: React.FC = () => {
  // const [bookList, setBookList] = useState<BookType[] | null>(null);
  const dispatch = useAppDispatch();

  const bookList = useAppSelector((state) => state.books.bookList);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const books = await getBooks();
  //       setBookList(books);
  //       console.log("books>>>>>>>>>>>", books);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    dispatch(fetchBooks());
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
