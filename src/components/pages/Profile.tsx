import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer";
import StyledPage from "./StyledPage";
import StyledMainWrapper from "./StyledMainWrapper";
import profilePhoto from "../../images/unsplash_WNoLnJo7tS8.png";
import channgePhotoIcon from "../../images/button_photo.svg";
import profileIcon from "../../images/User profile.svg";
import emailIcon from "../../images/Mail.svg";
import CustomForm from "../CustomForm";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { logOutUser } from "../../store/UserSlice";
import CustomInput from "../CustomInput";
import { useEffect, useState } from "react";
import { updateUser, comparePassword } from "../../http/api";
import hideIcon from "../../images/Hide.svg";
import AvatarUpload from "../Avatar";

const Profile: React.FC = () => {
  const [isUserInfoEditing, setIsUserInfoEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const currentUser = useAppSelector((state) => state.main.currentUser);
  // const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);

  const dispatch = useDispatch();

  const handlelogOutUser = () => {
    dispatch(logOutUser(currentUser));
    localStorage.removeItem("jwt");
    localStorage.removeItem("currentUser");
  };

  const initialValues = {
    name: currentUser?.name ?? "",
    email: currentUser?.email ?? "",
  };

  const initialValuesOldPassvord = {
    password: "",
  };

  const handleToggleUserInfoEditing = () => {
    setIsUserInfoEditing((prevState) => !prevState);
  };

  const handleTogglePasswordEditing = () => {
    setIsPasswordEditing((prevState) => !prevState);
  };

  type ValueInfoType = {
    name?: string;
    email: string;
  };

  type ValuePasswordType = {
    oldpassword: string;
    password: string;
    repeatPassword: string;
  };

  const handleSaveUserInfoChanges = async (values: ValueInfoType) => {
    try {
      if (!currentUser) return;

      const updatedUserInfo = {
        name: values.name || "",
        email: values.email,
      };

      const updatedUser = await updateUser(
        Number(currentUser.id),
        updatedUserInfo
      );
      console.log("User updated successfully:", updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setIsUserInfoEditing(false);

      // navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSavePasswordChanges = async (values: ValuePasswordType) => {
    try {
      if (!currentUser) throw Error("User not found");

      const newPassword = {
        password: values.password,
      };

      const oldPassword = {
        password: values.oldpassword,
      };

      await comparePassword(Number(currentUser.id), oldPassword);

      if (values.password !== values.repeatPassword) {
        throw new Error("Repeat your password without errors");
      }

      const updatedUser = await updateUser(Number(currentUser.id), newPassword);
      console.log("User updated successfully:", updatedUser);

      values.oldpassword = "";
      values.password = "";
      values.repeatPassword = "";

      setIsPasswordEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledPage>
      <StyledMainWrapper>
        <Header />
        <StyledPageContainer>
          <PhotoContainer>
            <ProfilePhoto src={profilePhoto} alt="Profile photo" />
            <img src={channgePhotoIcon} alt="" className="channge-photo-icon" />
          </PhotoContainer>

          <AvatarUpload imageUrl={hideIcon} />
          <UserInfo>
            <div>
              <h2 className="info-title">Personal information</h2>

              <CustomForm
                initialValues={initialValues}
                onSubmit={handleSaveUserInfoChanges}
              >
                <CustomInput
                  name="name"
                  labelTitle="Your name"
                  id="name"
                  htmlFor="name"
                  src={profileIcon}
                  hintTitle="Enter your name"
                  disabled={!isUserInfoEditing}
                />
                <CustomInput
                  name="email"
                  labelTitle="Email"
                  id="email"
                  htmlFor="email"
                  src={emailIcon}
                  hintTitle="Enter your email"
                  disabled={!isUserInfoEditing}
                />
                {isUserInfoEditing && (
                  <Button backgroundColor="#062290">Save</Button>
                )}
              </CustomForm>

              {!isUserInfoEditing && (
                <Button
                  backgroundColor="#062290"
                  onClick={handleToggleUserInfoEditing}
                >
                  Edit
                </Button>
              )}
            </div>

            <div>
              <h2 className="info-title">Password</h2>
              <CustomForm
                initialValues={initialValuesOldPassvord}
                onSubmit={handleSavePasswordChanges}
              >
                <CustomInput
                  name="oldpassword"
                  labelTitle={
                    isPasswordEditing ? "Old password" : "You Password"
                  }
                  id="oldpassword"
                  htmlFor="oldpassword"
                  src={hideIcon}
                  hintTitle="Enter old password"
                  disabled={!isPasswordEditing}
                />
                {isPasswordEditing && (
                  <>
                    <CustomInput
                      name="password"
                      labelTitle="New password"
                      id="password"
                      htmlFor="password"
                      src={hideIcon}
                      hintTitle="Enter new password"
                      disabled={!isPasswordEditing}
                    />
                    <CustomInput
                      name="repeatPassword"
                      labelTitle="Repeat password"
                      id="repeatPassword"
                      htmlFor="repeatPassword"
                      src={hideIcon}
                      hintTitle="Repeat new password"
                      disabled={!isPasswordEditing}
                    />
                  </>
                )}

                {isPasswordEditing && (
                  <Button backgroundColor="#062290">Save</Button>
                )}
              </CustomForm>

              {!isPasswordEditing && (
                <Button
                  backgroundColor="#062290"
                  onClick={handleTogglePasswordEditing}
                >
                  Edit
                </Button>
              )}
            </div>

            <Button
              backgroundColor="grey"
              marginTop="40px"
              onClick={handlelogOutUser}
            >
              Log out
            </Button>
          </UserInfo>
        </StyledPageContainer>
      </StyledMainWrapper>
      <Footer />
    </StyledPage>
  );
};

const StyledPageContainer = styled.main`
  display: flex;
  align-items: center;
  margin: 90px auto 55px;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  width: 522px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  .info-title {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 30px;
    color: #0d1821;
  }

  .info-description {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const PhotoContainer = styled.div`
  width: 305px;
  position: relative;
  cursor: pointer;

  &:hover .channge-photo-icon {
    opacity: 1;
  }
  .channge-photo-icon {
    transition: all 0.2s ease;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    opacity: 0.5;
  }
`;

const ProfilePhoto = styled.img`
  width: 305px;
  height: 305px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 16px;
`;

export default Profile;
