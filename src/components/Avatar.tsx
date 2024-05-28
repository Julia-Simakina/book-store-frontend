import { useState, ChangeEvent, FormEvent } from "react";
import { uploadAvatar } from "../http/userApi";
import axios from "axios";
import { UserType } from "../types";

const Avatar = (props: { currentUser: UserType | null }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);

  const currentUser = {
    avatar: "",
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedAvatar(file);
  };

  const handleUpload = async (event: FormEvent) => {
    event.preventDefault();

    if (!selectedAvatar) {
      console.log("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", selectedAvatar);

    //  await uploadAvatar(formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload-avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      localStorage.setItem("avatar", response.data.imagePath);
      currentUser.avatar = `http://localhost:3000/${localStorage.getItem(
        "avatar"
      )}`;
      // console.log(`http://localhost:3000/${currentAvatar}`);

      console.log("Avatar uploaded successfully!", response.data);
    } catch (error) {
      console.error("Error uploading avatar", error);
    }
  };

  return (
    <div>
      <img
        // src={`http://localhost:3000/${localStorage.getItem("avatar")}`}
        src={(props.currentUser as any).avatar}
        alt="Current Avatar"
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Avatar</button>
    </div>
  );
};

export default Avatar;
