import type { MouseEvent } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside/useClickOutside";
import { useHandleCart } from "../../../hooks/useHandleCart/useHandleCart";
import { Cart } from "../Cart";

export const CartButton = () => {
  const { getCartItems, handleRemoveItem, handleClearCart } = useHandleCart();
  const [openCart, setOpenCart] = useState(false);

  const { referencia } = useClickOutside({
    handleAction: () => setOpenCart(false),
  });

  const handleOpenCart = (event: MouseEvent) => {
    event.stopPropagation();
    setOpenCart(!openCart);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <div className="static lg:relative">
      <button
        type="button"
        id="cart-button"
        className={`radius-full ${
          !openCart ? "bg-white" : "bg-black"
        } p-2 rounded-full cursor-pointer relative transition-all duration-400`}
        onClick={handleOpenCart}
      >
        <FaShoppingCart
          className={`text-[1.2rem] ${
            !openCart ? "text-black" : "text-white transition-all duration-400"
          }`}
        />
        {getCartItems().length > 0 && (
          <span className="absolute -top-1 -right-3 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
            {getCartItems().length}
          </span>
        )}
      </button>
      {openCart && (
        <Cart
          ref={referencia}
          getCartItems={getCartItems}
          handleRemoveItem={handleRemoveItem}
          handleClearCart={handleClearCart}
          handleCloseCart={handleCloseCart}
        />
      )}
    </div>
  );
};
