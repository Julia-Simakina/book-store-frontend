import Title from "../Title";
import SubTitle from "../SubTitle/SubTitle";
import CustomButton from "../CustomButton/CustomButton";
import castle from "../../assets/images/castle.svg";
import fairy from "../../assets/images/fairy.svg";
import { Link } from "react-router-dom";
import StyledAuthBanner from "./AuthBunner.styles";

const AuthBunner: React.FC = () => {
  return (
    <StyledAuthBanner>
      <img className="fairy-img" src={fairy} alt="Fairy" />
      <img className="castle-img" src={castle} alt="Castle" />
      <div className="title-container">
        <Title>Authorize now</Title>
        <SubTitle>
          Authorize now and discover the fabulous world of books
        </SubTitle>
        <div className="button-container">
          <Link to="/signin">
            <CustomButton width={"110px"}>Log In</CustomButton>
          </Link>
          <Link to="/signup">
            <CustomButton width={"110px"}>Sing Up</CustomButton>
          </Link>
        </div>
      </div>
    </StyledAuthBanner>
  );
};

export default AuthBunner;
