import { Book } from "@/types";
import React, { useEffect, useState } from "react";
import { getAllBooks } from "../services/book.services";
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
    try {
      setLoading(true);
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    agregations,
    listbooks,
    handleSearch,
    loading,
  };
};

export default useCatalogBooks;
