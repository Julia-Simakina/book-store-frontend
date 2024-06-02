import styled from "styled-components";
import BookCard from "./BookCard";
import book1 from "../../images/unsplash_2bqXqr4GeCg.png";
import book2 from "../../images/unsplash_O7ygzpAL4Mc.png";

const StyledBookCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(305px, 1fr));
  gap: 60px 20px;
  margin: 38px auto 0;
  padding: 0;
  max-width: 1280px;
  justify-items: center;
`;

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
