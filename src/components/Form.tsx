import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import styled from "styled-components";
import Button from "./Button";

type PropsType = {
  children: ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};
const AuthForm: React.FC<PropsType> = ({ children, onSubmit }) => {
  const { pathname } = useLocation();

  const isSignUp = pathname === "/signup";
  const isAuth = pathname === "/signup" || pathname === "/signin";
  const buttonText = isSignUp ? "Sing Up" : "Log In";

  return (
    <StyledAuthForm onSubmit={onSubmit}>
      <fieldset className="auth__form-element">
        <div className="auth__form-container">{children}</div>
      </fieldset>
      <div className="auth__submit-container">
        {isAuth && (
          <Button marginTop="60px" width="166px">
            {buttonText}
          </Button>
        )}
      </div>
    </StyledAuthForm>
  );
};

const StyledAuthForm = styled.form`
  width: 413px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .auth__form-element {
    margin: 0;
    padding: 0;
    border: none;
    display: flex;
    flex-direction: column;
  }

  .auth__form-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export default AuthForm;
