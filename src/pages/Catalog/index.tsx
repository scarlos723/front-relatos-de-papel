import { useState } from "react";

import { BookCard } from "../../components/BookCard";
import { SearchIcon } from "../../components/SearchIcon";
import { Seo } from "../../components/Seo";
import { LIST_BOOKS } from "../../constants/mocks";
import type { Books } from "../../types";

export const Catalog = () => {
  const [booksFiltered, setBooksFiltered] = useState<Books>(LIST_BOOKS);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filteredBooks = LIST_BOOKS.filter((book) =>
      book.title.toLowerCase().includes(value),
    );
    setBooksFiltered(filteredBooks);
  };

  return (
    <main className="container py-16">
      <Seo title="Catálogo"></Seo>
      <section>
        <div className="grid mb-12 lg:flex gap-4 lg:justify-between lg:items-center">
          <h1 className="font-bold text-5xl">Catálogo</h1>
          <div className="relative rounded-full flex items-center border border-white px-4">
            <input
              type="text"
              placeholder="Buscar libro"
              className="py-1 outline-none w-[280px]"
              onChange={handleSearch}
            />
            <div className="absolute right-8">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-between ">
          {booksFiltered.map((item, i) => (
            <div key={i}>
              <BookCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
