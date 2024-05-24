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
import { useAppSelector } from "../../store/store";
import { signIn, updateUser } from "../../http/api";

type ValuePasswordType = {
  oldpassword: string;
  password: string;
  repeatPassword: string;
};

const UpdatePasswordForm = () => {
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const currentUser = useAppSelector((state) => state.main.currentUser);

  const formik = useFormik({
    initialValues: {
      oldpassword: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: schemas.updatePassword,
    onSubmit: (values) => {
      handleSavePasswordChanges(values);
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
      if (!currentUser) throw Error("User not found");

      const newPassword = {
        password: values.password,
      };

      const checkUser = {
        email: currentUser.email || "",
        password: values.oldpassword,
      };

      await signIn(checkUser);

      const updatedUser = await updateUser(Number(currentUser.id), newPassword);
      console.log("User updated successfully:", updatedUser);

      values.oldpassword = "";
      values.password = "";
      values.repeatPassword = "";

      setIsPasswordEditing(false);
    } catch (error: any) {
      console.error(error);
      const errorMessage = error.response.data.message;
      formik.setFieldError("repeatPassword", errorMessage);
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
            <div className="input-container">
              <img className="input-img" src={hideIcon} alt="icon" />
              <label className="label" htmlFor="name">
                {isPasswordEditing ? "Old password" : "You Password"}
              </label>
              <input
                className="field"
                id="oldpassword"
                name="oldpassword"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={
                  !isPasswordEditing ? "*******" : formik.values.oldpassword
                }
                disabled={!isPasswordEditing}
              />
            </div>
            {(formik.touched.oldpassword ||
              (formik.errors.oldpassword && formik.values.oldpassword)) && (
              <span className="error-massage ">
                {formik.errors.oldpassword}
              </span>
            )}
          </InputWrapper>
          {isPasswordEditing && (
            <>
              <InputWrapper>
                <div className="input-container">
                  <img className="input-img" src={hideIcon} alt="icon" />
                  <label className="label" htmlFor="password">
                    New password
                  </label>
                  <input
                    className="field"
                    name="password"
                    id="password"
                    type="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                {(formik.touched.password ||
                  (formik.errors.password && formik.values.password)) && (
                  <span className="error-massage ">
                    {formik.errors.password}
                  </span>
                )}
              </InputWrapper>
              <InputWrapper>
                <div className="input-container">
                  <img className="input-img" src={hideIcon} alt="icon" />
                  <label className="label" htmlFor="repeatPassword">
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
