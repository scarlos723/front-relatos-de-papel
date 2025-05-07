import { Link } from "react-router-dom"
import { Button } from "../Button"
export const Desktop = () => {
  return (
    <nav>
      <ul
        className={`items-center gap-4 hidden lg:flex`}
      >
        <li>
          <Link to={"/catalogo"}>
            <span className="underline font-semibold">Catálogo</span>
          </Link>
        </li>
        <li>
          <Button type="button" variant="primary">
        Iniciar sesión
          </Button>
        </li>
        <li>
          <Button type="button" variant="secondary">
        Registrarse
          </Button>
        </li>
      </ul>
    </nav>
  )
}
