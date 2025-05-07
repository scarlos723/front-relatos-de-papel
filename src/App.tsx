
import { useRoutes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { AccessPage } from "./pages/AccessPage";
import { Catalog } from "./pages/Catalog";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <AccessPage />,
    },
    { 
      path: "/catalogo", 
      element: <Catalog /> 
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);
  return element
}

export default App;
