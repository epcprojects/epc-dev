"use client";

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

const MobileExpertisePills = () => {
  const isMobile = useIsMobile();

  return (
    <div className="order-2 flex w-full flex-row items-stretch justify-between gap-3 overflow-visible xl:hidden">
      <div
        className="
      relative flex min-w-0 flex-1
      flex-col items-start justify-between
      gap-8 overflow-visible
    "
      >
        <div className="w-fit">
          <ServicePill
            title="AI Solutions"
            icon={
              <CommandLineIcon
                width="20"
                height="20"
              />
            }
            borderColor="#E86127"
            iconGradientFrom="#F16529"
            iconGradientTo="#8B3A18"
            rotation={9}
          />
        </div>

        <div className="w-fit">
          <ServicePill
            title={
              isMobile
                ? "Web App"
                : "Web Applications"
            }
            icon={
              <FlashIcon
                width="20"
                height="20"
              />
            }
            borderColor="#30C65F"
            iconGradientFrom="#31CD62"
            iconGradientTo="#196731"
            rotation={-2.5}
          />
        </div>

        <div className="w-fit">
          <ServicePill
            title="SaaS Engineering"
            icon={
              <WebDesignIcon
                width="20"
                height="20"
              />
            }
            borderColor="#7F26DE"
            iconGradientFrom="#8A29F1"
            iconGradientTo="#4F188B"
            rotation={7}
          />
        </div>
      </div>

      <div
        className="
      relative flex min-w-0 flex-1
      flex-col items-end justify-between
      gap-8 overflow-visible
    "
      >
        <div className="w-fit">
          <ServicePill
            title="Backend & APIs"
            icon={
              <UnilinkIcon
                width="20"
                height="20"
              />
            }
            borderColor="#3C4CE4"
            iconGradientFrom="#222E97"
            iconGradientTo="#0B0F31"
            rotation={-12}
          />
        </div>

        <div className="w-fit">
          <ServicePill
            title="Frontend Engineering"
            icon={
              <DatabaseIcon
                width="20"
                height="20"
              />
            }
            borderColor="#06B4FF"
            iconGradientFrom="#29B5F1"
            iconGradientTo="#18688B"
            rotation={3}
          />
        </div>

        <div className="w-fit">
          <ServicePill
            title={
              isMobile
                ? "Mobile App Dev"
                : "Mobile App Development"
            }
            icon={
              <SecurityCheckIcon
                width="20"
                height="20"
              />
            }
            borderColor="#12C0AC"
            iconGradientFrom="#13CCB6"
            iconGradientTo="#09665B"
            rotation={-7}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileExpertisePills;