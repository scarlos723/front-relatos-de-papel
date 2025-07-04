import { useCartStore } from "../../store/cart";
import type { Book } from "../../types";

export const useHandleCart = () => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const items: Book[] = useCartStore((state) => state.items);

  const handleAddItem = (item: Book) => {
    addItem(item);
  };
  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };
  const handleClearCart = () => {
    clearCart();
  };

  const getCartItems = () => {
    return items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        type: item.type,
        author: item.author,
        description: item.description,
        quantity: item.quantity,
        reviews: item.reviews,
        category: item.category ?? "",
        isbn: item.isbn ?? "",
        publicationDate: item.publicationDate ?? "",
        rating: item.rating ?? 0,
        visible: item.visible ?? true,
      };
    });
  };

  return {
    handleAddItem,
    handleRemoveItem,
    handleClearCart,
    getCartItems,
  };
};
