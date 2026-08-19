"use client";
import { PulsingBorder } from "@paper-design/shaders-react";
import Image from "next/image";
import { Images } from "./ui";
export default function Home() {
  return (
    <>
    <section className="-mt-28 bg-[url('/images/HeroBgGradient.png')] bg-position-[center_top] bg-size-[100%_auto] bg-no-repeat pt-28 ">
      <div className="pt-26.5 pb-20 container max-w-7xl mx-auto px-8 grid grid-cols-10 items-center gap-16">
        <div className="col-span-7 flex flex-col gap-7.5">
          <div className="flex flex-col gap-4.5">
            <div className="flex flex-col gap-3">
              <div className="w-fit rounded-lg bg-[linear-gradient(90deg,#8740FF_0%,#66666600_60%)] p-px">
                <div className="rounded-lg bg-mirage px-3.5 py-1.5">
                  <p className="w-fit bg-[linear-gradient(90deg,#8740FF_0%,#FFFFFF_30%)] bg-clip-text text-lg text-transparent">
                    Global Product Development Agency
                  </p>
                </div>
              </div>
              {/* <div className="relative isolate w-fit overflow-hidden rounded-lg bg-[linear-gradient(90deg,#8740FF_0%,#66666600_60%)] p-px">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-lg mix-blend-screen">
                  <PulsingBorder
                    width="100%"
                    height="100%"
                    colors={["#8740FF", "#FFFFFF", "#8740FF"]}
                    colorBack="#000000"
                    roundness={0.15}
                    thickness={0.018}
                    softness={0.85}
                    intensity={0.4}
                    bloom={0.7}
                    spots={2}
                    spotSize={0.7}
                    pulse={0.15}
                    smoke={0.1}
                    smokeSize={0.5}
                    speed={1}
                    scale={1}
                  />
                </div>
                <div className="relative z-20 rounded-lg bg-mirage px-3.5 py-1.5">
                  <p className="w-fit bg-[linear-gradient(90deg,#8740FF_0%,#FFFFFF_30%)] bg-clip-text text-lg text-transparent">
                    Global Product Development Agency
                  </p>
                </div>
              </div> */}

              <h1 className="text-66 font-semibold text-white leading-21.5 tracking-[-1px]">
                Empower Your Business with Custom Software & Web & App Solutions
              </h1>
            </div>
            <p className="text-xl text-white">
              We combine product design expertise with full-cycle software
              engineering to build web platforms, mobile apps, SaaS products and
              AI-powered solutions that are intuitive to use and ready to grow
              with your business.
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
        <div className="col-span-3">
             <Image src={Images.landingImages.EndpointPicture} alt={"endpoint picture"}/>
        </div>
      </div>
    </section>
    <section className="py-2.5 bg-dark-jungle-green">
              
    </section>
    </>
  );
}
