import type { RefObject } from "react";
import type { Book } from "../../../types";

export interface CartProps {
  ref: RefObject<HTMLDivElement | null>;
  items: Book[];
  handleRemoveItem: (id: string) => void;
  handleClearCart: () => void;
  handleCloseCart: () => void;
}
