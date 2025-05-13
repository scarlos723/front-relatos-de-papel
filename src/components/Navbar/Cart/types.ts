import type { Book } from "../../../types";
import type { RefObject } from "react";

export interface CartProps {
  ref: RefObject<HTMLDivElement | null>;
  items: Book[];
  handleRemoveItem: (id: number) => void;
  handleClearCart: () => void;
  handleCloseCart: () => void;
}