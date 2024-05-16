import { useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer";
import StyledPage from "./StyledPage";
import StyledMainWrapper from "./StyledMainWrapper ";
import profilePhoto from "../../images/unsplash_WNoLnJo7tS8.png";
import channgePhotoIcon from "../../images/button_photo.svg";
import Input from "../Input";
import profileIcon from "../../images/User profile.svg";
import emailIcon from "../../images/Mail.svg";
import Form from "../Form";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { logOutCurrentUser } from "../../store/UserSlice";

const Profile: React.FC = () => {
  const myUser = useAppSelector((state) => state.user.currentUser);
  const [userName, setUserName] = useState("");

  const handleUserNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserName(event.target.value);
  };
  const dispatch = useDispatch();

  const handlelogOutUser = () => {
    dispatch(logOutCurrentUser(myUser));
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

          <UserInfo>
            <h2 className="info-title">Personal information</h2>

            <Form>
              <Input
                src={profileIcon}
                id="user-name"
                type="text"
                value={userName}
                onChange={handleUserNameInputChange}
                inputTitle="Your name"
              />
              <Input
                src={emailIcon}
                id="user-name"
                type="text"
                value={userName}
                onChange={handleUserNameInputChange}
                inputTitle="Your name"
              />
            </Form>
            <Button marginTop="40px" onClick={handlelogOutUser}>
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
