import { BiLoader } from "react-icons/bi";
import { BookCard } from "../../components/BookCard";
import { SearchIcon } from "../../components/SearchIcon";
import { Seo } from "../../components/Seo";

import { AggContainer } from "./components/AggContainer";
import useCatalogBooks from "./hooks/useCatalogBooks";

export const Catalog = () => {
  const { agregations, listbooks, handleSearchAgg, handleSearch, loading } = useCatalogBooks();
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
              id="search"
              onChange={handleSearch}
            />
            <div className="absolute right-8">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="min-w-[280px] hidden lg:block border-r border-gray-600 mr-4">
            {agregations && (
              <div className="flex flex-col gap-4">
                <AggContainer
                  aggName="Categorías"
                  agregations={agregations.categories_agg}
                  handleAgg={handleSearchAgg}
                />
                <AggContainer
                  aggName="Raiting"
                  agregations={agregations.rating_agg}
                  handleAgg={handleSearchAgg}
                />
                <AggContainer
                  aggName="Price"
                  agregations={agregations.price_agg}
                  handleAgg={handleSearchAgg}
                />
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-between ">
            {loading && (
              <div className="m-auto">
                <p className="">Cargando libros...</p>
                <BiLoader />
              </div>
            )}
            {listbooks.map((item, i) => (
              <div key={i}>
                <BookCard book={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
