import type { ReactNode } from "react";

type StatsCardProps = {
  icon: ReactNode;
  title: ReactNode;
  subtitle: string;
  className?: string;
  minwidthClass?: string;
};

const StatsCard = ({
  icon,
  title,
  subtitle,
  className = "",
  minwidthClass
}: StatsCardProps) => {
  return (
    <div
      className={`flex ${minwidthClass?minwidthClass:"xl:min-w-75.25 "} flex-row items-center gap-3 xl:gap-8 xl:border-r border-b border-b-white/18 xl:border-b-0 xl:border-r-white/18 p-4 md:p-9 ${className}`}
    >
      <div className="shrink-0">
        {icon}
      </div>

      <div className="flex flex-col items-start gap-1 md:gap-1.5">
        <p className="w-fit bg-linear-to-r from-[#8252D4] to-white bg-clip-text text-2xl md:text-5xl font-bold leading-[100%] tracking-[-1%] text-transparent">
          {title}
        </p>

        <p className="text-sm 2xl:text-base text-gray-100 text-nowrap">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;