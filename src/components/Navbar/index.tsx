import { Link } from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";

import { Mobile } from "./Mobile";
import { NavigationMenu } from "./NavigationMenu";
import { ROUTES } from "../../constants/routes";

export const Navbar = () => {
  return (
    <header className="backdrop-blur-lg py-4 sticky top-0 bg-black/10 z-10">
      <div className="container flex justify-between  ">
        <Link to={ROUTES.HOME}>
          <span className="flex font-bold text-xl items-center ">
            <IoLibraryOutline className="inline-block text-2xl mr-1" />
            Libros
          </span>
        </Link>
        <div className="hidden lg:block">
          <NavigationMenu />
        </div>
        <Mobile />
      </div>
    </header>
  );
};
