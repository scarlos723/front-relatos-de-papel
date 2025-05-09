import type { Cart } from "../../../store/cart/types";
import type { RefObject } from "react";

export interface CartProps {
  ref: RefObject<HTMLDivElement | null>;
  items: Cart[];
  handleRemoveItem: (id: number) => void;
  handleClearCart: () => void;
  handleCloseCart: () => void;
}