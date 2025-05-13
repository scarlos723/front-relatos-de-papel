import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CartState } from "./types";

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            };
          } else {
            return {
              items: [...state.items, { ...item, quantity: item.quantity }],
            };
          }
        }),
      removeItem: (id) =>
        set((state) => {
          const quantity = state.items.find((i) => i.id == id)?.quantity ?? 0;

          if (quantity > 1) {
            return {
              items: state.items.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity - 1 } : i
              ),
            };
          } else {
            return { items: state.items.filter((item) => item.id !== id) };
          }
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "rdp-cart-storage", // Nombre de la clave en localStorage
    }
  )
);
