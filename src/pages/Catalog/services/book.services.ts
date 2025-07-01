import { Book } from "@/types";
import axios from "axios";
import { Aggregations } from "../types/aggegation.types";

const BASE_URL = `${
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"
}/ms-elastic-catalogue`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface BooksResponse {
  books: Book[];
}

interface GetAllBooksBody {
  targetMethod: string;
  queryParams: {
    visible: boolean[];
  };
}

interface GetAllBooksResponse {
  books: Book[];
  aggregations: Aggregations;
}

export const getAllBooks = async (): Promise<GetAllBooksResponse> => {
  try {
    const body: GetAllBooksBody = {
      targetMethod: "GET",
      queryParams: {
        visible: [true],
      },
    };
    const response = await axiosInstance.post("/books", body);
    console.log("Books fetched successfully:", response);
    return {
      books: response.data.books,
      aggregations: response.data.aggregations,
    };
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const searchBooks = async (
  query: string | null = null,
  category: string | null = null,
  rating: string | null = null,
  price: string | null = null
) => {
  try {
    const body: GetAllBooksBody = {
      targetMethod: "GET",
      queryParams: {
        visible: [true],
      },
    };
    const params = new URLSearchParams({
      title: query ?? "",
      category: category ?? "",
      rating: rating ?? "",
      price: price ?? "",
    }).toString();
    const response = await axiosInstance.post(`/books?${params}`, body);
    return {
      books: response.data.books,
      aggregations: response.data.aggregations,
    };
  } catch (error) {
    console.error("Error searching books:", error);
    throw error;
  }
};
