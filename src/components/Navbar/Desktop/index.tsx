import { Link } from "react-router-dom"

import { Button } from "../../Button"
import { ROUTES } from "../../../constants/routes"

export const Desktop = () => {
  return (
    <nav>
      <ul
        className={`items-center gap-4 hidden lg:flex`}
      >
        <li>
          <Link to={ROUTES.CATALOG}>
            <span className="underline font-semibold">Catálogo</span>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.LOGIN}>
            <Button type="button" variant="primary">
              Iniciar sesión
            </Button>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.REGISTER}>
            <Button type="button" variant="secondary">
              Registrarse
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
