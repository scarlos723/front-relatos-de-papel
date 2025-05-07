export const Button = (props: {
  variant: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  asChild?: boolean;
}) => {
  const { variant, asChild, disabled, children, onClick, type } = props;
  const buttonStyles = {
    primary: "bg-gray-700 text-white hover:bg-opacity-50 disable:bg-gray-300",
    secondary:
      "bg-white border-white text-black rounde-md hover:bg-opacity-50 disabled:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-opacity-50 disable:bg-red-300",
  };

  const buttonProps = { disabled, onClick, type };
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold ${!variant ? buttonStyles["primary"] : buttonStyles[variant]}`}
      {...(asChild ? null : buttonProps)} // If asChild is true, don't spread buttonProps
    >
      {children}
    </button>
  );
};
