import axios, { AxiosResponse } from "axios";
import { UserType } from "../store/UserSlice";

const token = localStorage.getItem("jwt");

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export type tokenType = {
  accessToken: string;
};

// interface User {
//   id?: number;
//   email: string;
//   password: string;
//   tokens: tokenType;
//   fullName?: null;
//   ayOfBirth?: null;
//   deletedAt?: null;
//   createdAt?: string;
//   updatedAt?: string;
// }

// Добавление нового пользователя
export const createUser = async (userData: UserType): Promise<UserType> => {
  try {
    const response: AxiosResponse<UserType> = await api.post(
      "api/auth/signup",
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};

// Вход
export const loginUser = async (userData: UserType): Promise<UserType> => {
  try {
    const response: AxiosResponse<UserType> = await api.post(
      "api/auth/signin",
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};

// // Получение текущего пользователя
// export const getMe = async (token: any) => {
//   try {
//     const response = await api.get("api/user/getme", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching user: ", error);
//     throw error;
//   }
// };
// Получение текущего пользователя
export const getMe = async (): Promise<UserType> => {
  try {
    const response = await api.get("api/user/getme", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user: ", error);
    throw error;
  }
};

// Получение пользователя по id
export const getUserById = async (userId: number): Promise<UserType> => {
  try {
    const response: AxiosResponse<UserType> = await api.get(
      `api/user/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user: ", error);
    throw error;
  }
};

// Получение всех пользователей
export const getUsers = async (): Promise<UserType[]> => {
  try {
    const response: AxiosResponse<UserType[]> = await api.get("api/user/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
};

export default api;
