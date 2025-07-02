import { useLoaderData } from "react-router-dom";

import { StarsGroup } from "@/components/StarsGroup";
import { ImBook } from "react-icons/im";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Review } from "../../components/Review";
import { Seo } from "../../components/Seo";
import { useHandleCart } from "../../hooks/useHandleCart/useHandleCart";
import type { Book } from "../../types";

export const BookDetail = () => {
  const book = useLoaderData() as Book;
  const { handleAddItem } = useHandleCart();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const quantity = formData.get("quantity");
    if (quantity) {
      handleAddItem({ ...book, quantity: Number(quantity) });
    }
  };

  return (
    <main className="container py-16 flex flex-col gap-8">
      <Seo title="Detalles"></Seo>
      <section className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8">
        <div className="flex justify-center">
          <div className="w-full h-full flex items-center justify-center min-w-40 text-white">
            <ImBook size={40} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-5xl">{book.title}</h2>
          {book?.rating && <StarsGroup rating={book.rating} />}
          <h3 className="text-2xl">{book.author}</h3>
          <p className="text-2xl font-bold">{`$ ${book.price.toFixed(2)}`}</p>
          <p>{book.description}</p>
          <form
            action=""
            className="max-w-2xs flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <Input
              id="quantity"
              label="Cantidad"
              type="number"
              min={1}
              step={1}
              defaultValue={1}
              max={book.quantity}
              onChange={() => {}}
            />
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="w-full"
            >
              Agregar al carrito
            </Button>
          </form>
        </div>
      </section>
      <section className="">
        {Array.isArray(book.reviews) && book.reviews.length > 0 ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Reseñas</h2>
            {book.reviews.map((review) => (
              <Review
                key={review.id}
                id={review.id}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No hay reseñas disponibles.</p>
        )}
      </section>
    </main>
  );
};
