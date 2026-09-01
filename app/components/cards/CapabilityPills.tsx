"use client";

import {
  useEffect,
  useState,
} from "react";

type CapabilityPillsProps = {
  pills: string[];
};

const CapabilityPills = ({
  pills,
}: CapabilityPillsProps) => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    if (pills.length <= 1) return;

    const interval = window.setInterval(
      () => {
        setActiveIndex((currentIndex) =>
          currentIndex === pills.length - 1
            ? 0
            : currentIndex + 1,
        );
      },
      1500,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, [pills.length]);

  return (
    <div className="flex flex-wrap gap-2 md:gap-2.5">
      {pills.map((pill, index) => {
        const isActive =
          activeIndex === index;

        return (
          <div
            key={pill}
            className="
              relative isolate overflow-hidden
              rounded-full bg-white/8 p-px
            "
          >
            <div
              aria-hidden="true"
              className={`
                pointer-events-none
                absolute inset-0
                rounded-full
                bg-linear-to-r
                from-white/0
                via-[#A6C8D0]
                to-[#4434F0]
                transition-opacity
                duration-500 ease-out
                ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            />

            <div
              className="
                relative z-10
                rounded-full bg-[#303030]
                px-3 py-2
                text-xs text-gray-50
                shadow-[0_0_10px_0_#00000014]
                md:px-4 md:py-2 md:text-sm
              "
            >
              {pill}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CapabilityPills;