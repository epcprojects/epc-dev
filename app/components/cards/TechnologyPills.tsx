"use client";

import { TechnologyPillItem } from "@/app/constants/technologyConstants";
import {
  useEffect,
  useState,
  type ReactNode,
} from "react";



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

  useEffect(() => {
    if (
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
  }, [hoveredIndex, items.length]);

  const visibleActiveIndex =
    hoveredIndex ?? autoActiveIndex;

  return (
    <div className="flex flex-wrap gap-4.5">
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
            className={`
              rounded-full p-px
              transition-all duration-300 ease-out
              ${
                isActive
                  ? "bg-linear-to-r from-white/0 via-[#A6C8D0] to-[#4434F0]"
                  : "bg-white/8"
              }
            `}
          >
            <div className="flex flex-row items-center gap-2.5 rounded-full bg-woodsmoke px-4 py-2.25 shadow-[0_0_10.63px_0_#00000014]">
              <span className="inline-flex shrink-0 items-center justify-center">
                {item.icon}
              </span>

              <p className="text-lg text-gray-50">
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