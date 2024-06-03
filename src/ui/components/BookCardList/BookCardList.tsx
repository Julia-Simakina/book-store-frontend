import BookCard from "../BookCard/BookCard";
import book1 from "../../../images/unsplash_2bqXqr4GeCg.png";
import book2 from "../../../images/unsplash_O7ygzpAL4Mc.png";
import StyledBookCardList from "./BookCardList.styles";

const BookCardList: React.FC = () => {
  return (
    <StyledBookCardList>
      <BookCard src={book1} title={"Book of Fairy Tales"} author={"Angela Carter"} />
      <BookCard src={book2} title={"The Two towers"} author={"J. R. R. Tolkien"} />
      <BookCard src={book1} title={"Book of Fairy Tales"} author={"Angela Carter"} />
      <BookCard src={book2} title={"The Two towers"} author={"J. R. R. Tolkien"} />
      <BookCard src={book1} title={"Book of Fairy Tales"} author={"Angela Carter"} />
      <BookCard src={book2} title={"The Two towers"} author={"J. R. R. Tolkien"} />
      <BookCard src={book1} title={"Book of Fairy Tales"} author={"Angela Carter"} />
      <BookCard src={book2} title={"The Two towers"} author={"J. R. R. Tolkien"} />
    </StyledBookCardList>
  );
};

export default BookCardList;
