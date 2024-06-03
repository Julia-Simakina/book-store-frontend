import channgePhotoIcon from "../../../../../assets/icons/button_photo.svg";
import { useAvatar } from "./avatar.hook";
import PhotoContainer from "./Avatar.styles";

const Avatar = () => {
  const { avatar, handleFileChange } = useAvatar();

  return (
    <PhotoContainer>
      <label>
        <img className='profile-photo' src={avatar} alt='Profile avatar' />
        <img src={channgePhotoIcon} alt='' className='channge-photo-icon' />
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          className='channge-photo-button'
        />
      </label>
    </PhotoContainer>
  );
};

export default Avatar;
