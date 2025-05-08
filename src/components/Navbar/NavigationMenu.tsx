import { Link } from "react-router-dom";
import { Button } from "../Button";
import { FaShoppingCart } from "react-icons/fa";
import { useHandleCart } from "../../hooks/useHandleCart";
import { useState } from "react";
import { Cart } from "./Cart";
import { MouseEvent } from "react";
export const NavigationMenu = (props: {
  setOpen?: (value: boolean) => void;
}) => {
  const onClickLink = () => {
    if (props.setOpen) {
      props.setOpen(false);
    }
  };

  const { getCartItems, handleRemoveItem } = useHandleCart();



  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = (event: MouseEvent) => {
    event?.stopPropagation();
    event.preventDefault();
    setOpenCart(!openCart);
  };
  return (
    <nav className={`items-center gap-4 grid lg:flex `}>
      <Link
        to={"/catalogo"}
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
        <Button type="button" variant="primary" className="w-full">
          Iniciar sesión
        </Button>
        <Button type="button" variant="secondary" className="w-full">
          Registrarse
        </Button>
      </div>
    </nav>
  );
};
