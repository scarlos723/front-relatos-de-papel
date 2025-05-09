import { useEffect, useRef } from "react";
import { UseClickOutsideProps } from "./types";

export const useClickOutside = ({ handleAction }: UseClickOutsideProps) => {
  const referencia = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        referencia.current &&
        !referencia.current.contains(event.target as Node)
      ) {
        handleAction()
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { referencia };
};
