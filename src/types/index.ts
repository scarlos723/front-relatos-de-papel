export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  isbn: string;
  publicationDate: string; // ISO date string format
  rating: number | null;
  price: number;
  description: string;
  visible: boolean;
  // Campos adicionales que tienes en el frontend
  image?: string;
  type?: string;
  quantity?: number;
  reviews?: Review[];
}
