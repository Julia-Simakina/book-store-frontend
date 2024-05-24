import { useFormik } from "formik";
import Button from "../Button";
import emailIcon from "../../images/Mail.svg";
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
import { updateUser } from "../../http/api";
import { UserType } from "../../types";
import { useAppDispatch } from "../../store/store";
import { setUser } from "../../store/MainSlice";

type ValueInfoType = {
  name?: string;
  email: string;
};

const UpdateUserInfoForm = () => {
  const dispatch = useAppDispatch();
  const [isUserInfoEditing, setIsUserInfoEditing] = useState(false);
  const currentUser = useAppSelector((state) => state.main.currentUser);

  const formik = useFormik({
    initialValues: {
      name: currentUser?.name ?? "",
      email: currentUser?.email ?? "",
    },
    validationSchema: schemas.updateUserInfo,
    onSubmit: async (values) => {
      await handleSaveUserInfoChanges(values);
    },
  });

  const handleEditButtonClick = () => {
    setIsUserInfoEditing(true);
  };

  const handleEditButtonExit = () => {
    formik.resetForm();
    setIsUserInfoEditing(false);
  };

  const handleSaveUserInfoChanges = async (
    values: ValueInfoType
  ): Promise<void | UserType> => {
    try {
      if (!currentUser) return;

      const updatedUserInfo = {
        name: values.name || "",
        email: values.email,
      };

      const currentUserData = {
        name: currentUser.name,
        email: currentUser.email,
      };

      if (JSON.stringify(updatedUserInfo) === JSON.stringify(currentUserData)) {
        return setIsUserInfoEditing(false);
      }

      const updatedUser = await updateUser(currentUser.id, updatedUserInfo);

      dispatch(setUser(updatedUser));

      console.log("User updated successfully:", updatedUser);

      setIsUserInfoEditing(false);
    } catch (error: any) {
      console.error(error);
      const errorMessage = error.response.data.message;
      formik.setFieldError("email", errorMessage);
    }
  };

  return (
    <StyleForm onSubmit={formik.handleSubmit} width="522px">
      <TitleWrapper>
        <h2 className="info-title">Personal information</h2>
        {isUserInfoEditing ? (
          <EditButton onClick={handleEditButtonExit} type="button">
            Cancel
          </EditButton>
        ) : (
          <EditButton onClick={handleEditButtonClick} type="button">
            Change information
          </EditButton>
        )}
      </TitleWrapper>
      <fieldset className="auth__form-element">
        <div className="auth__form-container">
          <InputWrapper>
            <div className="input-container">
              <img className="input-img" src={hideIcon} alt="icon" />
              <label className="label" htmlFor="name">
                Your name
              </label>
              <input
                className="field"
                id="name"
                name="name"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                disabled={!isUserInfoEditing}
              />
            </div>
            {(formik.touched.name ||
              (formik.errors.name && formik.values.name)) && (
              <span className="error-massage ">{formik.errors.name}</span>
            )}
          </InputWrapper>
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
                disabled={!isUserInfoEditing}
              />
            </div>
            {(formik.touched.email ||
              (formik.errors.email && formik.values.email)) && (
              <span className="error-massage ">{formik.errors.email}</span>
            )}
          </InputWrapper>
        </div>
      </fieldset>
      <div className="auth__submit-container">
        {isUserInfoEditing && (
          <Button type="submit" marginTop="30px" width="166px">
            Save
          </Button>
        )}
      </div>
    </StyleForm>
  );
};

export default UpdateUserInfoForm;
