"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

type CountUpNumberProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

const CountUpNumber = ({
  end,
  suffix = "",
  duration = 1600,
}: CountUpNumberProps) => {
  const elementRef =
    useRef<HTMLSpanElement>(null);

  const animationFrameRef =
    useRef<number | null>(null);

  const hasAnimatedRef = useRef(false);

  const [currentValue, setCurrentValue] =
    useState(0);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          !entry.isIntersecting ||
          hasAnimatedRef.current
        ) {
          return;
        }

        hasAnimatedRef.current = true;

        const startTime =
          performance.now();

        const animateNumber = (
          currentTime: number,
        ) => {
          const elapsed =
            currentTime - startTime;

          const progress = Math.min(
            elapsed / duration,
            1,
          );

          // Smooth ease-out effect
          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          setCurrentValue(
            Math.round(
              end * easedProgress,
            ),
          );

          if (progress < 1) {
            animationFrameRef.current =
              requestAnimationFrame(
                animateNumber,
              );
          }
        };

        animationFrameRef.current =
          requestAnimationFrame(
            animateNumber,
          );

        observer.disconnect();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (
        animationFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );
      }
    };
  }, [duration, end]);

  return (
    <span ref={elementRef}>
      {currentValue}
      {suffix}
    </span>
  );
};

export default CountUpNumber;