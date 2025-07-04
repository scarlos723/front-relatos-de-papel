import type { Book } from "../../types";
export interface CartState {
  items: Book[];
  addItem: (item: Book) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}
