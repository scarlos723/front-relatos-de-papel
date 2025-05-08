import { useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { Button } from "../../Button";
import { useHandleCart } from "../../../hooks/useHandleCart";
import { Cart } from "../Cart";
import { ROUTES } from "../../../constants/routes";
import type { NavigationMenuProps } from "./types";

export const NavigationMenu = (props: NavigationMenuProps) => {
  const { getCartItems, handleRemoveItem } = useHandleCart();
  const [openCart, setOpenCart] = useState(false);

  const onClickLink = () => {
    if (props.setOpen) {
      props.setOpen(false);
    }
  };

  const handleOpenCart = (event: MouseEvent) => {
    event?.stopPropagation();
    event.preventDefault();
    setOpenCart(!openCart);
  };

  return (
    <nav className={`items-center gap-4 grid lg:flex `}>
      <Link
        to={ROUTES.CATALOG}
        className="flex items-center gap-4 w-full lg:w-auto  mb-auto"
        onClick={onClickLink}
      >
        <p className="text-center lg:underline font-semibold border border-gray-100 lg:border-none px-2 rounded-md py-1">
          Catálogo
        </p>
        <button
          type="button"
          className={`radius-full ${
            !openCart ? "bg-white" : "bg-black"
          } p-2 rounded-full ml-auto cursor-pointer relative transition-all duration-400`}
          onClick={handleOpenCart}
        >
          <FaShoppingCart
            className={`text-[1.2rem] ${
              !openCart
                ? "text-black"
                : "text-white transition-all duration-400"
            }`}
          />
          {getCartItems().length > 0 && (
            <span className="absolute -top-1 -right-3 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
              {getCartItems().length}
            </span>
          )}
          {openCart && (
            <div className="absolute top-0 right-0 mt-12 mr-4 z-20">
              <Cart
                items={getCartItems()}
                handleRemoveItem={handleRemoveItem}
              />
            </div>
          )}
        </button>
      </Link>
      <div className="flex justify-between mt-auto lg:mt-0 gap-4 lg:w-[310px]">
        <Link to={ROUTES.LOGIN} className="w-full">
          <Button type="button" variant="primary" className="w-full">
            Iniciar sesión
          </Button>
        </Link>
        <Link to={ROUTES.REGISTER} className="w-full">
          <Button type="button" variant="secondary" className="w-full">
            Registrarse
          </Button>
        </Link>
      </div>
    </nav>
  );
};
