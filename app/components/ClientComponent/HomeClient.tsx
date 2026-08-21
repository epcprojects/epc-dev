"use client";
import { PulsingBorder } from "@paper-design/shaders-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import {
  ArrowUpIcon,
  CommandLineIcon,
  DatabaseIcon,
  FlashIcon,
  HappyClientsIcon,
  SecurityCheckIcon,
  UnilinkIcon,
  WebDesignIcon,
} from "@/public/icons";

import { motion, type Variants } from "motion/react";
import { Images } from "@/app/ui";
import ParticleImage from "../ParticleImage";
import { partnerLogos } from "@/app/constants/constants";
import ServicePill from "../ServicePill";
import PulsingLabel from "../PulsingLabel";
import HorizontalScrollSection from "../HorizontalScrollSection";
import ThemeButton from "../button/ThemeButton";
import ImageColumns from "../ImageColumns";
const pillGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const leftPillVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -140,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

const rightPillVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 140,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};
export default function HomeClient() {
  const capabilities = [
    {
      id: 1,
      title: "UI/UX & Product Design",
      description:
        "Research, flows, information architecture, wireframes, prototypes, high-fidelity UI and scalable design systems.",
      video: "/videos/CapabilitiesVideo1.mp4",
    },
    {
      id: 2,
      title: "Custom Software Development",
      description:
        "We design and build tailored software solutions that fit your unique business needs. Our developers ensure scalability, security, and seamless integration with your existing systems.",
      video: "/videos/CapabilitiesVideo2.mp4",
    },
    {
      id: 3,
      title: "Web & SaaS Development",
      description:
        "We build responsive web applications and SaaS platforms with intuitive interfaces, reliable architecture and room to evolve as your product grows.",
      video: "/videos/CapabilitiesVideo3.mp4",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "We create polished mobile products for iOS, Android and cross-platform environments, connecting thoughtful UX with dependable engineering that converts.",
      video: "/videos/CapabilitiesVideo4.mp4",
    },
    {
      id: 5,
      title: "AI & ML Development",
      description:
        "We integrate AI into products and workflows through intelligent features, automation, AI assistants and custom solutions built around practical use cases.",
      video: "/videos/CapabilitiesVideo5.mp4",
    },
    {
      id: 6,
      title: "Cloud, APIs & Integrations",
      description:
        "We build the systems behind your product from APIs and databases to third-party integrations and backend architecture that keeps everything connected.",
      video: "/videos/CapabilitiesVideo6.mp4",
    },
  ];
  const capabilityCards = capabilities.map((capability) => (
    <article
      key={capability.id}
      className="flex h-screen flex-col justify-center gap-6 border-r border-white/12 px-12 py-8"
    >
      <video
        src={capability.video}
        className="h-auto w-full"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={capability.title}
      />

      <div className="flex flex-col gap-3.5">
        <p className="text-[34px] font-bold text-desert-storm">
          {capability.title}
        </p>

        <p className="text-xl text-white">{capability.description}</p>
      </div>
    </article>
  ));
  return (
    <>
      <section className="-mt-35 md:-mt-28 bg-[url('/images/HeroBgGradient.png')] bg-position-[center_top] bg-size-[100%_auto] bg-no-repeat pt-28 ">
        <div className="pt-15 md:pt-20 pb-10 md:pb-26.5 container max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 xl:grid-cols-10 items-center gap-5">
          <div className="xl:col-span-7 flex flex-col gap-4 md:gap-7.5">
            <div className="flex flex-col gap-2 md:gap-4.5">
              <div className="flex flex-col gap-3">
                {/* <div className="w-fit rounded-lg bg-[linear-gradient(90deg,#8740FF_0%,#66666600_60%)] p-px">
                <div className="rounded-lg bg-mirage px-3.5 py-1.5">
                  <p className="w-fit bg-[linear-gradient(90deg,#8740FF_0%,#FFFFFF_30%)] bg-clip-text text-lg text-transparent">
                    Global Product Development Agency
                  </p>
                </div>
              </div> */}
                <div className="relative isolate w-fit overflow-hidden rounded-lg bg-[linear-gradient(90deg,#8740FF_0%,#66666600_60%)] p-px ">
                  <div className="pointer-events-none absolute inset-0 z-10">
                    <PulsingBorder
                      width="100%"
                      height="100%"
                      colors={["#8742ff", "#1a1a1a"]}
                      colorBack="#00000090"
                      roundness={0.38}
                      thickness={0.04}
                      softness={0.75}
                      intensity={0.2}
                      bloom={0.25}
                      spots={1}
                      spotSize={0.5}
                      pulse={0.25}
                      smoke={0.3}
                      smokeSize={0.6}
                      speed={1}
                      scale={1}
                    />
                  </div>

                  <div className="relative z-20 rounded-[7px] bg-mirage px-3.5 py-1.5">
                    <p
                      className="
    w-fit
    bg-[linear-gradient(90deg,#8740FF_0%,#FFFFFF_40%,#8740FF_100%)]
    bg-[length:200%_100%]
    bg-clip-text
    text-base md:text-lg
    text-transparent
    animate-text-gradient
  "
                    >
                      Global Product Development Agency
                    </p>
                  </div>
                </div>

                <h1 className="text-3xl md:text-66 font-semibold text-white leading-[120%] md:leading-21.5 tracking-[-1px]">
                  Empower Your Business with Custom Software & Web & App
                  Solutions
                </h1>
              </div>
              <p className="text-base md:text-xl text-white">
                We combine product design expertise with full-cycle software
                engineering to build web platforms, mobile apps, SaaS products
                and AI-powered solutions that are intuitive to use and ready to
                grow with your business.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-5">
              <div className="flex flex-row items-center gap-2 py-1">
                <p className="text-xl md:text-30 text-lavendar-indigo font-bold">
                  15+
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  (Years of Experience)
                </p>
              </div>
              <div className="h-5 md:h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0" />
              <div className="flex flex-row items-center gap-2 py-1">
                <p className="text-xl md:text-30 text-gray-50 font-bold">
                  1.2k+
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  (Projects Shipped)
                </p>
              </div>
              <div className="h-5 md:h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0" />
              <div className="flex flex-row items-center gap-2 py-1">
                <p className="text-xl md:text-30 text-lavendar-indigo font-bold">
                  350+
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  (Brands Worldwide)
                </p>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3   w-full">
            <ParticleImage />
          </div>
        </div>
      </section>
      <section
        className="overflow-hidden bg-dark-jungle-green py-2.5 relative"
        aria-label="Our partners"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-64 bg-linear-to-r from-mirage to-mirage/0" />
        <Marquee autoFill speed={70} pauseOnHover>
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="mr-7 flex  shrink-0 items-center">
              <Image src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-64 bg-linear-to-r from-mirage/0 to-mirage" />
      </section>
      <section className="py-8 md:py-24">
        <div className="container max-w-7xl mx-auto py-4 md:py-16 px-4 md:px-8 overflow-visible">
          <div className="grid grid-cols-1 xl:grid-cols-14 xl:gap-3 gap-8 xl:-translate-x-3 2xl:translate-x-0 overflow-visible">
            <motion.div
              className="relative xl:left-0 2xl:-left-20 xl:col-span-3 flex flex-col xl:items-start items-center justify-between gap-12 overflow-visible"
              variants={pillGroupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
            >
              <motion.div className="w-fit" variants={leftPillVariants}>
                <ServicePill
                  title="AI Solutions"
                  icon={<CommandLineIcon />}
                  borderColor="#E86127"
                  iconGradientFrom="#F16529"
                  iconGradientTo="#8B3A18"
                  rotation={9}
                />
              </motion.div>

              <motion.div className="w-fit" variants={leftPillVariants}>
                <ServicePill
                  title="Web Applications"
                  icon={<FlashIcon />}
                  borderColor="#30C65F"
                  iconGradientFrom="#31CD62"
                  iconGradientTo="#196731"
                  rotation={-2.5}
                />
              </motion.div>

              <motion.div className="w-fit md:mt-7" variants={leftPillVariants}>
                <ServicePill
                  title="SaaS Engineering"
                  icon={<WebDesignIcon />}
                  borderColor="#7F26DE"
                  iconGradientFrom="#8A29F1"
                  iconGradientTo="#4F188B"
                  rotation={7}
                />
              </motion.div>
            </motion.div>
            <div className="xl:col-span-8 flex flex-col gap-4 items-center ">
              <PulsingLabel text="What We Build" />
              <p className="text-2xl md:text-5xl font-playfair text-center text-white leading-[120%]">
                We design and engineer digital products across web, mobile, SaaS
                and AI from the user experience to the technology behind it.
              </p>
            </div>
            <motion.div
              className="relative xl:-right-5 2xl:-right-20 xl:col-span-3 flex flex-col items-center xl:items-end justify-between gap-12 overflow-visible"
              variants={pillGroupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
            >
              <motion.div className="w-fit" variants={rightPillVariants}>
                <ServicePill
                  title="Backend & APIs"
                  icon={<UnilinkIcon />}
                  borderColor="#3C4CE4"
                  iconGradientFrom="#222E97"
                  iconGradientTo="#0B0F31"
                  rotation={-12}
                />
              </motion.div>

              <motion.div className="w-fit" variants={rightPillVariants}>
                <ServicePill
                  title="Frontend Engineering"
                  icon={<DatabaseIcon />}
                  borderColor="#06B4FF"
                  iconGradientFrom="#29B5F1"
                  iconGradientTo="#18688B"
                  rotation={3}
                />
              </motion.div>

              <motion.div
                className="w-fit md:mt-7"
                variants={rightPillVariants}
              >
                <ServicePill
                  title="Mobile App Development"
                  icon={<SecurityCheckIcon />}
                  borderColor="#12C0AC"
                  iconGradientFrom="#13CCB6"
                  iconGradientTo="#09665B"
                  rotation={-7}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <HorizontalScrollSection
        leftContent={
          <div className="flex flex-col items-start gap-7">
            <div className="flex flex-col gap-4.5">
              <PulsingLabel text="Our Capabilities" />

              <p className="text-5xl font-bold leading-[100%] text-desert-storm">
                Built to take your product from bold idea to real-world software
              </p>
            </div>

            <ThemeButton
              variant="gradient"
              icon={<ArrowUpIcon />}
              onClick={() => {}}
            >
              Get a Free Consultation
            </ThemeButton>
          </div>
        }
        items={capabilityCards}
      />
      <div className="bg-mirage px-16 py-16">
        <div className="relative overflow-hidden rounded-[48px] bg-woodsmoke px-24 py-24">
          <div className="pointer-events-none absolute inset-y-0 -right-40 z-0 w-[50%]">
            <ImageColumns />
          </div>
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-20 flex max-w-200 flex-col items-start gap-13 px-8 py-16">
            <div className="flex flex-col items-start gap-4">
              <PulsingLabel text="Full-cycle product team" />

              <p className="text-5xl font-semibold text-gray-50">
                Design, development and AI expertise under one roof.
              </p>
            </div>

            <ThemeButton
              variant="white"
              icon={<ArrowUpIcon fill="#030712" />}
              onClick={() => {}}
            >
              Explore Our Services
            </ThemeButton>
          </div>
        </div>
      </div>
      <section className="bg-mirage border-y border-y-white/18">
        <div className="container max-w-7xl mx-auto px-4 xl:px-8 flex flex-row">
                <div className="p-9 flex flex-row gap-8 items-center border-r border-r-white/18">
                      <HappyClientsIcon/>
                </div>
        </div>
      </section>
    </>
  );
}
