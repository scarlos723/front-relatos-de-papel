
import { detailsLoader } from "./libraries/DetailsLoader";

import { LoadingLayout } from "./layout/LoadingLayout";
import { LandingLayout } from "./layout/LandingLayout";
import { NotFound } from "./components/NotFound";
import { AccessPage } from "./pages/AccessPage";
import { Catalog } from "./pages/Catalog";
import { Checkout } from "./pages/Checkout";
import { UxUi } from "./pages/UXUI";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { BookDetail } from "./pages/BookDetail";

export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalogo",
  CHECKOUT: "/pagar",
  UXUI: "/uxui",
  LOGIN: "/iniciar-sesion",
  REGISTER: "/registro",
  NOT_FOUND: "*",
};

export const routes = [
  {
    element: <LoadingLayout />,
    children: [
      {
        element: <LandingLayout />,
        children: [
          {
            path: ROUTES.HOME,
            element: <AccessPage />,
          },
          {
            path: ROUTES.CATALOG,
            children: [
              {
                index: true,
                element: <Catalog />,
              },
              {
                path: ':id',
                element: <BookDetail />,
                loader: detailsLoader,
              }
            ]
          },
          {
            path: ROUTES.CHECKOUT,
            element: <Checkout />,
          },
          {
            path: ROUTES.UXUI,
            element: <UxUi />,
          },
          {
            path: ROUTES.REGISTER,
            element: <Register />,
          },
          {
            path: ROUTES.LOGIN,
            element: <Login />,
          }
        ],
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
]