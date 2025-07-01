import { Book } from "@/types";
import React, { useEffect, useState } from "react";
import { getAllBooks, searchBooks } from "../services/book.services";
import { Aggregations } from "../types/aggegation.types";

const useCatalogBooks = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [listbooks, setListBooks] = useState<Book[]>([]);
  const [agregations, setAgregations] = useState<Aggregations>();

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const { books, aggregations } = await getAllBooks();
      console.log("Books fetched successfully:", books);
      console.log("Agregations fetched successfully:", aggregations);
      setListBooks(books);
      setAgregations(aggregations);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    if (value.length <= 3) {
      getAllBooks()
        .then((data) => {
          console.log("Resetting search results:", data);
          setListBooks(data.books);
        })
        .catch((error) => {
          console.error("Error resetting search results:", error);
        });
    } else {
      searchBooks(value)
        .then((data) => {
          console.log("Search results:", data);
          setListBooks(data.books);
          setAgregations(data.aggregations);
        })
        .catch((error) => {
          console.error("Error searching books:", error);
        });
    }
  };

  const handleSearchAgg = (aggKey: string, data:string) => {
    searchBooks(
      null,
      aggKey === "Categorías" ? data : null,
      aggKey === "Raiting" ? data : null,
      aggKey === "Price" ? data : null
    )
      .then((data) => {
        setListBooks(data.books);
        setAgregations(data.aggregations);
      })
      .catch((error) => {
        console.error("Error searching books:", error);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    agregations,
    listbooks,
    handleSearch,
    handleSearchAgg,
    loading,
  };
};

export default useCatalogBooks;
