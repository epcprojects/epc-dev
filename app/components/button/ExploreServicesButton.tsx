"use client";

import { ArrowUpIcon } from "@/public/icons";
import ThemeButton from "./ThemeButton";

const ExploreServicesButton = () => {
  return (
    <ThemeButton
      label="Explore Our Design Services"
      variant="white"
      icon={<ArrowUpIcon fill="#030712" />}
      onClick={() => {
        window.open(
          "https://endpointclients.com/services",
          "_blank",
          "noopener,noreferrer",
        );
      }}
    />
  );
};

export default ExploreServicesButton;