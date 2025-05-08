import { useRoutes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { LandingLayout } from "./layout/LandingLayout";
import { AccessPage } from "./pages/AccessPage";
import { Catalog } from "./pages/Catalog";
import { Checkout } from "./pages/Checkout";
import { UxUi } from "./pages/UXUI";
import { Register } from "./pages/Register";

import { ROUTES } from "./constants/routes";
import { Login } from "./pages/Login";

function App() {
  const element = useRoutes([
    {
      element: <LandingLayout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <AccessPage />,
        },
        {
          path: ROUTES.CATALOG,
          element: <Catalog />,
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
  ]);
  return element;
}

export default App;
