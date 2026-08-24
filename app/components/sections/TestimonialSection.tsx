"use client";

import { useState, type ReactNode } from "react";

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
        className="flex h-14 w-14 cursor-not-allowed items-center justify-center rounded-xl border border-dark-gray opacity-50"
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
      className="h-14 w-14 overflow-hidden rounded-xl bg-linear-to-r from-medium-teal-blue via-[#A6C8D0] to-[#4434F0] p-px"
    >
      <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[11px] bg-woodsmoke">
        <span className="absolute top-0 h-2 w-14 rounded-full bg-medium-teal-blue blur-[10px]" />

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
    <section className="bg-woodsmoke py-16">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="flex flex-col items-start gap-13">
          <div className="flex flex-row items-center gap-10.5">
            <p className="text-2xl text-gray-50">Testimonials</p>

            <div className="h-px w-46 bg-white/12" />
          </div>

          <div className="flex w-full flex-row gap-30">
            <div className="shrink-0">
              <InvertedCommasIcon />
            </div>

            <div className="relative min-w-0 flex-1">
              <Swiper
                slidesPerView={1}
                speed={650}
                allowTouchMove
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
                    <div className="flex gap-30 flex-col h-full justify-between">
                      <p className="text-42 leading-[140%] font-medium text-white">
                        {testimonial.text}
                      </p>
                      <div className="flex flex-row items-center border-t border-t-white/12 pt-10 pr-36">
                        <div className="flex flex-row items-center gap-6">
                          <div className="shrink-0 overflow-hidden rounded-lg bg-moon-mist">
                            <Image
                              src={testimonial.authorImage}
                              alt={
                                testimonial.authorImageAlt ??
                                testimonial.authorName
                              }
                              width={72}
                              height={72}
                              className="h-18 w-18 object-cover"
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <p className="text-26 leading-6 font-bold text-white-smoke">
                              {testimonial.authorName}
                            </p>

                            <p className="text-base text-iron">
                              {testimonial.authorDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute right-0 bottom-0 z-10 flex flex-row gap-2.5">
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
