import { FaRegUser } from "react-icons/fa";
import type { MouseEvent } from "react";

import { useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside/useClickOutside";
import { useUserStore } from "../../../store/user";
import { User } from "../User";

export const UserButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { logout } = useUserStore()

  const { referencia } = useClickOutside({
    handleAction: () => setIsOpen(false),
  });

  const handleOpen = (event: MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="static lg:relative text-center">
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
        <User ref={referencia} handleLogout={handleLogout} handleClose={handleClose}/>
      )}
    </div>
  )
}
