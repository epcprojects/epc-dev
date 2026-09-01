"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  technologies,
  type TechnologyFilter,
  technologyOptions,
} from "@/app/constants/technologyConstants";

import PulsingLabel from "../PulsingLabel";
import TechnologyPills from "../cards/TechnologyPills";

const TechnologyStackSection = () => {
  const [
    selectedTechnology,
    setSelectedTechnology,
  ] = useState<TechnologyFilter>("all");

  const buttonRefs = useRef<
    Array<HTMLButtonElement | null>
  >([]);

  const activeIndex =
    technologyOptions.findIndex(
      (option) =>
        option.value === selectedTechnology,
    );

  const [
    indicatorStyle,
    setIndicatorStyle,
  ] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 0,
  });

  useEffect(() => {
    const activeButton =
      buttonRefs.current[activeIndex];

    if (!activeButton) return;

    const updateIndicator = () => {
      setIndicatorStyle({
        width: activeButton.offsetWidth,
        transform: `translateX(${activeButton.offsetLeft}px)`,
        opacity: 1,
      });
    };

    updateIndicator();

    const resizeObserver =
      new ResizeObserver(updateIndicator);

    resizeObserver.observe(activeButton);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeIndex]);

  const filteredTechnologies =
    selectedTechnology === "all"
      ? technologies
      : technologies.filter(
          (technology) =>
            technology.category ===
            selectedTechnology,
        );

  return (
    <section className="bg-mirage">
      <div className="container max-w-7xl mx-auto pt-8 md:pt-16  px-4 md:px-8 xl:pb-8">
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col gap-6 md:gap-7 items-start md:items-center">
            <div className="flex flex-col gap-3 items-center">
              <PulsingLabel
                text={"Technology Stack "}
              />

              <h3 className="text-2xl md:text-5xl font-semibold text-white leading-[130%] md:leading-[100%] text-center">
                Modern Technology for End-to-End{" "}
                <br className="md:block hidden" />
                Product Development
              </h3>
            </div>

            <div className="relative flex w-full max-w-full flex-row overflow-x-auto rounded-full border border-white/8 bg-heavy-metal p-1  md:p-1.5 [scrollbar-width:none] xl:w-fit [&::-webkit-scrollbar]:hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1.5 bottom-1.5 left-0 rounded-full bg-linear-to-b from-[#8740FF] to-[#512699] transition-all duration-300 ease-out"
                style={{
                  width: indicatorStyle.width,
                  transform:
                    indicatorStyle.transform,
                  opacity:
                    indicatorStyle.opacity,
                }}
              />

              {technologyOptions.map(
                (option, index) => {
                  const isActive =
                    selectedTechnology ===
                    option.value;

                  return (
                    <button
                      key={option.value}
                      ref={(element) => {
                        buttonRefs.current[index] =
                          element;
                      }}
                      type="button"
                      onClick={() => {
                        setSelectedTechnology(
                          option.value,
                        );
                      }}
                      className={`
          relative z-10 shrink-0 cursor-pointer whitespace-nowrap
          rounded-full px-4 md:px-5 py-1.5 md:py-2
          text-base md:text-lg font-semibold
          transition-colors duration-300
          ${
            isActive
              ? "text-white"
              : "text-white-smoke"
          }
        `}
                    >
                      {option.label}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          <TechnologyPills
            key={selectedTechnology}
            items={filteredTechnologies}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;