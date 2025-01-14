import { AxiosResponse } from "axios";
import { UserType } from "../../types";
import api from "./api";

const pathPrefix = "user";

export const uploadAvatar = async (formData: string): Promise<UserType> => {
  try {
    const response: AxiosResponse<UserType> = await api.post(
      `${pathPrefix}/upload-avatar`,
      {
        image: formData,
      }
    );
    console.log("Avatar uploaded successfully!", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading avatar", error);
    throw error;
  }
};

export const getMe = async (): Promise<UserType> => {
  try {
    const response: AxiosResponse<UserType> = await api.get(
      `${pathPrefix}/getme`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching user data: ", error);
    throw error;
  }
};

export const updateUser = async (
  userId: number,
  userData: Partial<UserType>
): Promise<UserType> => {
  try {
    const response: AxiosResponse<UserType> = await api.put(
      `${pathPrefix}/${userId}`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при обновлении данных пользователя по ID:", error);
    throw error;
  }
};

export const getUserById = async (userId: number): Promise<UserType> => {
  try {
    const response: AxiosResponse<UserType> = await api.get(
      `${pathPrefix}/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data by ID: ", error);
    throw error;
  }
};

export const getUsers = async (): Promise<UserType[]> => {
  try {
    const response: AxiosResponse<UserType[]> = await api.get(
      `${pathPrefix}/all`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users data: ", error);
    throw error;
  }
};
