import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import StyledMainWrapper from "./StyledMainWrapper";
import Title from "../Title";
import boyImg from "../../images/boy.svg";
import StyledPage from "./StyledPage";
import { useDispatch } from "react-redux";
import emailIcon from "../../images/Mail.svg";
import hideIcon from "../../images/Hide.svg";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../http/api";
import { setUser } from "../../store/UserSlice";
import CustomForm from "../CustomForm";
import CustomInput from "../CustomInput";
import { schemas } from "../validation";

type valuesType = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (values: valuesType) => {
    try {
      const newUser = {
        email: values.email,
        password: values.password,
      };

      const loginedUser = await signIn(newUser);

      localStorage.setItem("jwt", loginedUser.tokens.accessToken);
      // localStorage.setItem('currentUser', JSON.stringify(loginedUser.user));
      console.log("User logined successfully:", loginedUser);

      dispatch(setUser(loginedUser.user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <StyledPage>
      <StyledMainWrapper>
        <Header />
        <StyledPageContainer>
          <div>
            <Title>Log In</Title>
            <CustomForm
              validationSchema={schemas.signIn}
              initialValues={initialValues}
              onSubmit={handleSignIn}
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

export default SignIn;
