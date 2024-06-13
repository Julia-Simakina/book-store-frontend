import { AxiosResponse } from "axios";
import api from "./api";
import { GenreType } from "../../types";

type GetGenressResponseType = {
  genres: GenreType[];
};

const pathPrefix = "genre";

export const getAllGenres = async (): Promise<GetGenressResponseType> => {
  try {
    const response: AxiosResponse<GetGenressResponseType> = await api.get(
      `${pathPrefix}/all`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching books data: ", error);
    throw error;
  }
};
