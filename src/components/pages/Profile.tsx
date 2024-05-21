import Header from '../Header';
import styled from 'styled-components';
import Footer from '../Footer';
import StyledPage from './StyledPage';
import StyledMainWrapper from './StyledMainWrapper';
import profilePhoto from '../../images/unsplash_WNoLnJo7tS8.png';
import channgePhotoIcon from '../../images/button_photo.svg';
import profileIcon from '../../images/User profile.svg';
import emailIcon from '../../images/Mail.svg';
import CustomForm from '../CustomForm';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/store';
import { logOutUser } from '../../store/UserSlice';
import CustomInput from '../CustomInput';
import { useState } from 'react';
import { updateUser } from '../../http/api';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  console.log('currentUser', currentUser?.id);
  const dispatch = useDispatch();

  const handlelogOutUser = () => {
    dispatch(logOutUser(currentUser));
    localStorage.removeItem('jwt');
  };

  const initialValues = {
    userName: '',
    email: currentUser?.email ?? ''
  };

  const handleToggleEditing = () => {
    setIsEditing(prevState => !prevState);
  };

  type ValueType = {
    email: string;
  };

  const handleSaveChanges = async (values: ValueType) => {
    try {
      if (!currentUser) return;

      const updatedUserInfo = {
        email: values.email
      };

      const updatedUser = await updateUser(Number(currentUser.id), updatedUserInfo);
      console.log('User updated successfully:', updatedUser);
      setIsEditing(false);

      // navigate("/signin");
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
            <ProfilePhoto src={profilePhoto} alt='Profile photo' />
            <img src={channgePhotoIcon} alt='' className='channge-photo-icon' />
          </PhotoContainer>

          <UserInfo>
            <h2 className='info-title'>Personal information</h2>

            <CustomForm initialValues={initialValues} onSubmit={handleSaveChanges}>
              <CustomInput
                name='userName'
                labelTitle='Your name'
                id='userName'
                htmlFor='email'
                src={profileIcon}
                hintTitle='Enter your name'
                disabled={!isEditing}
              />
              <CustomInput
                name='email'
                labelTitle='Email'
                id='email'
                htmlFor='email'
                src={emailIcon}
                hintTitle='Enter your email'
                disabled={!isEditing}
              />
              {isEditing && <Button backgroundColor='#062290'>Save</Button>}
            </CustomForm>

            {!isEditing && (
              <Button backgroundColor='#062290' onClick={handleToggleEditing}>
                Edit
              </Button>
            )}

            <Button backgroundColor='grey' marginTop='40px' onClick={handlelogOutUser}>
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
