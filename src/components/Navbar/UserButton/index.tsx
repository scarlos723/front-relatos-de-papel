import { FaRegUser } from "react-icons/fa";
import type { MouseEvent } from "react";

import { useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside/useClickOutside";
import { useUserStore } from "../../../store/user";
import { Button } from "../../Button";

export const UserButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user, logout } = useUserStore()

  const {referencia} = useClickOutside({
    handleAction: () => setIsOpen(false),
  });

  const handleOpen = (event: MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-center">
      <button
        type="button"
        className={`radius-full ${
          !isOpen ? "bg-white" : "bg-black"
        } p-2 rounded-full cursor-pointer relative transition-all duration-400`}
        onClick={handleOpen}
      >
        <FaRegUser
          className={`text-[1.2rem] ${
            !isOpen
              ? "text-black"
              : "text-white transition-all duration-400"
          }`}
        />
      </button>
      {isOpen && (
        <div
          ref={referencia}
          className="lg:absolute bottom-0 lg:top-0 right-0 mt-12 z-20"
        >
          <ul>
            <li className="bg-white shadow-lg rounded-lg p-4 w-[300px]">
              <h2 className="text-black font-semibold text-xl text-center">
                Mi cuenta
              </h2>
              <div className="flex flex-col mt-2 overflow-auto h-[250px] pr-4">
                <p className="text-gray-600 text-base text-center">
                  {user?.role}
                </p>
                <p className="text-gray-600 text-base text-center">
                  {user?.email}
                </p>
                <Button
                  className="text-gray-600 text-base text-center mt-auto cursor-pointer"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  Cerrar sesión
                </Button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
