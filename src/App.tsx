import { useRoutes } from "react-router-dom";
import NotFound from "./components/NotFound";
import LandingLayout from "./layout/LandingLayout";
import { AccessPage } from "./pages/AccessPage";
import { Catalog } from "./pages/Catalog";
import { Checkout } from "./pages/Checkout";

function App() {
  const element = useRoutes([
    {
      element: <LandingLayout />,
      children: [
        {
          path: "/",
          element: <AccessPage />,
        },
        {
          path: "/catalogo",
          element: <Catalog />,
        },
        {
          path: "/pagar",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
}

export default App;
