import books from "../../../../assets/images/books1.svg";
import Title from "../../../components/Title/Title";
import SubTitle from "../../../components/SubTitle/SubTitle";
import { Link } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";
import StyledEmptyCart from "./EmptyCart.styles";

const EmptyCart: React.FC = () => {
  return (
    <StyledEmptyCart>
      <img src={books} alt="Books" />
      <div className="title-container">
        <Title>Your cart is empty</Title>
        <SubTitle>
          Add items to cart to make a purchase. Go to the catalogue no.
        </SubTitle>
        <div className="button-container">
          <Link to="/signin">
            <CustomButton>Go to catalog</CustomButton>
          </Link>
        </div>
      </div>
    </StyledEmptyCart>
  );
};

export default EmptyCart;
