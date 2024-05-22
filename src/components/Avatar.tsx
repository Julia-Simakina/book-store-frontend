import React, { useState } from "react";
import axios from "axios";

interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  const [newImageUrl, setNewImageUrl] = useState("");

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setNewImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <div>
      <img src={newImageUrl || imageUrl} alt="Avatar" />
      <input
        type="file"
        onChange={(e) => {
          if (!e.target.files) return;
          handleUpload(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default Avatar;
