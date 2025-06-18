import type { MouseEvent, ReactNode } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  asChild?: boolean;
  id?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}