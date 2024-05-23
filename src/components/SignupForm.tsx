import React from "react";
import { useFormik } from "formik";
import { signUp } from "../http/api";
import Button from "./Button";
import emailIcon from "../images/Mail.svg";
import hideIcon from "../images/Hide.svg";
import { useNavigate } from "react-router-dom";
import { schemas } from "./validation";
import { useDispatch } from "react-redux";
import { setUser } from "../store/MainSlice";
import { StyleForm, InputWrapper } from "./Form/StyledForm";

type ValueType = {
  email: string;
  password: string;
  repeatPassword: string;
};

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: schemas.signUp,
    onSubmit: (values) => {
      handleSignUp(values);
    },
  });

  const handleSignUp = async (values: ValueType) => {
    if (values.password !== values.repeatPassword) return;
    try {
      const newUser = {
        email: values.email,
        password: values.password,
      };

      const createdUser = await signUp(newUser);

      localStorage.setItem("jwt", createdUser.tokens.accessToken);
      console.log("User created successfully:", createdUser);

      dispatch(setUser(createdUser.user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyleForm onSubmit={formik.handleSubmit} marginTop="60px">
      <fieldset className="auth__form-element">
        <div className="auth__form-container">
          <InputWrapper>
            <div className="input-container">
              <img className="input-img" src={emailIcon} alt="icon" />
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="field"
                name="email"
                id="email"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            {(formik.touched.email ||
              (formik.errors.email && formik.values.email)) && (
              <span className="error-massage ">{formik.errors.email}</span>
            )}
          </InputWrapper>
          <InputWrapper>
            <div className="input-container">
              <img className="input-img" src={hideIcon} alt="icon" />
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className="field"
                id="password"
                name="password"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            {(formik.touched.password ||
              (formik.errors.password && formik.values.password)) && (
              <span className="error-massage ">{formik.errors.password}</span>
            )}
          </InputWrapper>
          <InputWrapper>
            <div className="input-container">
              <img className="input-img" src={hideIcon} alt="icon" />
              <label className="label" htmlFor="repeatPassword">
                Replay password
              </label>
              <input
                className="field"
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
              />
            </div>
            {(formik.touched.repeatPassword ||
              (formik.errors.repeatPassword &&
                formik.values.repeatPassword)) && (
              <span className="error-massage ">
                {formik.errors.repeatPassword}
              </span>
            )}
          </InputWrapper>
        </div>
      </fieldset>
      <div className="auth__submit-container">
        <Button type="submit" marginTop="60px" width="166px">
          Sign Up
        </Button>
      </div>
    </StyleForm>
  );
};

export default SignupForm;
