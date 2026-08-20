// import type { CSSProperties, ReactNode } from "react";

// type ServicePillProps = {
//   title: string;
//   icon: ReactNode;
//   borderColor: string;
//   iconGradientFrom: string;
//   iconGradientTo: string;
//   rotation?: number;
//   className?: string;
// };

// const ServicePill = ({
//   title,
//   icon,
//   borderColor,
//   iconGradientFrom,
//   iconGradientTo,
//   rotation = 0,
//   className = "",
// }: ServicePillProps) => {
//   const pillStyle = {
//     "--border-color": borderColor,
//     transform: `rotate(${rotation}deg)`,
//   } as CSSProperties;

//   const iconStyle = {
//     background: `linear-gradient(to bottom, ${iconGradientFrom}, ${iconGradientTo})`,
//   };

//   return (
//     <div
//       className={`animated-pill-border w-fit rounded-full p-1 ${className}`}
//       style={pillStyle}
//     >
//       <div className="flex flex-row items-center gap-2.5 rounded-full bg-smoky-black py-1 pr-5 pl-1 shadow-[0_0_12px_0_rgba(0,0,0,0.08)]">
//         <div
//           className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
//           style={iconStyle}
//         >
//           {icon}
//         </div>

//         <p className="text-xl font-medium text-gray-50">
//           {title}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ServicePill;



import type {
  CSSProperties,
  ReactNode,
} from "react";

type ServicePillProps = {
  title: string;
  icon: ReactNode;
  borderColor: string;
  iconGradientFrom: string;
  iconGradientTo: string;
  rotation?: number;
  className?: string;
};

const ServicePill = ({
  title,
  icon,
  borderColor,
  iconGradientFrom,
  iconGradientTo,
  rotation = 0,
  className = "",
}: ServicePillProps) => {
  const pillStyle: CSSProperties = {
    transform: `rotate(${rotation}deg)`,
  };

  const staticBorderStyle: CSSProperties = {
    backgroundImage: `radial-gradient(
      ellipse at center,
      ${borderColor},
      #000000
    )`,
  };

  const animatedBorderStyle: CSSProperties = {
    backgroundImage: `conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 250deg,
      color-mix(in srgb, ${borderColor} 15%, transparent) 280deg,
      color-mix(in srgb, ${iconGradientFrom} 50%, transparent) 315deg,
      rgba(255, 255, 255, 0.25) 330deg,
      transparent 360deg
    )`,
  };

  const iconStyle: CSSProperties = {
    backgroundImage: `linear-gradient(
      to bottom,
      ${iconGradientFrom},
      ${iconGradientTo}
    )`,
  };

  return (
   <div
  className={`relative isolate w-max min-w-max overflow-hidden rounded-full p-1 ${className}`}
  style={pillStyle}
>
      {/* Static radial border */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={staticBorderStyle}
      />

      {/* Animated moving highlight */}
      <span
        className="animate-spin-slow pointer-events-none absolute -inset-full opacity-20"
        style={animatedBorderStyle}
      />

      {/* Actual pill content */}
      <div className="relative z-10 flex flex-row flex-nowrap items-center gap-2.5 rounded-full bg-smoky-black py-1 pr-5 pl-1 shadow-[0_0_12px_0_rgba(0,0,0,0.08)]">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
          style={iconStyle}
        >
          {icon}
        </div>

        <p className="text-xl font-medium text-gray-50">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ServicePill;