import { FaCartPlus } from "react-icons/fa";

import { useHandleCart } from "../../hooks/useHandleCart/useHandleCart";
import type { BookCardProps } from "./types";
import { MouseEvent } from "react";

export const BookCard = (props: BookCardProps) => {
  const {handleAddItem} = useHandleCart()

  const handleAddToCart = (event: MouseEvent) => {
    event.stopPropagation();
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
      type: props.type,
      quantity: 1
    };
    handleAddItem(item);
  }

  return (
    <article className="border  border-gray-400 rounded-lg w-[310px] md:w-[280px] lg:w-[200px]  borderbox p-4 grid gap-4">
      <img
        src={props.image}
        className="w-full h-[247px] bg-gray-400 object-cover"
      />
      <div>
        <h4 className="h-[48px] line-clamp-2">{props.title}</h4>

        <p className="font-bold">$ {props.price.toFixed(2)} </p>
        <div className="flex items-center justify-between mt-2">
          <small>{props.type}</small>
          <FaCartPlus onClick={(event) => handleAddToCart(event)} className="text-[1.2rem] text-white cursor-pointer hover:text-gray-400 transition-all duration-300" />
        </div>
      </div>
    </article>
  );
};
