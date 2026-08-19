"use client";
import { PulsingBorder } from "@paper-design/shaders-react";
import Image from "next/image";
import { Images } from "./ui";
import ParticleImage from "./components/ParticleImage";
import Marquee from "react-fast-marquee";
import { partnerLogos } from "./constants/constants";
export default function Home() {
  return (
    <>
      <section className="-mt-28 bg-[url('/images/HeroBgGradient.png')] bg-position-[center_top] bg-size-[100%_auto] bg-no-repeat pt-28 ">
        <div className="pt-26.5 pb-20 container max-w-7xl mx-auto px-8 grid grid-cols-10 items-center gap-16">
          <div className="col-span-7 flex flex-col gap-7.5">
            <div className="flex flex-col gap-4.5">
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
    text-lg
    text-transparent
    animate-text-gradient
  "
                    >
                      Global Product Development Agency
                    </p>
                  </div>
                </div>

                <h1 className="text-66 font-semibold text-white leading-21.5 tracking-[-1px]">
                  Empower Your Business with Custom Software & Web & App
                  Solutions
                </h1>
              </div>
              <p className="text-xl text-white">
                We combine product design expertise with full-cycle software
                engineering to build web platforms, mobile apps, SaaS products
                and AI-powered solutions that are intuitive to use and ready to
                grow with your business.
              </p>
            </div>
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row items-center gap-2 py-1">
                <p className="text-30 text-lavendar-indigo font-bold">15+</p>
                <p className="text-sm text-gray-300">(Years of Experience)</p>
              </div>
              <div className="h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0" />
              <div className="flex flex-row items-center gap-2 py-1">
                <p className="text-30 text-gray-50 font-bold">1.2k+</p>
                <p className="text-sm text-gray-300">(Projects Shipped)</p>
              </div>
              <div className="h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0" />
              <div className="flex flex-row items-center gap-2 py-1">
                <p className="text-30 text-lavendar-indigo font-bold">350+</p>
                <p className="text-sm text-gray-300">(Brands Worldwide)</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full">
            <ParticleImage />
          </div>
        </div>
      </section>
      <section
        className="overflow-hidden bg-dark-jungle-green py-2.5 relative"
        aria-label="Our partners"
      >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-64 bg-linear-to-r from-mirage to-mirage/0" />
        <Marquee autoFill speed={70} pauseOnHover>
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="mr-7 flex  shrink-0 items-center">
              <Image src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-64 bg-linear-to-r from-mirage/0 to-mirage" />
      </section>
      <section className="py-24">
           <div className="container max-w-7xl mx-auto py-16 px-8">
              <div className="grid grid-cols-12 gap-4">
                     <div className="col-span-3"> 

                     </div>
                     <div className="col-span-5 flex flex-col gap-4 items-center ">
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
    text-xl
   font-medium 
   text-[]
  "
                    >
                      What We Build
                    </p>
                  </div>
                </div>         
                     </div>
                     <div className="col-span-3">

                     </div>
              </div>
                  
           </div>
      </section>
    </>
  );
}
