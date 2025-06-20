import type { MouseEvent } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useHandleCart } from "../../hooks/useHandleCart/useHandleCart";
import { ROUTES } from "../../routes";
import type { BookCardProps } from "./types";

export const BookCard = (props: BookCardProps) => {
  const { handleAddItem } = useHandleCart();
  const navigate = useNavigate();
  const { id, title, price, image, type, author, reviews, description } = props;

  const handleAddToCart = (event: MouseEvent) => {
    event.stopPropagation();
    const item = {
      id,
      title,
      price,
      image,
      type,
      author,
      reviews,
      description,
      quantity: 1,
    };
    handleAddItem(item);
  };

  const handleNavigate = () => {
    navigate(`${ROUTES.CATALOG}/${id}`);
  };

  return (
    <article
      className="bg-gray-300/10 shadow rounded-lg w-[310px] md:w-[280px] lg:w-[200px] borderbox p-4 grid gap-4 cursor-pointer"
      id="book-card"
      onClick={handleNavigate}
    >
      <img
        src={image}
        className="w-full aspect-[15/21] bg-gray-400 object-cover"
      />
      <div>
        <h4 className="h-[48px] line-clamp-2">{title}</h4>

        <p className="font-bold">$ {price.toFixed(2)} </p>
        <div className="flex items-center justify-between mt-2">
          <small>{type}</small>
          <FaCartPlus
            onClick={(event) => handleAddToCart(event)}
            className="text-[1.2rem] text-white cursor-pointer hover:text-gray-400 transition-all duration-300"
          />
        </div>
      </div>
    </article>
  );
};
