"use client";

import { useState, type ReactNode } from "react";
import { Autoplay } from "swiper/modules";
import Image, { type StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { ArrowLeftIcon, InvertedCommasIcon } from "@/public/icons";

export type Testimonial = {
  id: string | number;
  text: string;
  authorName: string;
  authorDescription: string;
  authorImage: StaticImageData | string;
  authorImageAlt?: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

type NavigationButtonProps = {
  direction: "previous" | "next";
  disabled: boolean;
  onClick: () => void;
  icon: ReactNode;
};

const NavigationButton = ({
  direction,
  disabled,
  onClick,
  icon,
}: NavigationButtonProps) => {
  const shouldRotateIcon = direction === "next";

  if (disabled) {
    return (
      <button
        type="button"
        disabled
        aria-label={
          direction === "previous" ? "Previous testimonial" : "Next testimonial"
        }
        className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-lg border border-dark-gray opacity-50 xl:h-14 xl:w-14 xl:rounded-xl"
      >
        <span className={shouldRotateIcon ? "rotate-180" : ""}>{icon}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        direction === "previous" ? "Previous testimonial" : "Next testimonial"
      }
      className="h-11 w-11 overflow-hidden rounded-lg bg-linear-to-r from-medium-teal-blue via-[#A6C8D0] to-[#4434F0] p-px xl:h-14 xl:w-14 xl:rounded-xl"
    >
      <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[7px] bg-woodsmoke xl:rounded-[11px]">
        <span className="absolute top-0 h-2 w-11 rounded-full bg-medium-teal-blue blur-[10px] xl:w-14" />

        <span
          className={
            shouldRotateIcon ? "relative z-10 rotate-180" : "relative z-10"
          }
        >
          {icon}
        </span>
      </span>
    </button>
  );
};

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);

  const [isEnd, setIsEnd] = useState(testimonials.length <= 1);

  const updateNavigationState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  if (!testimonials.length) return null;

  return (
    <section className="bg-mirage pt-4 pb-8 xl:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <div className="flex flex-col items-start gap-5 xl:gap-13">
          <div className="flex w-full flex-row items-center gap-5 xl:w-auto xl:gap-10.5">
            <h2 className="shrink-0 text-base text-gray-50 xl:text-2xl">
              Our Clients Stories
            </h2>

            <div className="h-px flex-1 bg-white/12 xl:w-46 xl:flex-none" />
          </div>

          <div className="flex w-full flex-col gap-3 xl:flex-row xl:gap-30">
            <div className="shrink-0 origin-left scale-60 xl:scale-100">
              <InvertedCommasIcon />
            </div>

            <div className="relative min-w-0 flex-1">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                speed={650}
                allowTouchMove
                rewind={testimonials.length > 1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper);
                  updateNavigationState(swiper);
                }}
                onSlideChange={updateNavigationState}
                onReachBeginning={updateNavigationState}
                onReachEnd={updateNavigationState}
                className="w-full [&_.swiper-wrapper]:items-stretch"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="h-auto!">
                    <div className="flex h-full flex-col justify-between gap-3 xl:gap-30">
                      <p className="text-xl leading-[140%] font-medium text-white sm:text-3xl xl:text-42">
                        {testimonial.text}
                      </p>

                      <div className="flex flex-row items-center border-t border-t-white/12 pt-6 pr-0 pb-16 xl:pt-10 xl:pr-36 xl:pb-0">
                        <div className="flex min-w-0 flex-row items-center gap-4 xl:gap-6">
                          <div className="shrink-0 overflow-hidden rounded-lg bg-moon-mist">
                            <Image
                              src={testimonial.authorImage}
                              alt={
                                testimonial.authorImageAlt ??
                                testimonial.authorName
                              }
                              width={72}
                              height={72}
                              className="h-12 w-12 object-cover xl:h-18 xl:w-18"
                            />
                          </div>

                          <div className="flex min-w-0 flex-col gap-1 xl:gap-2">
                            <p className="text-lg leading-6 font-bold text-white-smoke xl:text-26">
                              {testimonial.authorName}
                            </p>

                            <p className="text-sm text-iron xl:text-base">
                              {testimonial.authorDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div   className="
    absolute bottom-0 z-10
    flex flex-row gap-2
    right-0 
    xl:gap-2.5
  ">
                <NavigationButton
                  direction="previous"
                  disabled={isBeginning}
                  onClick={() => {
                    swiperInstance?.slidePrev();
                  }}
                  icon={<ArrowLeftIcon />}
                />

                <NavigationButton
                  direction="next"
                  disabled={isEnd}
                  onClick={() => {
                    swiperInstance?.slideNext();
                  }}
                  icon={<ArrowLeftIcon />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
