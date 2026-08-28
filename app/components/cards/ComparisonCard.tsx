import type { ReactNode } from "react";

import FeatureRow from "./FeatureRow";

export type ComparisonFeature = {
  label: string;
  icon?: ReactNode;
  labelColor?: string;
};

type ComparisonCardProps = {
  title: string;
  titleIcon: ReactNode;
  features: ComparisonFeature[];
  showGlow?: boolean;
  className?: string;
};

const ComparisonCard = ({
  title,
  titleIcon,
  features,
  showGlow = false,
  className = "",
}: ComparisonCardProps) => {
  return (
    <div
      className={`
        relative flex flex-col overflow-hidden rounded-2xl md:rounded-4xl
        border border-white-smoke/4 bg-rangoon-green
        shadow-[inset_2px_4px_16px_0_#F8F8F80F]
        ${className}
      `}
    >
      {showGlow && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-15 -top-18 left-[10%] h-22.5 w-full max-w-78 rounded-full bg-[#8353D5]/16 blur-[35px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-18 left-[10%] h-22.5 w-full max-w-78 rounded-full bg-[#8353D5]/16 blur-[35px]"
          />
        </>
      )}

      <div className="relative z-10 flex flex-row items-center gap-2.5 border-b border-b-white/12 bg-[#252525] py-3 px-3 md:py-6 md:px-6">
        <span className="inline-flex shrink-0 items-center justify-center">
          {titleIcon}
        </span>

        <p className="text-xl md:text-2xl font-semibold text-white">
          {title}
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-4 p-4.5 md:p-7">
        {features.map((feature, index) => {
          const isLastItem =
            index === features.length - 1;

          return (
            <FeatureRow
              key={`${feature.label}-${index}`}
              label={feature.label}
              icon={feature.icon}
              labelColor={
                feature.labelColor ??
                "text-gray-300"
              }
              showBorder={!isLastItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonCard;