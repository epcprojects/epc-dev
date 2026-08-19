"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

type HorizontalScrollSectionProps = {
  leftContent: ReactNode;
  items: ReactNode[];
};

type HorizontalSlideProps = {
  children: ReactNode;
  progress: MotionValue<number>;
  index: number;
};

const HorizontalSlide = ({
  children,
  progress,
  index,
}: HorizontalSlideProps) => {
  const start = index * 0.22;
  const end = Math.min(start + 0.2, 1);

  const translateY = useTransform(
    progress,
    [start, end],
    [180, 0],
  );

  const opacity = useTransform(
    progress,
    [start, end],
    [0, 1],
  );

  const scale = useTransform(
    progress,
    [start, end],
    [0.96, 1],
  );

  return (
    <motion.div
      className="w-[50vw] max-w-[640px] shrink-0"
      style={{
        y: translateY,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
};

const HorizontalScrollSection = ({
  leftContent,
  items,
}: HorizontalScrollSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollDistance, setScrollDistance] =
    useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollDistance],
  );

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const calculateDistance = () => {
      setScrollDistance(
        Math.max(
          0,
          track.scrollWidth - viewport.clientWidth,
        ),
      );
    };

    calculateDistance();

    const resizeObserver = new ResizeObserver(
      calculateDistance,
    );

    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] border-y border-white/12 "
    >
      <div
        ref={viewportRef}
        className="sticky top-0 flex h-screen items-center overflow-hidden container max-w-7xl mx-auto"
      >
        <motion.div
          ref={trackRef}
          className="flex w-max items-center"
          style={{
            x: translateX,
          }}
        >
          {/* Left panel is part of moving track */}
          <div className="flex h-screen w-[50vw] max-w-[640px] shrink-0 items-center border-r border-white/12 p-8">
            {leftContent}
          </div>

          {/* Cards rise and fade while whole track moves */}
          {items.map((item, index) => (
            <HorizontalSlide
              key={index}
              progress={scrollYProgress}
              index={index}
            >
              {item}
            </HorizontalSlide>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;