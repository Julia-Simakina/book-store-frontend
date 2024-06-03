import Title from "../../components/Title/Title";
import boyImg from "../../../assets/images/boy.svg";
import SigninForm from "../../components/CustomForm/SigninForm";
import StyledSignInContainer from "./SignIn.styles";

const SignIn: React.FC = () => {
  return (
    <StyledSignInContainer>
      <div>
        <Title>Log In</Title>
        <SigninForm />
      </div>
      <img src={boyImg} alt='The boy is reading' className='background-image' />
    </StyledSignInContainer>
  );
};

export default SignIn;
