import ParticleImage from "../ParticleImage";
import HeroPulsingBadge from "./HeroPulsingBadge";
import ResponsiveHeroDescription from "./ResponsiveHeroDescription";

const HeroSection = () => {
  return (
    <section className="-mt-13 md:-mt-28 bg-mirage bg-[url('/images/HeroBgGradient.png')] bg-position-[center_top] bg-size-[100%_auto] bg-no-repeat pt-5  md:pt-28 ">
      <div className="pt-15 xl:pt-20 pb-10 xl:pb-26.5 container max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-10 items-center gap-5">
        <div className="md:col-span-7 flex flex-col gap-4 md:gap-7.5">
          <div className="flex flex-col gap-2 md:gap-4.5">
            <div className="flex flex-col gap-3">
              <HeroPulsingBadge />

              <h2 className="text-[32px] xl:text-66 font-semibold text-white leading-[120%] xl:leading-21.5 tracking-[-1px]">
                Empower Your Business with Custom Software , Web & App
                Solutions
              </h2>
            </div>

            <h3 className="text-base text-white xl:text-xl">
              <ResponsiveHeroDescription />
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 md:gap-5">
            <div className="flex flex-row items-center gap-1.5 py-1">
              <p className="text-2xl xl:text-30 text-lavendar-indigo font-bold">
                15+
              </p>

              <p className="text-xs md:text-sm text-gray-300">
                (Years of Experience)
              </p>
            </div>

            <div className="h-5 md:h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0 hidden md:block" />

            <div className="flex flex-row items-center gap-1.5 py-1">
              <p className="text-2xl xl:text-30 text-gray-50 font-bold">
                1.2k+
              </p>

              <p className="text-xs md:text-sm text-gray-300">
                (Projects Shipped)
              </p>
            </div>

            <div className="h-5 md:h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0 hidden md:block" />

            <div className="flex flex-row items-center gap-1.5 py-1">
              <p className="text-2xl xl:text-30 text-lavendar-indigo font-bold">
                350+
              </p>

              <p className="text-xs md:text-sm text-gray-300">
                (Brands Worldwide)
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 hidden md:flex items-center justify-center  w-full">
          <ParticleImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;