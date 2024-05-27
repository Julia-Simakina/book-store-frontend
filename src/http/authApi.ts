import { AxiosResponse } from "axios";
import {
  AuthRequestBodyType,
  AuthResponseType,
  RefreshTokenResponseType,
  RefreshTokenType,
} from "./types";
import api, { setTokensToStorage } from "./api";

const pathPrefix = "auth";

export const signUp = async (
  data: AuthRequestBodyType
): Promise<AuthResponseType> => {
  try {
    const response: AxiosResponse<AuthResponseType> = await api.post(
      `${pathPrefix}/signup`,
      data
    );

    setTokensToStorage(response.data.tokens);

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
      `${pathPrefix}/signin`,
      data
    );

    setTokensToStorage(response.data.tokens);

    return response.data;
  } catch (error) {
    console.error("Error logging in: ", error);
    throw error;
  }
};

export const refreshToken = async (
  refreshToken: RefreshTokenType
): Promise<RefreshTokenResponseType> => {
  try {
    const response: AxiosResponse<RefreshTokenResponseType> = await api.post(
      `${pathPrefix}/refresh`,
      refreshToken
    );

    return response.data;
  } catch (error) {
    console.error("Error refresh token: ", error);
    throw error;
  }
};
