import { Book } from "@/types";
import type { MouseEvent } from "react";
import { FaCartPlus } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useHandleCart } from "../../hooks/useHandleCart/useHandleCart";
import { ROUTES } from "../../routes";
import { StarsGroup } from "../StarsGroup";

export const BookCard = (props: { book: Book }) => {
  const { handleAddItem } = useHandleCart();
  const navigate = useNavigate();
  const { book } = props;
  const handleAddToCart = (event: MouseEvent) => {
    event.stopPropagation();

    handleAddItem(book);
  };

  const handleNavigate = () => {
    navigate(`${ROUTES.CATALOG}/${book.id}`);
  };

  return (
    <article
      className="bg-gray-300/10 shadow rounded-lg w-[310px] md:w-[280px] lg:w-[200px] borderbox p-4 grid gap-4 cursor-pointer"
      id="book-card"
      onClick={handleNavigate}
    >
      <div className="w-full aspect-[15/21] bg-gray-400/20 backdrop-blur-2xl ">
        {book.image ? (
          <img src={book.image} className=" object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <ImBook size={40} />
          </div>
        )}
      </div>
      <div>
        <h4 className="h-[48px] line-clamp-2">{book.title}</h4>

        <p className="font-bold">$ {book.price.toFixed(2)} </p>
        {book?.rating && <StarsGroup rating={book.rating} />}
        <div className="flex items-center justify-between mt-2">
          <small>{book.type}</small>
          <FaCartPlus
            onClick={(event) => handleAddToCart(event)}
            className="text-[1.2rem] text-white cursor-pointer hover:text-gray-400 transition-all duration-300"
          />
        </div>
      </div>
    </article>
  );
};
