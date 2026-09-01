"use client";

import { motion, type Variants } from "motion/react";

import {
  CommandLineIcon,
  DatabaseIcon,
  FlashIcon,
  SecurityCheckIcon,
  UnilinkIcon,
  WebDesignIcon,
} from "@/public/icons";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import ServicePill from "../ServicePill";

type DesktopExpertisePillsProps = {
  side: "left" | "right";
};

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

const DesktopExpertisePills = ({
  side,
}: DesktopExpertisePillsProps) => {
  const isMobile = useIsMobile();

  if (side === "left") {
    return (
      <motion.div
        className="
      relative hidden flex-col items-center justify-between
      gap-12 overflow-visible
      xl:order-1 xl:col-span-3 xl:left-0 xl:flex xl:items-start
      2xl:-left-20
    "
        variants={pillGroupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.35,
        }}
      >
        <motion.div
          className="w-fit"
          variants={leftPillVariants}
        >
          <ServicePill
            title="AI Solutions"
            icon={
              <CommandLineIcon
                width={isMobile ? "24" : "33"}
                height={isMobile ? "24" : "33"}
              />
            }
            borderColor="#E86127"
            iconGradientFrom="#F16529"
            iconGradientTo="#8B3A18"
            rotation={9}
          />
        </motion.div>

        <motion.div
          className="w-fit"
          variants={leftPillVariants}
        >
          <ServicePill
            title="Web Applications"
            icon={
              <FlashIcon
                width={isMobile ? "24" : "33"}
                height={isMobile ? "24" : "33"}
              />
            }
            borderColor="#30C65F"
            iconGradientFrom="#31CD62"
            iconGradientTo="#196731"
            rotation={-2.5}
          />
        </motion.div>

        <motion.div
          className="w-fit md:mt-7"
          variants={leftPillVariants}
        >
          <ServicePill
            title="SaaS Dashboards"
            icon={
              <WebDesignIcon
                width={isMobile ? "24" : "33"}
                height={isMobile ? "24" : "33"}
              />
            }
            borderColor="#7F26DE"
            iconGradientFrom="#8A29F1"
            iconGradientTo="#4F188B"
            rotation={7}
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="
      relative hidden flex-col items-center justify-between
      gap-12 overflow-visible
      xl:order-3 xl:col-span-3 xl:-right-5 xl:flex xl:items-end
      2xl:-right-20
    "
      variants={pillGroupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.35,
      }}
    >
      <motion.div
        className="w-fit"
        variants={rightPillVariants}
      >
        <ServicePill
          title="Backend & APIs"
          icon={
            <UnilinkIcon
              width={isMobile ? "24" : "33"}
              height={isMobile ? "24" : "33"}
            />
          }
          borderColor="#3C4CE4"
          iconGradientFrom="#222E97"
          iconGradientTo="#0B0F31"
          rotation={-12}
        />
      </motion.div>

      <motion.div
        className="w-fit"
        variants={rightPillVariants}
      >
        <ServicePill
          title="Frontend Engineering"
          icon={
            <DatabaseIcon
              width={isMobile ? "24" : "33"}
              height={isMobile ? "24" : "33"}
            />
          }
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
          icon={
            <SecurityCheckIcon
              width={isMobile ? "24" : "33"}
              height={isMobile ? "24" : "33"}
            />
          }
          borderColor="#12C0AC"
          iconGradientFrom="#13CCB6"
          iconGradientTo="#09665B"
          rotation={-7}
        />
      </motion.div>
    </motion.div>
  );
};

export default DesktopExpertisePills;