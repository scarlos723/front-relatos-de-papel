import { Link } from "react-router-dom";
import { Mobile } from "./Mobile";
import { Nav } from "./Nav";


export const Navbar = () => {
  return (
    <header className="backdrop-blur-lg py-4 sticky top-0 bg-black/10">
      <div className="container flex justify-between  ">
        <Link to="/">
          <span className="font-bold text-xl  ">Libros</span>
        </Link>

        <div className="hidden lg:block">
          <Nav />
        </div>
        <Mobile/>
      </div>
    </header>
  );
};
