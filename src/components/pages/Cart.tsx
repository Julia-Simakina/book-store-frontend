import books from "../../images/books1.svg";
import styled from "styled-components";
import Title from "../Title";
import SubTitle from "../SubTitle";
import { Link } from "react-router-dom";
import Button from "../Button";

const Cart: React.FC = () => {
  return (
    <StyledPageContainer>
      <img src={books} alt="" />

      <TitleContainer>
        <Title>Your cart is empty</Title>
        <SubTitle>
          Add items to cart to make a purchase. Go to the catalogue no.
        </SubTitle>
        <div className="button-container">
          <Link to="/signin">
            <Button>Go to catalog</Button>
          </Link>
        </div>
      </TitleContainer>
    </StyledPageContainer>
  );
};

const StyledPageContainer = styled.main`
  display: flex;
  align-items: center;
  margin: 90px auto 55px;
  justify-content: center;
  gap: 109px;
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

export default Cart;
