"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  motion,
  useMotionValueEvent,
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
  totalItems: number;
  isActive: boolean;
};

const HorizontalSlide = ({
  children,
  progress,
  index,
  totalItems,
  isActive,
}: HorizontalSlideProps) => {
  const slideRef = useRef<HTMLDivElement>(null);

  const isFirstCard = index === 0;

  const isLastTwoCards =
    index >= totalItems - 2;

  const shouldAnimateEntrance =
    !isFirstCard && !isLastTwoCards;

  const start = Math.min(
    index * 0.13,
    0.72,
  );

  const end = Math.min(
    start + 0.12,
    0.84,
  );

  const translateY = useTransform(
    progress,
    [start, end],
    shouldAnimateEntrance
      ? [180, 0]
      : [0, 0],
  );

  const opacity = useTransform(
    progress,
    [start, end],
    shouldAnimateEntrance
      ? [0, 1]
      : [1, 1],
  );

  const scale = useTransform(
    progress,
    [start, end],
    shouldAnimateEntrance
      ? [0.96, 1]
      : [1, 1],
  );

  useEffect(() => {
    const container = slideRef.current;

    if (!container) return;

    const videos = Array.from(
      container.querySelectorAll<HTMLVideoElement>(
        "video",
      ),
    );

    videos.forEach((video) => {
      if (isActive) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [isActive]);

  return (
    <motion.div
      ref={slideRef}
      className="
        w-screen shrink-0
        md:w-[50vw]
      "
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
  const sectionRef =
    useRef<HTMLElement>(null);

  const viewportRef =
    useRef<HTMLDivElement>(null);

  const trackRef =
    useRef<HTMLDivElement>(null);

  const [scrollDistance, setScrollDistance] =
    useState(0);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.9, 1],
    [
      0,
      -scrollDistance,
      -scrollDistance,
    ],
  );

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const calculateDistance = () => {
      const trackStyles =
        window.getComputedStyle(track);

      const rightPadding =
        Number.parseFloat(
          trackStyles.paddingRight,
        ) || 0;

      const distance =
        track.scrollWidth -
        viewport.clientWidth -
        rightPadding;

      setScrollDistance(
        Math.max(0, distance),
      );
    };

    calculateDistance();

    const resizeObserver =
      new ResizeObserver(calculateDistance);

    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();
    };
  }, [items.length]);

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (progress) => {
      if (!items.length) return;

      const horizontalProgress =
        Math.min(progress / 0.9, 1);

      const nextIndex = Math.min(
        Math.floor(
          horizontalProgress *
            items.length,
        ),
        items.length - 1,
      );

      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex
          ? currentIndex
          : nextIndex,
      );
    },
  );

  const sectionHeight = `${Math.max(
    400,
    items.length * 80,
  )}vh`;

  return (
    <>
      <section className="border-y border-white/12 bg-mirage xl:hidden">
        <div className="border-b border-white/12 px-6 py-12">
          {leftContent}
        </div>

        <div className="flex flex-col">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                border-b border-white/12
                [&>*]:h-auto!
                [&>*]:w-full!
              "
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative hidden border-y border-white/12 xl:block"
        style={{
          height: sectionHeight,
        }}
      >
        <div
          ref={viewportRef}
          className="
            sticky top-0 z-10 flex h-svh
            items-center overflow-hidden
            md:h-screen md:bg-mirage
          "
        >
          <motion.div
            ref={trackRef}
            className="
              flex w-max items-start md:items-center
              px-4
              md:px-16
            "
            style={{
              x: translateX,
            }}
          >
            <div
              className="
                flex h-svh w-screen shrink-0
                items-center border-r
                border-white/12 bg-mirage
                px-6 py-8
                md:h-screen md:w-[50vw]
                md:max-w-160 md:p-8
              "
            >
              {leftContent}
            </div>

            {items.map((item, index) => (
              <HorizontalSlide
                key={index}
                progress={scrollYProgress}
                index={index}
                totalItems={items.length}
                isActive={
                  activeIndex === index
                }
              >
                {item}
              </HorizontalSlide>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HorizontalScrollSection;