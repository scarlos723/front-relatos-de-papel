import { Link } from "react-router-dom";
import { Button } from "../Button";
export const NavigationMenu = (props: {
  setOpen?: (value: boolean) => void;
}) => {
  const onClickLink = () => {
    if (props.setOpen) {
      props.setOpen(false);
    }
  };
  return (
    <nav className={`items-center gap-4 grid lg:flex `}>
      <Link
        to={"/catalogo"}
        className="w-full lg:w-auto  mb-auto"
        onClick={onClickLink}
      >
        <p className="text-center lg:underline font-semibold border border-gray-100 lg:border-none px-2 rounded-md py-1">
          Catálogo
        </p>
      </Link>
      <div className="flex justify-between mt-auto lg:mt-0 gap-4 lg:w-[310px]">
        <Button type="button" variant="primary" className="w-full">
          Iniciar sesión
        </Button>
        <Button type="button" variant="secondary" className="w-full">
          Registrarse
        </Button>
      </div>
    </nav>
  );
};
