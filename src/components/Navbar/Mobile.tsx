import { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "./NavigationMenu";

const ButtonIcon = (props: { open: boolean; onClick: () => void }) => {
  return (
    <button onClick={props.onClick}>
      {props.open ? (
        "X"
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      )}
    </button>
  );
};

export const Mobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-blur lg:hidden">
      <ButtonIcon onClick={() => setOpen(!open)} open={open}></ButtonIcon>
      <div
        className={`container py-4 absolute transition top-0 left-0 grid grid-rows-[2fr_12fr] w-full h-screen backdrop-blur-lg bg-gray-400 ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="ml-auto mb-auto flex w-full items-center justify-between p-2">
          <Link
            to={"/"}
            onClick={() => setOpen(!open)}
            className="font-bold text-xl"
          >
            Libros
          </Link>
          <ButtonIcon onClick={() => setOpen(!open)} open={open}></ButtonIcon>
        </div>
        <NavigationMenu setOpen={setOpen}></NavigationMenu>
      </div>
    </div>
  );
};
