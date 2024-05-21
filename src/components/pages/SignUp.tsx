import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import StyledMainWrapper from "./StyledMainWrapper";
import Title from "../Title";
import boyImg from "../../images/boy.svg";
import StyledPage from "./StyledPage";
import emailIcon from "../../images/Mail.svg";
import hideIcon from "../../images/Hide.svg";
import { createUser } from "../../http/api";
import { useNavigate } from "react-router-dom";
import CustomForm from "../CustomForm";
import CustomInput from "../CustomInput";
import { schemas } from "../validation";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  type ValueType = {
    email: string;
    password: string;
    repeatPassword: string;
  };

  const initialValues = {
    email: "",
    password: "",
    repeatPassword: "",
  };

  const handleSignUp = async (values: ValueType) => {
    if (values.password !== values.repeatPassword) return;
    try {
      const newUser = {
        email: values.email,
        password: values.password,
      };

      const createdUser = await createUser(newUser);
      console.log("User created successfully:", createdUser);
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledPage>
      <StyledMainWrapper>
        <Header />
        <StyledPageContainer>
          <div>
            <Title>Sign Up</Title>
            <CustomForm
              validationSchema={schemas.signUp}
              initialValues={initialValues}
              onSubmit={handleSignUp}
            >
              <CustomInput
                name="email"
                labelTitle="Email"
                id="email"
                htmlFor="email"
                src={emailIcon}
                hintTitle="Enter your email"
              />
              <CustomInput
                name="password"
                labelTitle="Password"
                id="password"
                htmlFor="password"
                src={hideIcon}
                hintTitle="Enter your password"
              />
              <CustomInput
                name="repeatPassword"
                labelTitle="Password replay"
                id="repeatPassword"
                htmlFor="repeatPassword"
                src={hideIcon}
                hintTitle="Repeat your password without errors"
              />
            </CustomForm>
          </div>

          <img
            src={boyImg}
            alt="The boy is reading"
            className="background-image"
          />
        </StyledPageContainer>
      </StyledMainWrapper>
      <Footer />
    </StyledPage>
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
