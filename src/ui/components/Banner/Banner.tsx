import books from "../../../assets/images/books.svg";
import girl from "../../../assets/images/girl.svg";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import CustomButton from "../CustomButton/CustomButton";
import StyledBanner from "./Banner.styles";

const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <img className='books-img' src={books} alt='Books' />
      <img className='girl-img' src={girl} alt='The girl is reading' />
      <div className='title-container'>
        <Title>Build your library with us</Title>
        <SubTitle>Buy two books and get one for free</SubTitle>
        <CustomButton marginTop='50px'>Choose a book</CustomButton>
      </div>
    </StyledBanner>
  );
};

// const StyledBanner = styled.section`
//   position: relative;

//   display: flex;
//   align-items: center;
//   max-width: 1280px;
//   min-height: 400px;
//   background-color: #f0f4ef;
//   margin: 40px auto;
//   border-radius: 16px;
//   z-index: 5;

//   .books-img {
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 542px;
//     z-index: -1;
//   }

//   .girl-img {
//     position: absolute;
//     right: 98px;
//     bottom: 0;
//     width: 406px;
//     z-index: -1;
//   }

//   .title-container {
//     display: flex;
//     flex-direction: column;
//     margin-left: 108px;
//   }
// `;

export default Banner;
