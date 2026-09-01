"use client";

import { useIsMobile } from "@/app/hooks/useIsMobile";

const ResponsiveHeroDescription = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile
        ? "We are full-cycle product development company  that combines Product design, Engineering and AI to Build experiences that are ready to scale."
        : "Endpoint Clients is a full-cycle product development company combining UI/UX design, custom software engineering and AI to build web platforms, mobile apps, SaaS products and digital experiences that are ready to scale."}
    </>
  );
};

export default ResponsiveHeroDescription;