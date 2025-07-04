import { MouseEvent } from "react";
import { MdTransitEnterexit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { TrashIcon } from "../../../components/TrashIcon";
import { Button } from "../../Button";
import type { CartProps } from "./types";

export const Cart = (props: CartProps) => {
  const navigate = useNavigate();
  const onRemoveItem = (id: string, event: MouseEvent) => {
    event.stopPropagation();
    props.handleRemoveItem(id);
  };
  const onHandleClearCart = (event: MouseEvent) => {
    event.stopPropagation();
    props.handleClearCart();
  };

  const handleCheckoutButton = () => {
    navigate("/pagar");
    props.handleCloseCart();
  };

  return (
    <div
      ref={props.ref}
      className="absolute top-0 right-0 lg:mt-12 lg:mr-4 z-20"
    >
      <div className="relative flex flex-col justify-between bg-white w-screen h-screen lg:w-[300px] lg:h-[400px] rounded-lg shadow-lg p-4">
        <h2 className="text-black font-semibold text-xl text-center">
          Carrito de Compras
        </h2>
        {props.items.length > 0 && (
          <h2
            className="text-gray-600 text-sm text-center mb-2 cursor-pointer"
            onClick={(event) => onHandleClearCart(event)}
          >
            Limpiar carrito
          </h2>
        )}
        <div className="flex flex-col justify-between mt-2 overflow-auto h-[250px] pr-4">
          {props.items.length === 0 ? (
            <p className="text-gray-600 text-base text-center">
              No hay productos en el carrito.
            </p>
          ) : (
            props.items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-3 justify-items-center gap-4 mb-4 border-b border-gray-300 pb-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-md"
                />
                <div className="flex-col justify-center items-center mt-4">
                  <h3 className="text-sm text-black font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Cantidad: {item.quantity}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(event) => onRemoveItem(item.id, event)}
                  className="text-red-500 cursor-pointer"
                >
                  <TrashIcon />
                </button>
              </div>
            ))
          )}
        </div>
        {props.items.length > 0 && (
          <div className="flex flex-col items-center justify-center mt-4">
            <h2 className="text-black font-semibold text-lg">
              Total: $
              {props.items
                .reduce(
                  (acc, item) => acc + item.price * (item.quantity ?? 1),
                  0
                )
                .toFixed(2)}
            </h2>
            <Button
              variant="primary"
              type="button"
              id="checkout-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleCheckoutButton}
            >
              Ir a Pagar
            </Button>
          </div>
        )}
        <div className="absolute lg:hidden top-2 right-2 ">
          <button
            type="button"
            onClick={() => props.handleCloseCart()}
            className="text-gray-600 cursor-pointer"
          >
            <MdTransitEnterexit size={38} />
          </button>
        </div>
      </div>
    </div>
  );
};
