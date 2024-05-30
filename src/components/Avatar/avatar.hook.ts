import { ChangeEvent } from "react";
import { useCurrentUser } from "../../ hooks";
import { useAppDispatch } from "../../store/store";
import { uploadAvatar } from "../../http/userApi";
import { setUser } from "../../store/MainSlice";
import defaultUserPhoto from "../../images/default-user-photo.svg";

export const useAvatar = () => {
  const dispatch = useAppDispatch();
  const currentUser = useCurrentUser();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files ? event.target.files[0] : null;
      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.onloadend = async () => {
        const userWithNewAvatar = await uploadAvatar(reader.result as string);
        dispatch(setUser(userWithNewAvatar));
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error uploading avatar", error);
    }
  };

  return {
    avatar: currentUser.avatar || defaultUserPhoto,
    handleFileChange,
  };
};
