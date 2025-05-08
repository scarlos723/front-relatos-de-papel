import { MouseEvent } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

import { Button } from "../../Button";
import type { CartProps } from "./types";

export const Cart = (props: CartProps) => {
  const onRemoveItem = (id: number, event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    props.handleRemoveItem(id);
  };

  return (
    <div className="bg-white w-[300px] h-[400px] rounded-lg shadow-lg p-4">
      <h2 className="text-black text-lg font-semibold">Carrito de Compras</h2>
      <div className="mt-4">
        {props.items.length == 0 ? (
          <p className="text-gray-600">No hay productos en el carrito.</p>
        ) : (
          props.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-sm text-black font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-600">${item.quantity}</p>

              </div>
              <button
                type="button"
                onClick={(event) => onRemoveItem(item.id, event)}
                className="text-red-500"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))
        )}
      </div>
      {props.items.length > 0 && (
        <div className="mt-4">
          <Button
            variant="primary"
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Ir a Pagar
          </Button>
        </div>
      )}
    </div>
  );
};
