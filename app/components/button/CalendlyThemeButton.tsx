"use client";

import { ArrowUpIcon } from "@/public/icons";
import ThemeButton from "./ThemeButton";

type CalendlyThemeButtonProps = {
  label: string;
};

const CalendlyThemeButton = ({
  label,
}: CalendlyThemeButtonProps) => {
  return (
    <ThemeButton
      label={label}
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
  );
};

export default CalendlyThemeButton;