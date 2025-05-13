import type { LoaderFunctionArgs } from "react-router-dom";

import { LIST_BOOKS } from "../../constants/mocks";
import { Book } from "../../types";

export const detailsLoader = async ({ params }: LoaderFunctionArgs): Promise<Book> => {
  const { id } = params;
  const bookId = Number(id);

  if (isNaN(bookId)) {
    throw new Error("Invalid book ID");
  }

  const book = await new Promise<Book>((resolve) => {
    setTimeout(() => {
      const book = LIST_BOOKS.find((book) => book.id === bookId);
      if (!book) {
        throw new Error("Book not found");
      }
      resolve(book);
    }, 1000);
  });

  return book;
}