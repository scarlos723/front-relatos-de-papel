import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  items: { id: number; name: string; quantity: number }[];
  addItem: (item: { id: number; name: string; quantity: number }) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "rdp-cart-storage", // Nombre de la clave en localStorage
    },
  ),
);

export default useCartStore;
