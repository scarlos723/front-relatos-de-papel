import { AccessPage } from "./pages/AccessPage";
import { Catalog } from "./pages/Catalog";

export const mainRoutes = [
  {
    path: "/",
    component: <AccessPage />,
  },
  {
    path: "/catalogo",
    component: <Catalog />,
  },
];
