export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

export interface Book {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string;
  author: string;
  description: string;
  quantity: number;
  reviews: Review[];
}

export type Books = Book[];