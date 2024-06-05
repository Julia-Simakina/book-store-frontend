import { AxiosResponse } from "axios";
import api from "./api";
import { CartType } from "../../types";
import { BookType } from "../../types";

const pathPrefix = "cart";

export const addBookToCart = async (bookId: number): Promise<CartType[]> => {
  try {
    const response: AxiosResponse<CartType[]> = await api.post(
      `${pathPrefix}/add`,
      { bookId }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating cart: ", error);
    throw error;
  }
};

export const getAllBooksFromCart = async (): Promise<BookType[]> => {
  try {
    const response: AxiosResponse<BookType[]> = await api.get(`${pathPrefix}/`);

    return response.data;
  } catch (error) {
    console.error("Error creating cart: ", error);
    throw error;
  }
};
