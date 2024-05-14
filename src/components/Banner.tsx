import styled from "styled-components";
import books from "../images/books.svg";
import girl from "../images/girl.svg";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Button from "./Button";

const StyledBanner = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  max-width: 1280px;
  min-height: 400px;
  background-color: #f0f4ef;
  margin: 40px auto;
  border-radius: 16px;
  z-index: 5;
`;

const BooksImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 542px;
  z-index: -1;
`;

const GirlImg = styled.img`
  position: absolute;
  right: 98px;
  bottom: 0;
  width: 406px;
  z-index: -1;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 108px;
`;

const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <BooksImg src={books} alt="Books" />
      <GirlImg src={girl} alt="The girl is reading" />
      <TitleContainer>
        <Title>Build your library with us</Title>
        <SubTitle>Buy two books and get one for free</SubTitle>
        <Button marginTop={"50px"}>Choose a book</Button>
      </TitleContainer>
    </StyledBanner>
  );
};
export default Banner;
