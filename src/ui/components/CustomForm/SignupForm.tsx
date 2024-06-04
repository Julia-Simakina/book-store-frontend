import { useFormik } from "formik";
import { updateAuthHeaders } from "../../../api/http/api";
import { signUp } from "../../../api/http/authApi";
import CustomButton from "../CustomButton/CustomButton";
import emailIcon from "../../../assets/icons/Mail.svg";
import hideIcon from "../../../assets/icons/Hide.svg";
import { useNavigate } from "react-router-dom";
import {
  createRepeatPasswordSchema,
  email,
  password,
} from "../../../utils/validation";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/MainSlice";
import { StyleForm, InputWrapper } from "./StyledForm";
import { AxiosError } from "axios";
import * as Yup from "yup";

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
    validationSchema: Yup.object().shape({
      password,
      repeatPassword: createRepeatPasswordSchema("password"),
      email,
    }),
    onSubmit: async (values) => {
      await handleSignUp(values);
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

      console.log("User created successfully:", createdUser);

      dispatch(setUser(createdUser.user));
      updateAuthHeaders();
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        formik.setFieldError(error.response?.data.path, errorMessage);
      }
      console.error(error);
    }
  };

  return (
    <StyleForm onSubmit={formik.handleSubmit} marginTop="60px">
      <fieldset className="auth__form-element">
        <div className="auth__form-container">
          <InputWrapper>
            <div
              className={`input-container ${
                formik.touched.email && formik.errors.email && "input-error"
              }`}
            >
              <img className="input-img" src={emailIcon} alt="icon" />
              <label
                className={`label ${
                  formik.touched.email && formik.errors.email && "label-error"
                }`}
                htmlFor="email"
              >
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
            <div
              className={`input-container ${
                formik.touched.password &&
                formik.errors.password &&
                "input-error"
              }`}
            >
              <img className="input-img" src={hideIcon} alt="icon" />
              <label
                className={`label ${
                  formik.touched.password &&
                  formik.errors.password &&
                  "label-error"
                }`}
                htmlFor="password"
              >
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
            <div
              className={`input-container ${
                formik.touched.repeatPassword &&
                formik.errors.repeatPassword &&
                "input-error"
              }`}
            >
              <img className="input-img" src={hideIcon} alt="icon" />
              <label
                className={`label ${
                  formik.touched.repeatPassword &&
                  formik.errors.repeatPassword &&
                  "label-error"
                }`}
                htmlFor="repeatPassword"
              >
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
        <CustomButton type="submit" marginTop="60px" width="166px">
          Sign Up
        </CustomButton>
      </div>
    </StyleForm>
  );
};

export default SignupForm;
