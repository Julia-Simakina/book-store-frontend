import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer";
import StyledPage from "./StyledPage";
import StyledMainWrapper from "./StyledMainWrapper";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/MainSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UpdateUserInfoForm from "../Form/UpdateUserInfoForm";
import UpdatePasswordForm from "../Form/UpdatePasswordForm";
import Avatar from "../Avatar/Avatar";
import { useCurrentUser } from "../../ hooks";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useCurrentUser();

  useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);

  const handlelogOutUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    // <StyledPage>
    //   <StyledMainWrapper>
    //     <Header />
    <StyledPageContainer>
      <Avatar />
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
    //   </StyledMainWrapper>
    //   <Footer />
    // </StyledPage>
  );
};

const StyledPageContainer = styled.main`
  display: flex;
  align-items: start;
  margin: 90px auto 55px;
  gap: 128px;
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

// const PhotoContainer = styled.div`
//   width: 305px;
//   position: relative;
//   cursor: pointer;

//   &:hover .channge-photo-icon {
//     opacity: 1;
//   }
//   .channge-photo-icon {
//     transition: all 0.2s ease;
//     position: absolute;
//     bottom: 20px;
//     right: 20px;
//     width: 48px;
//     height: 48px;
//     opacity: 0.5;
//   }
// `;

// const ProfilePhoto = styled.img`
//   width: 305px;
//   height: 305px;
//   object-fit: cover;
//   overflow: hidden;
//   border-radius: 16px;
// `;

export default Profile;
