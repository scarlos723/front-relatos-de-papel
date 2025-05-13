import { IoLibraryOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { ROUTES } from "../../routes";
import { Mobile } from "./Mobile";
import { Desktop } from "./Desktop";
import { CartButton } from "./CartButton";

export const Navbar = () => {
  return (
    <header className="backdrop-blur-lg py-4 sticky top-0 bg-black/10 z-10">
      <div className="container flex justify-between gap-4">
        <Link to={ROUTES.HOME}>
          <span className="flex font-bold text-xl items-center ">
            <IoLibraryOutline className="inline-block text-2xl mr-1" />
          </span>
        </Link>
        <Desktop />
        <Mobile />
        <CartButton />
      </div>
    </header>
  );
};
