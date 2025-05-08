export interface Cart {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string;
  quantity: number;
}

export interface CartState {
  items: Cart[];
  addItem: (item: Cart) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}