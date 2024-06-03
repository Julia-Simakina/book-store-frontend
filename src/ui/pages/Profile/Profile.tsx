import CustomButton from "../../components/CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../store/MainSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UpdateUserInfoForm from "../../components/CustomForm/UpdateUserInfoForm";
import UpdatePasswordForm from "../../components/CustomForm/UpdatePasswordForm";
import Avatar from "./components/Avatar/Avatar";
import { useCurrentUser } from "../../../hooks";
import StyledProfileContainer from "./Profile.styles";

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
    <StyledProfileContainer>
      <Avatar />
      <div className='user-info'>
        <UpdateUserInfoForm />
        <UpdatePasswordForm />
        <CustomButton backgroundColor='#B9BAC3' marginTop='40px' onClick={handlelogOutUser}>
          Log out
        </CustomButton>
      </div>
    </StyledProfileContainer>
  );
};

export default Profile;
