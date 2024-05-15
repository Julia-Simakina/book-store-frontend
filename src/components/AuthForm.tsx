import { useLocation } from "react-router-dom";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const AuthForm: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  const isSignUp = pathname === "/signup";

  const buttonText = isSignUp ? "Sing Up" : "Log In";

  return (
    <StyledAuthForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset className="auth__form-element">
        <div className="auth__form-container">{children}</div>
      </fieldset>
      <div className="auth__submit-container">
        <Button marginTop="60px" width="166px">
          {buttonText}
        </Button>
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
