import type { Books } from "../types";

export const LIST_BOOKS = [
  {
    id: 1,
    title: "El libro de la selva",
    price: 100.3,
    image: "https://picsum.photos/200/300",
    type: "Fisico",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 10,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 2,
    title: "El libro de la selva",
    price: 100.1,
    image: "https://picsum.photos/200/299",
    type: "Dígital",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 5,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 3,
    title: "Harry Potter",
    price: 100.0,
    image: "https://picsum.photos/200/303",
    type: "Fisico",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 8,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 4,
    title: "Habitaciones de la tierra",
    price: 100.0,
    image: "https://picsum.photos/200/301",
    type: "Dígital",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 12,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 5,
    title: "El libro de la selva",
    price: 100.0,
    image: "https://picsum.photos/200/310",
    type: "Fisico",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 7,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 6,
    title: "El libro de la selva",
    price: 100.99,
    image: "https://picsum.photos/200/220",
    type: "Dígital",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 15,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 7,
    title: "Harry Potter",
    price: 100.0,
    image: "https://picsum.photos/200/210",
    type: "Fisico",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 20,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 8,
    title: "Otro libro",
    price: 799.0,
    image: "https://picsum.photos/199/201",
    type: "Dígital",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 3,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 9,
    title: "Habitaciones de la tierra",
    price: 100.0,
    image: "https://picsum.photos/200/301",
    type: "Dígital",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 3,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 10,
    title: "El libro de la selva",
    price: 100.0,
    image: "https://picsum.photos/200/310",
    type: "Fisico",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 3,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 11,
    title: "El libro de la selva",
    price: 100.99,
    image: "https://picsum.photos/200/220",
    type: "Dígital",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 3,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 12,
    title: "Harry Potter",
    price: 100.0,
    image: "https://picsum.photos/200/210",
    type: "Fisico",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 3,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
  {
    id: 13,
    title: "Otro libro",
    price: 799.0,
    image: "https://picsum.photos/199/201",
    type: "Dígital",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 3,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Great book!",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Good read.",
      },
    ],
  },
] as Books;

export const PRODUCTS = [
  {
    title: "Producto 1",
    price: 10.0,
  },
  {
    title: "Producto 2",
    price: 20.0,
  },
  {
    title: "Producto 3",
    price: 30.0,
  },
  {
    title: "Producto 4",
    price: 40.0,
  },
  {
    title: "Producto 5",
    price: 50.0,
  },
];
