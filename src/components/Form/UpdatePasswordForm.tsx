import { useFormik } from "formik";
import Button from "../Button";
import hideIcon from "../../images/Hide.svg";
import { schemas } from "../validation";
import {
  InputWrapper,
  StyleForm,
  EditButton,
  TitleWrapper,
} from "./StyledForm";
import { useState } from "react";
import { updateUser } from "../../http/userApi";
import { signIn } from "../../http/authApi";
import { AxiosError } from "axios";
import { useCurrentUser } from "../../ hooks";

type ValuePasswordType = {
  password: string;
  newpassword: string;
  repeatPassword: string;
};

const UpdatePasswordForm = () => {
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const currentUser = useCurrentUser();

  const formik = useFormik({
    initialValues: {
      password: "",
      newpassword: "",
      repeatPassword: "",
    },
    validationSchema: schemas.updatePassword,
    onSubmit: async (values) => {
      await handleSavePasswordChanges(values);
    },
  });

  const handleEditButtonExit = () => {
    formik.resetForm();
    setIsPasswordEditing(false);
  };

  const handleEditButtonClick = () => {
    setIsPasswordEditing(true);
  };

  const handleSavePasswordChanges = async (values: ValuePasswordType) => {
    try {
      const newPassword = {
        password: values.newpassword,
      };

      const checkUser = {
        email: currentUser.email || "",
        password: values.password,
      };

      await signIn(checkUser);

      const updatedUser = await updateUser(Number(currentUser.id), newPassword);
      console.log("User updated successfully:", updatedUser);

      values.password = "";
      values.newpassword = "";
      values.repeatPassword = "";

      setIsPasswordEditing(false);
    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        formik.setFieldError(error.response?.data.path, errorMessage);
      }
      console.error(error);
    }
  };

  return (
    <StyleForm onSubmit={formik.handleSubmit} width="522px">
      <TitleWrapper>
        <h2 className="info-title">Password</h2>
        {isPasswordEditing ? (
          <EditButton onClick={handleEditButtonExit} type="button">
            Cancel
          </EditButton>
        ) : (
          <EditButton onClick={handleEditButtonClick} type="button">
            Change password
          </EditButton>
        )}
      </TitleWrapper>
      <fieldset className="auth__form-element">
        <div className="auth__form-container">
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
                {isPasswordEditing ? "Old password" : "You Password"}
              </label>
              <input
                className="field"
                id="password"
                name="password"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={!isPasswordEditing ? "*******" : formik.values.password}
                disabled={!isPasswordEditing}
              />
            </div>
            {(formik.touched.password ||
              (formik.errors.password && formik.values.password)) && (
              <span className="error-massage ">{formik.errors.password}</span>
            )}
          </InputWrapper>
          {isPasswordEditing && (
            <>
              <InputWrapper>
                <div
                  className={`input-container ${
                    formik.touched.newpassword &&
                    formik.errors.newpassword &&
                    "input-error"
                  }`}
                >
                  <img className="input-img" src={hideIcon} alt="icon" />
                  <label
                    className={`label ${
                      formik.touched.newpassword &&
                      formik.errors.newpassword &&
                      "label-error"
                    }`}
                    htmlFor="newpassword"
                  >
                    New password
                  </label>
                  <input
                    className="field"
                    name="newpassword"
                    id="newpassword"
                    type="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.newpassword}
                  />
                </div>
                {(formik.touched.newpassword ||
                  (formik.errors.newpassword && formik.values.newpassword)) && (
                  <span className="error-massage ">
                    {formik.errors.newpassword}
                  </span>
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
                    Repeat password
                  </label>
                  <input
                    className="field"
                    name="repeatPassword"
                    id="repeatPassword"
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
            </>
          )}
        </div>
      </fieldset>
      <div className="auth__submit-container">
        {isPasswordEditing && (
          <Button type="submit" marginTop="30px" width="166px">
            Save
          </Button>
        )}
      </div>
    </StyleForm>
  );
};

export default UpdatePasswordForm;
