import { useState } from "react";
import { BookCard } from "../../components/BookCard";
import { Seo } from "../../components/Seo";
const LIST_BOOKS = [
  {
    title: "El libro de la selva",
    price: 100.3,
    image: "https://picsum.photos/200/300",
    type: "Fisico",
  },
  {
    title: "El libro de la selva",
    price: 100.1,
    image: "https://picsum.photos/200/299",
    type: "Dígital",
  },
  {
    title: "Harry Potter",
    price: 100.0,
    image: "https://picsum.photos/200/303",
    type: "Fisico",
  },
  {
    title: "Habitaciones de la tierra",
    price: 100.0,
    image: "https://picsum.photos/200/301",
    type: "Dígital",
  },
  {
    title: "El libro de la selva",
    price: 100.0,
    image: "https://picsum.photos/200/310",
    type: "Fisico",
  },
  {
    title: "El libro de la selva",
    price: 100.99,
    image: "https://picsum.photos/200/220",
    type: "Dígital",
  },
  {
    title: "Harry Potter",
    price: 100.0,
    image: "https://picsum.photos/200/210",
    type: "Fisico",
  },
  {
    title: "Otro libro",
    price: 799.0,
    image: "https://picsum.photos/199/201",
    type: "Dígital",
  },
];
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
              className="py-1 outline-none w-[310px]"
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
