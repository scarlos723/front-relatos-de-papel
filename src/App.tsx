import { BrowserRouter, Route } from "react-router-dom";
import RoutesNotFound from "./components/RoutesNotFound";
import { mainRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesNotFound>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </RoutesNotFound>
    </BrowserRouter>
  );
}

export default App;

