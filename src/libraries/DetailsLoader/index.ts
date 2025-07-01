import type { LoaderFunctionArgs } from "react-router-dom";

import { getAllBooks } from "../../pages/Catalog/services/book.services";
import { Book } from "../../types";

export const detailsLoader = async ({ params }: LoaderFunctionArgs): Promise<Book> => {
  const { id } = params;
  const bookId = id;

  if (!bookId) {
    throw new Error("Invalid book ID");
  }

  console.log("Fetching book with ID:", bookId);

  try {
    const { books } = await getAllBooks();
    console.log("Books fetched successfully:", books);

    const book = books.find((book) => book.id == bookId);

    if (!book) {
      throw new Error("Book not found");
    }

    return book;
  } catch (error) {
    console.error("Error loading book details:", error);
    throw new Error("Book not found");
  }
}