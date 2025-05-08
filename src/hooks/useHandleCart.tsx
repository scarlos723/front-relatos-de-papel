import { useCartStore } from '../store/cart';
import type { Cart } from '../store/cart/types';

export const useHandleCart = () => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const items = useCartStore((state) => state.items);

  const handleAddItem = (item: Cart) => {
    addItem(item);
  }
  const handleRemoveItem = (id: number) => {
    removeItem(id);
  }
  const handleClearCart = () => {
    clearCart();
  }

  const getCartItems = () => {
    return items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        type: item.type,
        quantity: item.quantity
      };
    });
  }

  return {
    handleAddItem,
    handleRemoveItem,
    handleClearCart,
    getCartItems,
  }
}
