import { ReactButtonProps } from "@/commons/types/generics";
import { ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "default";
} & ReactButtonProps;

const variants = {
  default: "",
  primary: "bg-primary-red hover:bg-red-700 text-white transition duration-300",
  secondary:
    "bg-white border border-primary-red text-primary-red hover:bg-red-100 transition duration-300",
};

export const Button = ({
  children,
  variant = "default",
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button className={`${className} ${variants[variant]} `} {...rest}>
      {children}
    </button>
  );
};
