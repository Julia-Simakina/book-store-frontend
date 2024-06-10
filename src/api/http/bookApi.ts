import { AxiosResponse } from "axios";
import api from "./api";
import { BookType } from "../../types";

type GetBooksResponseType = {
  slicedCards: BookType[];
  numberOfPages: number;
  currentPage: number;
};

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
  itemsPerPage: number,
  currentPage: number
): Promise<GetBooksResponseType> => {
  try {
    const response: AxiosResponse<GetBooksResponseType> = await api.get(
      `${pathPrefix}/all?itemsPerPage=${itemsPerPage}&currentPage=${currentPage}`
    );
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching books data: ", error);
    throw error;
  }
};
