"use client";

import {
  EpcLogoIcon,
  TraditionalIcon,
} from "@/public/icons";

import { useIsMobile } from "@/app/hooks/useIsMobile";

type ResponsiveComparisonIconProps = {
  icon: "traditional" | "endpoint";
};

const ResponsiveComparisonIcon = ({
  icon,
}: ResponsiveComparisonIconProps) => {
  const isMobile = useIsMobile();

  if (icon === "traditional") {
    return (
      <TraditionalIcon
        width={isMobile ? "24" : "28"}
        height={isMobile ? "24" : "28"}
      />
    );
  }

  return (
    <EpcLogoIcon
      width={isMobile ? "24" : "31"}
      height={isMobile ? "24" : "31"}
    />
  );
};

export default ResponsiveComparisonIcon;