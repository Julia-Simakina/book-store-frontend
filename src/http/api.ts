import axios, { AxiosResponse } from "axios";
import { UserType } from "../types";

const token: string | null = localStorage.getItem("jwt");

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

type AuthRequestBodyType = {
  email: string;
  password: string;
};

type SignUpResponseType = {};

type ResponseLoginUserType = {
  id: number;
  email: string;
};

type TokenType = {
  accessToken: string;
};

type AuthResponseType = {
  tokens: TokenType;
  user: ResponseLoginUserType;
};

export const signUp = async (
  data: AuthRequestBodyType
): Promise<AuthResponseType> => {
  try {
    const response: AxiosResponse<AuthResponseType> = await api.post(
      "api/auth/signup",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};

export const signIn = async (
  data: AuthRequestBodyType
): Promise<AuthResponseType> => {
  try {
    const response: AxiosResponse<AuthResponseType> = await api.post(
      "api/auth/signin",
      data
    );
    console.log(">>>>>>> api respomnse", response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging in: ", error);
    throw error;
  }
};

export const getMe = async (): Promise<UserType> => {
  try {
    const response = await api.get("api/user/getme");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data: ", error);
    throw error;
  }
};

export const updateUser = async (
  userId: number,
  userData: Partial<UserType>
) => {
  try {
    const response = await api.put(`api/user/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при обновлении данных пользователя по ID:", error);
    throw error;
  }
};

export const getUserById = async (userId: number): Promise<UserType> => {
  try {
    const response: AxiosResponse<UserType> = await api.get(
      `api/user/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data by ID: ", error);
    throw error;
  }
};

export const getUsers = async (): Promise<UserType[]> => {
  try {
    const response: AxiosResponse<UserType[]> = await api.get("api/user/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching users data: ", error);
    throw error;
  }
};

export const comparePassword = async (userId: number, oldPassword: any) => {
  try {
    const response = await api.post(
      `api/user/${userId}/comparePassword`,
      oldPassword
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;

// const handleSavePasswordChanges = async (values: ValuePasswordType) => {
//   try {
//     if (!currentUser) throw Error("User not found");
//     // Сравниваем старый пароль на сервере
//     const passwordComparisonResult = await comparePassword(Number(currentUser.id), values.oldPassword);
//     if (!passwordComparisonResult.success) {
//       throw new Error("Old password does not match");
//     }
//     const updatedPassword = {
//       password: values.password,
//     };
//     const updatedUser = await updateUser(Number(currentUser.id), updatedPassword);
//     console.log("User password updated successfully:", updatedUser);
//     setIsEditingPassword(false);
//   } catch (error) {
//     console.error(error);
//   }
// };
