// components/ui/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  color?: string; // custom override (e.g. hex or Tailwind class)
  padding?: string; // override padding (e.g. "px-6 py-3")
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "md",
  color,
  padding,
  className,
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "rounded-2xl font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<typeof variant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  };

  const sizeStyles: Record<typeof size, string> = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        baseStyles,
        color ? color : variantStyles[variant],
        padding ? padding : sizeStyles[size],
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
