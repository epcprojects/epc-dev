import type { ReactNode } from "react";

type StatsCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
};

const StatsCard = ({
  icon,
  title,
  subtitle,
  className = "",
}: StatsCardProps) => {
  return (
    <div
      className={`flex flex-row items-center gap-3 md:gap-8 md:border-r border-b border-b-white/18 md:border-b-0 md:border-r-white/18 p-4 md:p-9 ${className}`}
    >
      <div className="shrink-0">
        {icon}
      </div>

      <div className="flex flex-col items-start gap-1 md:gap-1.5">
        <p className="w-fit bg-linear-to-r from-[#8252D4] to-white bg-clip-text text-2xl md:text-5xl font-bold leading-[100%] tracking-[-1%] text-transparent">
          {title}
        </p>

        <p className="text-sm md:text-base text-gray-100 text-nowrap">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;