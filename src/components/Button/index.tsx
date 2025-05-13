import type { ButtonProps } from "./types";

export const Button = ({
  variant = "primary",
  asChild = false,
  disabled = false,
  className = "",
  children,
  onClick,
  type = "button",
  size = "sm",
}: ButtonProps) => {
  const Component = asChild ? "span" : "button";
  const cntr = (values: string[]) => {
    return [...new Set(
      values
        .join(" ")
        .split(" ")
        .map((className) => className.trim())
    )].join(" ");
  };
  const variants={
    primary: "bg-gray-700 text-white hover:bg-gray-600 disabled:bg-gray-300",
    secondary:
      "bg-white border border-gray-300 text-black hover:bg-gray-100 disabled:bg-gray-300",
    outline:"border border-gray-300 text-white hover:bg-gray-100 hover:text-black disabled:bg-gray-300",

  }
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-3 py-2",
    lg: "text-lg  px-4 py-3",
  }
  const baseStyles ="px-2 py-1 cursor-pointer rounded-md font-semibold transition-colors"
  return (
    <Component
      className={cntr(
        [ baseStyles,variants[variant], sizes[size], className]
      )}
      onClick={onClick}
      type={asChild ? undefined : type}
      disabled={disabled}
    >
      {children}
    </Component>
  );
};