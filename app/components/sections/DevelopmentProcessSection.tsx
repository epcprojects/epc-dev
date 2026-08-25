"use client";

import { useRef, useState } from "react";
import type { StaticImageData } from "next/image";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import { ArrowUpIcon } from "@/public/icons";
import PulsingLabel from "../PulsingLabel";
import ThemeButton from "../button/ThemeButton";
import ProcessCard from "../cards/ProcessCard";

export type ProcessStep = {
  number: string;
  image: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: string;
};

type DevelopmentProcessSectionProps = {
  processSteps: ProcessStep[];
};

const DevelopmentProcessSection = ({
  processSteps,
}: DevelopmentProcessSectionProps) => {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!processSteps.length) return;

    const nextIndex = Math.min(
      Math.floor(progress * processSteps.length),
      processSteps.length - 1,
    );

    setActiveIndex((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex,
    );
  });

  if (!processSteps.length) return null;

  const activeProcess = processSteps[activeIndex];
  const progressValue =
    (activeIndex + 1) / processSteps.length;

  return (
    <section className="bg-mirage pb-8 xl:pb-24">
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 xl:hidden">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-2.5">
            <PulsingLabel text="Our Development Process" />

            <h3 className="text-3xl font-semibold leading-[100%] text-white md:text-4xl">
              From Idea To Execution
            </h3>

            <p className="text-base leading-relaxed text-gray-100 md:text-lg">
              We have become experts in creating top-notch digital products. We
              design beautifully and develop excellently. And we care deeply
              about what we do.
            </p>
          </div>

          <ThemeButton
            label="Get a Free Consultation"
            variant="gradient"
            icon={<ArrowUpIcon />}
            onClick={() => {}}
          />
        </div>

        <div className="flex flex-col gap-12">
          {processSteps.map((processStep) => (
            <ProcessCard
              key={processStep.number}
              number={processStep.number}
              image={processStep.image}
              imageAlt={processStep.imageAlt}
              title={processStep.title}
              description={processStep.description}
            />
          ))}
        </div>
      </div>

      <div
        ref={scrollSectionRef}
        className="relative hidden xl:block"
        style={{
          height: `${100 + processSteps.length * 40}vh`,
        }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-mirage">
          <div className="container mx-auto flex max-w-7xl flex-col xl:gap-20 2xl:gap-35 px-8 pt-8 2xl:pt-16">
            <div className="flex flex-col gap-30">
              <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col items-start gap-3">
                  <PulsingLabel text="Our Development Process" />

                  <h3 className="text-5xl font-semibold leading-[100%] text-white">
                    From Idea To Execution
                  </h3>

                  <p className="text-xl text-gray-100">
                    We have become experts in creating top-notch digital
                    products. We design beautifully and develop excellently. And
                    we care deeply about what we do.
                  </p>
                </div>

                <ThemeButton
                  label="Get a Free Consultation"
                  variant="gradient"
                  icon={<ArrowUpIcon />}
                  onClick={() => {
                     window.open(
              "https://calendly.com/endpointclients/30min",
              "_blank",
              "noopener,noreferrer",
            );
                  }}
                />
              </div>

              <div className="grid">
                <AnimatePresence
                  initial={false}
                  mode="popLayout"
                >
                  <motion.div
                    key={activeProcess.number}
                    className="col-start-1 row-start-1"
                    initial={{
                      opacity: 0,
                      y: 100,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -100,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <ProcessCard
                      number={activeProcess.number}
                      image={activeProcess.image}
                      imageAlt={activeProcess.imageAlt}
                      title={activeProcess.title}
                      description={activeProcess.description}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/12">
              <motion.div
                className="h-1.5 w-full origin-left rounded-full bg-[linear-gradient(90deg,#A062F5,#FFFFFF,#E4D2FD,#E1CCFD,#D7BBFC,#FFFFFF,#C9A4FB)] shadow-[0_0_25px_0_#9665EA]"
                initial={false}
                animate={{
                  scaleX: progressValue,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcessSection;