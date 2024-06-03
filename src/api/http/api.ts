import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import { TokenType } from "./types";
import { refreshToken } from "./authApi";

const token = (): string | null => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
};

export const setTokensToStorage = (tokensPair: TokenType) => {
  localStorage.setItem("accessToken", tokensPair.accessToken);
  localStorage.setItem("refreshToken", tokensPair.refreshToken);
};

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    authorization: `Bearer ${token()}`,
  },
});

export const resetTokens = (http: AxiosInstance) => {
  const accessToken = `Bearer ${token()}`;
  http.defaults.headers.authorization = accessToken;
};

export const updateAuthHeaders = () => resetTokens(api);

api.interceptors.response.use(undefined, async (error: AxiosError<any>) => {
  const originalRequest = error.config;
  if (error.response?.status === 401) {
    if (!originalRequest) {
      throw error;
    }

    console.log(error.response.data.message);
    if (error.response.data.message === "Invalid password") {
      throw error;
    }

    const token = localStorage.getItem("refreshToken");

    if (token) {
      const newTokensPair = await refreshToken({ refreshToken: token });

      setTokensToStorage(newTokensPair);

      updateAuthHeaders();

      originalRequest.headers.Authorization = `Bearer ${newTokensPair.accessToken}`;

      return api(originalRequest as AxiosRequestConfig<unknown>);
    }
  }

  throw error;
});

export default api;
