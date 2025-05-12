import { MdTransitEnterexit } from "react-icons/md";
import { useUserStore } from "../../../store/user";
import { Button } from "../../Button";
import type { UserProps } from "./types";

export const User = ({ ref, handleLogout, handleClose }: UserProps) => {
  const { user } = useUserStore()

  return (
    <div
      ref={ref}
      className="absolute top-0 lg:top-0 right-0 lg:mt-12 z-20"
    >
      <ul>
        <li className="relative bg-white shadow-lg rounded-lg p-4 w-screen h-screen lg:w-[300px] lg:h-auto min-h-[400px] grid grid-rows-[auto_1fr] gap-4">
          <h2 className="text-black font-semibold text-xl text-center">
            Mi cuenta
          </h2>
          <div className="flex flex-col mt-2 overflow-auto h-full">
            <p className="text-gray-600 text-base text-center">
              {user?.role}
            </p>
            <p className="text-gray-600 text-base text-center">
              {user?.email}
            </p>
            <Button
              className="text-gray-600 text-base text-center mt-auto cursor-pointer"
              onClick={() => handleLogout()}
            >
              Cerrar sesión
            </Button>
          </div>
          <div className="absolute lg:hidden top-2 right-2 ">
            <button
              type="button"
              onClick={() => handleClose()}
              className="text-gray-600 cursor-pointer"
            >
              <MdTransitEnterexit size={38} />
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}
