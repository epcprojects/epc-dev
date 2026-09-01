import Image from "next/image";

import { Images } from "@/app/ui";

import CalendlyThemeButton from "../button/CalendlyThemeButton";

const ReadyProjectSection = () => {
  return (
    <section className="bg-mirage pb-8 md:pb-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-woodsmoke border border-white/12 py-8 md:py-16 px-4 md:px-25 rounded-2xl md:rounded-4xl bg-[url('/images/ReadyProjectBgImage.png')] bg-cover bg-center relative overflow-hidden">
          <div className="flex flex-col gap-5 md:gap-10.5 items-center">
            <div className="flex flex-col gap-3 md:gap-3.5 items-center">
              <h2 className="text-2xl md:text-[56px] text-center font-semibold text-white leading-[130%] md:leading-[120%]">
                Ready to start your project?
              </h2>

              <h3 className="text-base md:text-2xl text-neutral-400 text-center">
                Whether you’re launching something new or improving an existing
                platform.let’s build something great together.
              </h3>
            </div>

            <CalendlyThemeButton label="Let's Build Your Project" />
          </div>

          <Image
            src={
              Images.landingImages
                .ReadyProjectBottomLineImage
            }
            alt={"bottom"}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyProjectSection;