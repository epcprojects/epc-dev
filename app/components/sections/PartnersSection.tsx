"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import { partnerLogos } from "@/app/constants/constants";

const PartnersSection = () => {
  return (
    <section
      className="overflow-hidden bg-[#222222] min-h-10.5 md:min-h-15.5 py-1.5 md:py-2.5 relative"
      aria-label="Our partners"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-64 bg-linear-to-r from-mirage to-mirage/0" />

      <Marquee autoFill speed={50} pauseOnHover>
        {partnerLogos.map((logo) => (
          <div key={logo.alt} className="mr-7 flex  shrink-0 items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              className="md:w-fit md:h-fit w-25 h-auto"
            />
          </div>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-64 bg-linear-to-r from-mirage/0 to-mirage" />
    </section>
  );
};

export default PartnersSection;