import { Book } from "@/types";
import React, { useEffect, useState } from "react";
import { getAllBooks, searchBooks } from "../services/book.services";
import { Aggregations } from "../types/aggegation.types";
interface Queries {
  title: string | null;
  query: string | null;
  category: string | null;
  rating: string | null;
  price: string | null;
}
const useCatalogBooks = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [listbooks, setListBooks] = useState<Book[]>([]);
  const [agregations, setAgregations] = useState<Aggregations>();

  const [queries, setQueries] = useState<Queries>({
    title: null,
    query: null,
    category: null,
    rating: null,
    price: null,
  });

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const { books, aggregations } = await getAllBooks();

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
    if (value.length > 1) {
      setQueries((prev) => ({
        ...prev,
        title: value,
      }));
    } else {
      getAllBooks().then((data) => {
        setListBooks(data.books);
        setAgregations(data.aggregations);
      });
      setQueries({
        title: null,
        query: null,
        category: null,
        rating: null,
        price: null,
      });
    }
  };
  const cleanFilter = (query: string) => {
    setQueries((prev) => ({
      ...prev,
      [query]: null, // Set the specific query to null
    }));
  };
  const handleSearchAgg = (aggKey: string, data: string, active: boolean) => {
    const mappingQueries: Record<string, string> = {
      título: "title",
      Categorías: "category",
      Raiting: "rating",
      Price: "price",
    };
    const queryKey = mappingQueries[aggKey];
    setQueries((prev) => ({
      ...prev,
      [queryKey]: active ? data : null, // Set to null if not active
    }));
  };
  const fetchSeatch = async () => {
    setLoading(true);
    try {
      const { books, aggregations } = await searchBooks(queries);

      setListBooks(books);
      setAgregations(aggregations);
    } catch (error) {
      console.error("Error searching books:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    fetchSeatch();
  }, [queries]);

  return {
    agregations,
    listbooks,
    handleSearch,
    handleSearchAgg,
    loading,
    queries,
    cleanFilter,
  };
};

export default useCatalogBooks;
