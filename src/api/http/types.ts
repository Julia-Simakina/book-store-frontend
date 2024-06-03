export type RefreshTokenType = {
  refreshToken: string;
};

export type AuthRequestBodyType = {
  email: string;
  password: string;
};

export type TokenType = {
  accessToken: string;
  refreshToken: string;
};

type ResponseLoginUserType = {
  id: number;
  email: string;
};

export type AuthResponseType = {
  tokens: TokenType;
  user: ResponseLoginUserType;
};

export type RefreshTokenResponseType = {
  accessToken: string;
  refreshToken: string;
};
