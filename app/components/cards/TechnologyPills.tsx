"use client";

import type { TechnologyPillItem } from "@/app/constants/technologyConstants";
import { useEffect, useState } from "react";

type TechnologyPillsProps = {
  items: TechnologyPillItem[];
};

const TechnologyPills = ({
  items,
}: TechnologyPillsProps) => {
  const [autoActiveIndex, setAutoActiveIndex] =
    useState<number | null>(null);

  const [hoveredIndex, setHoveredIndex] =
    useState<number | null>(null);

  const [isPointerInside, setIsPointerInside] =
    useState(false);

  useEffect(() => {
    if (
      isPointerInside ||
      hoveredIndex !== null ||
      items.length === 0
    ) {
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const activateRandomPill = () => {
      const randomDelay =
        1000 + Math.random() * 1000;

      timer = setTimeout(() => {
        setAutoActiveIndex((currentIndex) => {
          if (items.length === 1) return 0;

          let nextIndex = Math.floor(
            Math.random() * items.length,
          );

          while (nextIndex === currentIndex) {
            nextIndex = Math.floor(
              Math.random() * items.length,
            );
          }

          return nextIndex;
        });

        activateRandomPill();
      }, randomDelay);
    };

    activateRandomPill();

    return () => {
      clearTimeout(timer);
    };
  }, [
    isPointerInside,
    hoveredIndex,
    items.length,
  ]);

  const visibleActiveIndex = isPointerInside
    ? hoveredIndex
    : autoActiveIndex;

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2 md:gap-4.5"
      onMouseEnter={() => {
        setIsPointerInside(true);
        setAutoActiveIndex(null);
      }}
      onMouseLeave={() => {
        setIsPointerInside(false);
        setHoveredIndex(null);
      }}
    >
      {items.map((item, index) => {
        const isActive =
          visibleActiveIndex === index;

        return (
          <div
            key={`${item.label}-${index}`}
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
            }}
            className="
              relative isolate rounded-full
              bg-white/8 p-px
            "
          >
            {/* Animated active gradient and shadows */}
            <div
              aria-hidden="true"
              className={`
                pointer-events-none absolute inset-0
                rounded-full
                bg-linear-to-r
                from-white/0 via-[#A6C8D0] to-[#4434F0]
                [box-shadow:0_0_4px_0_#7F41E9,0_4px_64px_0_#FF5C000D,0_4px_25px_0_#FFFFFF14]
                transition-opacity
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            />

            <div className="relative z-10 flex flex-row items-center gap-2.5 rounded-full bg-woodsmoke px-3.5 py-2 shadow-[0_0_10.63px_0_#00000014] md:px-4 md:py-2.25">
              <span className="inline-flex shrink-0 items-center justify-center">
                {item.icon}
              </span>

              <p className="text-sm text-gray-50 md:text-lg">
                {item.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyPills;