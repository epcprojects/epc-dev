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
        group flex flex-row items-center gap-3 rounded-xl
       px-3 py-2 md:px-4.5 md:py-3 text-sm md:text-lg font-medium
        transition-opacity duration-200 hover:opacity-90
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>

      {icon && (
        <span className="shrink-0 transition-all duration-300 group-hover:rotate-45">
          {icon}
        </span>
      )}
    </button>
  );
};

export default ThemeButton;