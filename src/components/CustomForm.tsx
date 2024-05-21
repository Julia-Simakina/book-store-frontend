import * as React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReactNode } from "react";
import { Formik, Form } from "formik";

import Button from "./Button";

type PropsType = {
  children: ReactNode;
  initialValues: MyFormValues;
  onSubmit: any;
  validationSchema?: any; //<<<<<<
};

export type MyFormValues = {
  email?: string;
  password?: string;
  repeatPassword?: string;
  name?: string;
};

const CustomForm: React.FC<PropsType> = (props) => {
  const { pathname } = useLocation();

  const isSignUp = pathname === "/signup";
  const isAuth = pathname === "/signup" || pathname === "/signin";
  const buttonText = isSignUp ? "Sing Up" : "Log In";

  return (
    <div>
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        onSubmit={props.onSubmit}
      >
        <StyleForm>
          <fieldset className="auth__form-element">
            <div className="auth__form-container">{props.children}</div>
          </fieldset>
          <div className="auth__submit-container">
            {isAuth && (
              <Button marginTop="60px" width="166px">
                {buttonText}
              </Button>
            )}
          </div>
        </StyleForm>
      </Formik>
    </div>
  );
};

const StyleForm = styled(Form)`
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

export default CustomForm;
