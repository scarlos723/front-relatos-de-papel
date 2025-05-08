import { IoSearch } from "react-icons/io5";

export const SearchIcon = (props: { size?: number; color?: string }) => {
  return (
    <IoSearch
      size={props?.size}
      color={props?.color}
      className="absolute top-1/2 left-2 transform -translate-y-1/2"
    />
  );
};
