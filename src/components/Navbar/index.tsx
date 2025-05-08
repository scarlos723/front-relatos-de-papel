import { IoLibraryOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import { Mobile } from "./Mobile";
import { NavigationMenu } from "./NavigationMenu";

export const Navbar = () => {
  return (
    <header className="backdrop-blur-lg py-4 sticky top-0 bg-black/10 z-10">
      <div className="container flex justify-between  ">
        <Link to={ROUTES.HOME}>
          <span className="flex font-bold text-xl items-center ">
            <IoLibraryOutline className="inline-block text-2xl mr-1" />
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
