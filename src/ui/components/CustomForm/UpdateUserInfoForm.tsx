import { useFormik } from "formik";
import CustomButton from "../CustomButton/CustomButton";
import emailIcon from "../../../assets/icons/Mail.svg";
import { email } from "../../../utils/validation";
import {
  InputWrapper,
  StyleForm,
  EditButton,
  TitleWrapper,
} from "./StyledForm";
import { useState } from "react";
import { updateUser } from "../../../api/http/userApi";
import { UserType } from "../../../types";
import { useAppDispatch } from "../../../store/store";
import { setUser } from "../../../store/MainSlice";
import userIcon from "../../../assets/icons/User-profile.svg";
import { AxiosError } from "axios";
import { useCurrentUser } from "../../../hooks";
import * as Yup from "yup";

type ValueInfoType = {
  name?: string;
  email: string;
};

const name = Yup.string().min(2).max(40);

const UpdateUserInfoForm = () => {
  const dispatch = useAppDispatch();
  const [isUserInfoEditing, setIsUserInfoEditing] = useState(false);
  const currentUser = useCurrentUser();

  const formik = useFormik({
    initialValues: {
      name: currentUser.name ?? "",
      email: currentUser.email ?? "",
    },
    validationSchema: Yup.object().shape({
      name,
      email,
    }),
    onSubmit: async (values) => {
      await handleSaveUserInfoChanges(values);
    },
  });

  const handleEditButtonClick = () => {
    setIsUserInfoEditing(true);
  };

  const handleEditButtonExit = () => {
    formik.resetForm({
      values: {
        name: currentUser.name || "",
        email: currentUser.email,
      },
    });
    setIsUserInfoEditing(false);
  };

  const handleSaveUserInfoChanges = async (
    values: ValueInfoType
  ): Promise<void | UserType> => {
    try {
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
    } catch (error) {
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
            <div
              className={`input-container ${
                formik.touched.name && formik.errors.name && "input-error"
              }`}
            >
              <img className="input-img" src={userIcon} alt="icon" />
              <label
                className={`label ${
                  formik.touched.name && formik.errors.name && "label-error"
                }`}
                htmlFor="name"
              >
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
          <CustomButton type="submit" marginTop="30px" width="166px">
            Save
          </CustomButton>
        )}
      </div>
    </StyleForm>
  );
};

export default UpdateUserInfoForm;
