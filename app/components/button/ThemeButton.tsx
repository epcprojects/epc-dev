"use client";

import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

type ThemeButtonVariant =
  | "gradient"
  | "white";

type ThemeButtonProps =
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "onClick"
  > & {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    variant?: ThemeButtonVariant;
    icon?: ReactNode;
    showIcon?: boolean;
  };

const variantClasses: Record<
  ThemeButtonVariant,
  string
> = {
  gradient:
    "bg-linear-to-r from-purple-blue via-medium-purple to-purple-blue text-desert-storm",
  white:
    "bg-white text-mirage",
};

const ThemeButton = ({
  label,
  onClick,
  variant = "gradient",
  icon,
  className = "",
  type = "button",
  showIcon=true,
  ...props
}: ThemeButtonProps) => {
  const showParticles = variant === "gradient";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        group relative isolate flex flex-row items-center gap-3
        overflow-hidden rounded-xl
        px-3 py-2 text-sm font-medium
        transition-opacity duration-200 hover:opacity-90
        md:px-4.5 md:py-3 md:text-lg
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {showParticles && (
        <span
          aria-hidden="true"
          className="button-particles"
        >
          {Array.from({ length: 10 }).map(
            (_, index) => (
              <i
                key={index}
                className="button-particle"
              />
            ),
          )}
        </span>
      )}

      <span className="relative z-10">
        {label}
      </span>

      {icon && showIcon && (
        <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:rotate-45">
          {icon}
        </span>
      )}
    </button>
  );
};

export default ThemeButton;