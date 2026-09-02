import ImageColumns from "../ImageColumns";
import PulsingLabel from "../PulsingLabel";
import ExploreServicesButton from "../button/ExploreServicesButton";

const FullCycleDevelopmentSection = () => {
  return (
    <section className="bg-mirage ">
      {/* px-4 py-4 xl:px-16 md:py-16 */}
      <div
        className="
      relative overflow-hidden
      bg-woodsmoke
      px-1.5 py-4
       md:px-24 md:py-24
    "
      >
        {/*  rounded-[18px] md:rounded-[48px] */}
        <div
          className="
        pointer-events-none absolute inset-0 z-0
        w-full
        xl:inset-y-0 xl:left-auto
        xl:-right-40 xl:w-[50%] brightness-[0.70]  xl:brightness-100
      "
        >
          <ImageColumns />
        </div>

        <div
          className="
        pointer-events-none absolute inset-0 z-10
        md:bg-black/25 bg-black/60
      "
        />

        <div className="absolute top-0 left-140 h-full w-149 bg-[linear-gradient(251deg,rgba(21,21,21,0)_30.42%,#151515_55.36%)] hidden 2xl:block" />

        <div
          className="
        relative z-20 flex max-w-200
        flex-col items-start
        gap-4 px-2 py-8
        md:gap-13 md:px-8 md:py-16
      "
        >
          <div className="flex flex-col items-start gap-3 md:gap-4">
            <PulsingLabel text="Full-cycle Product Development" />

            <h3
              className="
            text-xl font-semibold
            leading-[130%] text-gray-50
            md:text-5xl md:leading-normal
          "
            >
              Design, development and AI expertise under one roof.
            </h3>
          </div>

          <ExploreServicesButton />
        </div>
      </div>
    </section>
  );
};

export default FullCycleDevelopmentSection;