import { useFormik } from "formik";
import Button from "../Button";
import emailIcon from "../../images/Mail.svg";
import hideIcon from "../../images/Hide.svg";
import { useNavigate } from "react-router-dom";
import { schemas } from "../validation";
import { useDispatch } from "react-redux";
import { updateAuthHeaders } from "../../http/api";
import { signIn } from "../../http/authApi";
import { setUser } from "../../store/MainSlice";
import { StyleForm, InputWrapper } from "./StyledForm";
import { AxiosError } from "axios";

type ValueType = {
  email: string;
  password: string;
};

const SigninForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schemas.signIn,
    onSubmit: async (values) => {
      await handleSignIn(values);
    },
  });

  const handleSignIn = async (values: ValueType) => {
    try {
      const newUser = {
        email: values.email,
        password: values.password,
      };

      const loginedUser = await signIn(newUser);

      console.log("User logined successfully:", loginedUser);

      dispatch(setUser(loginedUser.user));
      updateAuthHeaders();
      navigate("/");
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;

        formik.setFieldError(
          error.response?.data.path ?? "password",
          errorMessage
        );
      }
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
        </div>
      </fieldset>
      <div className="auth__submit-container">
        <Button type="submit" marginTop="60px" width="166px">
          Log In
        </Button>
      </div>
    </StyleForm>
  );
};

export default SigninForm;
