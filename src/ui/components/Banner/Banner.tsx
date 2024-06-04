import books from "../../../assets/images/books.svg";
import girl from "../../../assets/images/girl.svg";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import CustomButton from "../CustomButton/CustomButton";
import StyledBanner from "./Banner.styles";

const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <img className="books-img" src={books} alt="Books" />
      <img className="girl-img" src={girl} alt="The girl is reading" />
      <div className="title-container">
        <Title>Build your library with us</Title>
        <SubTitle>Buy two books and get one for free</SubTitle>
        <CustomButton marginTop="50px">Choose a book</CustomButton>
      </div>
    </StyledBanner>
  );
};

export default Banner;
