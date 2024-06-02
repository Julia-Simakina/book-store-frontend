import styled from "styled-components";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Button from "./Button";
import castle from "../images/castle.svg";
import fairy from "../images/fairy.svg";
import { Link } from "react-router-dom";

const AuthBunner: React.FC = () => {
  return (
    <StyledAuthBanner>
      <img className='fairy-img' src={fairy} alt='Fairy' />
      <img className='castle-img' src={castle} alt='Castle' />
      <TitleContainer>
        <Title>Authorize now</Title>
        <SubTitle>Authorize now and discover the fabulous world of books</SubTitle>
        <div className='button-container'>
          <Link to='/signin'>
            <Button width={"110px"}>Log In</Button>
          </Link>
          <Link to='/signup'>
            <Button width={"110px"}>Sing Up</Button>
          </Link>
        </div>
      </TitleContainer>
    </StyledAuthBanner>
  );
};

const StyledAuthBanner = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  max-width: 1280px;
  min-height: 400px;
  background-color: #f0f4ef;
  margin: 80px auto;
  border-radius: 16px;
  z-index: 5;

  .fairy-img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 478px;
    z-index: -1;
  }

  .castle-img {
    position: absolute;
    left: 108px;
    bottom: 0;
    width: 521px;
    z-index: -1;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 130px;
  width: 415px;

  .button-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`;

export default AuthBunner;
