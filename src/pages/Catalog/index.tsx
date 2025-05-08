import { useState } from "react";

import { BookCard } from "../../components/BookCard";
import { Seo } from "../../components/Seo";
import { LIST_BOOKS } from "../../constants/mocks";

export const Catalog = () => {
  const [booksFiltered, setBooksFiltered] = useState(LIST_BOOKS);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filteredBooks = LIST_BOOKS.filter((book) =>
      book.title.toLowerCase().includes(value),
    );
    setBooksFiltered(filteredBooks);
  };

  return (
    <main className="container">
      <Seo title="Catálogo"></Seo>
      <section>
        <div className="grid mb-5 lg:flex gap-4 lg:justify-between lg:items-center">
          <h1 className="font-bold">Catálogo</h1>
          <div className="rounded-full border border-white px-4">
            <input
              type="text"
              placeholder="Buscar libro"
              className="py-1 outline-none w-[280px]"
              onChange={handleSearch}
            />
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
