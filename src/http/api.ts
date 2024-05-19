import axios, { AxiosResponse } from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

interface User {
  id?: number;
  email: string;
  password: string;
  tokens?: any;
  user?: any; //переделать
}

// Добавление нового пользователя
export const createUser = async (userData: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.post('api/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user: ', error);
    throw error;
  }
};

// Вход
export const loginUser = async (userData: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.post('api/auth/signin', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user: ', error);
    throw error;
  }
};

export default api;
