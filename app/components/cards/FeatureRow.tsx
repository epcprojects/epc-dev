import type { ReactNode } from "react";

type FeatureRowProps = {
  label: string;
  icon?: ReactNode;
  showBorder?: boolean;
  labelColor?: string;
};

const FeatureRow = ({
  label,
  icon,
  showBorder = true,
  labelColor = "text-white",
}: FeatureRowProps) => {
  return (
    <div
      className={`
        flex flex-row items-center gap-3
        ${
          showBorder
            ? "border-b border-b-white/12 pb-4"
            : ""
        }
      `}
    >
      {icon && icon}

      <p
        className={`
          text-sm md:text-base font-semibold
          ${labelColor}
        `}
      >
        {label}
      </p>
    </div>
  );
};

export default FeatureRow;