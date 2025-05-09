import type { Cart } from "../../../store/cart/types";

export interface CartProps {
  items: Cart[];
  handleRemoveItem: (id: number) => void;
  handleClearCart: () => void;
}