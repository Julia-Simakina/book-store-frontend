import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer";
import StyledPage from "./StyledPage";
import StyledMainWrapper from "./StyledMainWrapper";
import profilePhoto from "../../images/unsplash_WNoLnJo7tS8.png";
import channgePhotoIcon from "../../images/button_photo.svg";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { logOutUser } from "../../store/MainSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UpdateUserInfoForm from "../UpdateUserInfoForm";
import UpdatePasswordForm from "../UpdatePasswordForm";

const Profile: React.FC = () => {
  const currentUser = useAppSelector((state) => state.main.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);

  const dispatch = useDispatch();

  const handlelogOutUser = () => {
    dispatch(logOutUser(currentUser));
    localStorage.removeItem("jwt");
    navigate("/");
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
            <UpdateUserInfoForm />
            <UpdatePasswordForm />
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
  align-items: start;
  margin: 90px auto 55px;
  gap: 128px;
  /* justify-content: space-between; */
`;

const UserInfo = styled.div`
  width: 522px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  .info-title {
    font-size: 20px;
    line-height: 21px;
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
