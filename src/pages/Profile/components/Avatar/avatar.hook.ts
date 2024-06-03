import { ChangeEvent } from "react";
import { useCurrentUser } from "../../../../ hooks";
import { useAppDispatch } from "../../../../store/store";
import { uploadAvatar } from "../../../../api/http/userApi";
import { setUser } from "../../../../store/MainSlice";
import defaultUserPhoto from "../../../../assets/images/default-user-photo.svg";

const validImageExtensions = ["jpeg", "jpg", "png", "gif"];

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
        const result = reader.result as string;

        const bs64payload = result?.split("image/")[1];

        const extension = bs64payload.split(";")[0];

        if (!validImageExtensions.includes(extension)) {
          return console.error("Incorrect extension");
        }

        const userWithNewAvatar = await uploadAvatar(result);
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
