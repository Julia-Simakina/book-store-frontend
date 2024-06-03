import Title from "../../components/Title/Title";
import boyImg from "../../../assets/images/boy.svg";
import SignupForm from "../../components/CustomForm/SignupForm";
import StyledSignUpContainer from "./SignUp.styles";

const SignUp: React.FC = () => {
  return (
    <StyledSignUpContainer>
      <div>
        <Title>Sign Up</Title>
        <SignupForm />
      </div>
      <img src={boyImg} alt='The boy is reading' className='background-image' />
    </StyledSignUpContainer>
  );
};

export default SignUp;
