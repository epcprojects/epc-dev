"use client";

import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ThemeButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "gradient" | "white";
    children: ReactNode;
    icon?: ReactNode;
  };

const ThemeButton = ({
  variant = "gradient",
  children,
  icon,
  className = "",
  type = "button",
  ...props
}: ThemeButtonProps) => {
  const variantClasses = {
    gradient:
      "bg-linear-to-r from-purple-blue via-medium-purple to-purple-blue text-desert-storm",
    white:
      "bg-white text-mirage",
  };

  return (
    <button
      type={type}
      className={`
        flex flex-row items-center gap-3 rounded-xl
        px-4.5 py-3 text-lg font-medium
        transition-opacity duration-200 hover:opacity-90
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>

      {icon && (
        <span className="shrink-0">
          {icon}
        </span>
      )}
    </button>
  );
};

export default ThemeButton;