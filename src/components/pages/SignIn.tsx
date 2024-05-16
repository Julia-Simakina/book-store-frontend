import { useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import StyledMainWrapper from "./StyledMainWrapper ";
import Title from "../Title";
import Form from "../Form";
import boyImg from "../../images/boy.svg";
import Input from "../Input";
import StyledPage from "./StyledPage";
import { setCurrentUser } from "../../store/UserSlice";
import { useDispatch } from "react-redux";
import hardCurrentUser from "../../store/hardCurrentUser";
import emailIcon from "../../images/Mail.svg";
import hideIcon from "../../images/Hide.svg";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();

  const currentUser = hardCurrentUser;

  const setUser = () => {
    dispatch(setCurrentUser(currentUser));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser();
    navigate(redirectTo ? redirectTo : "/");
  };

  return (
    <StyledPage>
      <StyledMainWrapper>
        <Header />
        <StyledPageContainer>
          <div>
            <Title>Log In</Title>
            <Form onSubmit={handleSubmit}>
              <Input
                src={emailIcon}
                type="email"
                id="email"
                value={email}
                onChange={handleEmailInputChange}
                inputTitle="Email"
                hintTitle="Enter your email"
              />
              <Input
                src={hideIcon}
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordInputChange}
                inputTitle="Password"
                hintTitle="Enter your password"
              />
            </Form>
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
