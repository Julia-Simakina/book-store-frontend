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

export const getBooks = async (
  startIndex: any,
  endIndex: any
): Promise<BookType[]> => {
  try {
    const response: AxiosResponse<BookType[]> = await api.get(
      `${pathPrefix}/all?startIndex=${startIndex}&endIndex=${endIndex}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching books data: ", error);
    throw error;
  }
};
