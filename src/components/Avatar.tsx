import { useState, ChangeEvent, FormEvent } from "react";
import { uploadAvatar } from "../http/userApi";
import { UserType } from "../types";

const Avatar = (props: { currentUser: UserType | null }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);

  const currentUser = {
    avatar: "",
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files ? event.target.files[0] : null;

      if (file) {
        setSelectedAvatar(file);
        const reader = new FileReader();
        reader.onloadend = async () => {
          setPreviewAvatar(reader.result as string);
          const avatarData = await uploadAvatar(reader.result as string);

          console.log("avatarData >>>", avatarData);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewAvatar(null);
      }

      if (!selectedAvatar) {
        console.log("Please select an image to upload");
        return;
      }
    } catch (error) {
      console.error("Error uploading avatar", error);
    }
  };

  return (
    <div>
      <img
        src={previewAvatar || ""}
        // src={(props.currentUser as any).avatar}
        alt="Current Avatar"
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {/* <button onClick={handleUpload}>Upload Avatar</button> */}
    </div>
  );
};

export default Avatar;
