import styled from "styled-components";
import Title from "../Title";
import boyImg from "../../images/boy.svg";
import SignupForm from "../Form/SignupForm";

const SignUp: React.FC = () => {
  return (
    <StyledPageContainer>
      <div>
        <Title>Sign Up</Title>
        <SignupForm />
      </div>
      <img src={boyImg} alt='The boy is reading' className='background-image' />
    </StyledPageContainer>
  );
};

const StyledPageContainer = styled.main`
  display: flex;
  align-items: center;
  margin: 90px auto 55px;
  justify-content: space-between;

  .background-image {
    width: 612px;
  }
`;

export default SignUp;
