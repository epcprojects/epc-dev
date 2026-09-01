"use client";

import {
  CountriesServedIcon,
  HappyClientsIcon,
  OurClientsIcon,
  TopRatedProjectsIcon,
} from "@/public/icons";

import { useIsMobile } from "@/app/hooks/useIsMobile";

type ResponsiveStatsIconProps = {
  icon:
    | "happy-clients"
    | "our-clients"
    | "countries-served"
    | "top-rated-projects";
};

const ResponsiveStatsIcon = ({
  icon,
}: ResponsiveStatsIconProps) => {
  const isMobile = useIsMobile();

  const width = isMobile ? "30" : "68";
  const height = isMobile ? "30" : "68";

  if (icon === "happy-clients") {
    return (
      <HappyClientsIcon
        width={width}
        height={height}
      />
    );
  }

  if (icon === "our-clients") {
    return (
      <OurClientsIcon
        width={width}
        height={height}
      />
    );
  }

  if (icon === "countries-served") {
    return (
      <CountriesServedIcon
        width={width}
        height={height}
      />
    );
  }

  return (
    <TopRatedProjectsIcon
      width={width}
      height={height}
    />
  );
};

export default ResponsiveStatsIcon;