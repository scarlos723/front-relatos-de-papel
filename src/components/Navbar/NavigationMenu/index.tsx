import { Link } from "react-router-dom";

import { Button } from "../../Button";
import { ROUTES } from "../../../constants/routes";
import type { NavigationMenuProps } from "./types";
import { useUserStore } from "../../../store/user";
import { UserButton } from "../UserButton";

export const NavigationMenu = (props: NavigationMenuProps) => {
  const { user } = useUserStore()

  const onClickLink = () => {
    if (props.setOpen) {
      props.setOpen(false);
    }
  };

  const MENU_ROUTES = [
    { name: "Catálogo", path: ROUTES.CATALOG }
  ];

  return (
    <nav className="items-center gap-4 flex justify-between flex-col lg:flex-row">
      <div className="flex gap-4 relative flex-col lg:flex-row items-center">
        {MENU_ROUTES.map(({ name, path }, index) => (
          <Link
            to={path}
            key={index}
            className="flex items-center gap-4 lg:w-auto  mb-auto"
            onClick={onClickLink}
          >
            <p className="text-center lg:underline font-semibold border border-gray-100 lg:border-none px-2 rounded-md py-1">
              {name}
            </p>
          </Link>
        ))}
      </div>
      { user ? (
        <UserButton />
      ) : (
        <div className="flex justify-between mt-auto lg:mt-0 gap-4 w-[310px]">
          <Link to={ROUTES.LOGIN} className="w-full">
            <Button type="button" variant="primary" className="w-full">
              Iniciar sesión
            </Button>
          </Link>
          <Link to={ROUTES.REGISTER} className="w-full">
            <Button type="button" variant="secondary" className="w-full">
              Registrarse
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
