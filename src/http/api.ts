import axios, { AxiosResponse } from 'axios';
import { UserType } from '../types';

const token: string | null = localStorage.getItem('jwt');

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

type AuthUserType = {
  email: string;
  password: string;
};

type ResponseLoginUserType = {
  id: number;
  email: string;
};

type TokenType = {
  accessToken: string;
};

type ResponseLoginType = {
  tokens: TokenType;
  user: ResponseLoginUserType;
};

export const createUser = async (userData: AuthUserType): Promise<AuthUserType> => {
  try {
    const response: AxiosResponse<AuthUserType> = await api.post('api/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user: ', error);
    throw error;
  }
};

export const loginUser = async (userData: AuthUserType): Promise<ResponseLoginType> => {
  try {
    const response: AxiosResponse<ResponseLoginType> = await api.post('api/auth/signin', userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in: ', error);
    throw error;
  }
};

export const getMe = async (): Promise<UserType> => {
  try {
    const response = await api.get('api/user/getme');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data: ', error);
    throw error;
  }
};

export const updateUser = async (userId: number, userData: any) => {
  try {
    const response = await api.put(`api/user/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Ошибка при обновлении данных пользователя по ID:', error);
    throw error;
  }
};

export const getUserById = async (userId: number): Promise<UserType> => {
  try {
    const response: AxiosResponse<UserType> = await api.get(`api/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data by ID: ', error);
    throw error;
  }
};

export const getUsers = async (): Promise<UserType[]> => {
  try {
    const response: AxiosResponse<UserType[]> = await api.get('api/user/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching users data: ', error);
    throw error;
  }
};

export default api;
