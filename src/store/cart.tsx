import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  items: {
    id: number;
    title: string;
    price: number;
    image: string;
    type: string;
    quantity: number;
  }[];
  addItem: (item: {
    id: number;
    title: string;
    price: number;
    image: string;
    type: string;
    quantity: number;
  }) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          } else {
            return {
              items: [...state.items, { ...item, quantity: 1 }],
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

export default useCartStore;
