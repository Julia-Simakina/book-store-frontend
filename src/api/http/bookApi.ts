import { AxiosResponse } from "axios";
import api from "./api";
import { BookType } from "../../types";

const pathPrefix = "book";

export const getBookById = async (bookId: number): Promise<BookType> => {
  try {
    const response: AxiosResponse<BookType> = await api.get(
      `${pathPrefix}/${bookId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching book data by ID: ", error);
    throw error;
  }
};

export const getBooks = async (): Promise<BookType[]> => {
  try {
    const response: AxiosResponse<BookType[]> = await api.get(
      `${pathPrefix}/all`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching books data: ", error);
    throw error;
  }
};
